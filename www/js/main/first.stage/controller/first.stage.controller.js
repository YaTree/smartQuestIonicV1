/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('first.stage.module')
  .controller('FirstStageCtrl', FirstStageCtrl);

FirstStageCtrl.$inject = ['$scope', 'apiService', '$ionicLoading', '$stateParams', 'cacheService', 'taskService', '$state'];

function FirstStageCtrl($scope, apiService, $ionicLoading, $stateParams, cacheService, taskService, $state) {

  //TODO Check localStorage, if no data about this scenraio, we will make http-request. Then we will store result in localStorage.

  var scenarioId = $stateParams.obj.scenario_id;
  console.log('wtfbro? ',scenarioId);
  $ionicLoading.show({template: '<ion-spinner icon="ios"></ion-spinner><p>Login...</p>'});
  apiService.getStagesByScenarioId(scenarioId).then(function (response) {
    if (response.data.status == 'failed') {
      $scope.errorAlert = response.data.message;
    } else {
        var stages = response.data.data;
        if (stages.length == 0) {
          $scope.firstStage = {
            stage_name: 'No name',
            stage_duration: 'You will die here',
            stage_description: 'No description! Asshole!'
          }
        } else {
          $scope.firstStage = stages[0];
          console.log('Stage--->>>', $scope.firstStage);

        }
      $ionicLoading.hide();
    }
  });

  $scope.options = {
    loop: false,
    // effect: 'fade',
    // show-nav-buttons="false",
    pagination: true,

    effect: 'coverflow',
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
      centeredSlides: true
    },
    speed: 300,
    spaceBetween: 100,
    onInit: function (previewSlider) {
      previewSlider.initObservers();
      $scope.previewSlider = previewSlider;
    },
  };

  $scope.goToFirstTask = function (stageId) {
    $ionicLoading.show({template: '<ion-spinner icon="ios"></ion-spinner><p>Loading tasks...</p>'});
    apiService.getTasksByStageId(stageId).then(function (response) {
      var taskList = response.data.data;
      cacheService.saveTasks(scenarioId, taskList);


      var firstTask = taskService.getTaskByOrder(taskList, 0);
      console.log('FIRAST TASK', firstTask);
      $state.go('app.main.task' + taskService.getTaskType(firstTask), {obj: firstTask});
      $ionicLoading.hide();

    });
  }
}
