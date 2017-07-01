/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('stages.module')
  .controller('StagesCtrl', StagesCtrl);

StagesCtrl.$inject = ['$scope', 'apiService', '$ionicLoading', '$stateParams', '$ionicSideMenuDelegate'];

function StagesCtrl($scope, apiService, $ionicLoading, $stateParams, $ionicSideMenuDelegate) {
  console.log($stateParams);
    $scope.openMenu = function () {
      $ionicSideMenuDelegate.toggleLeft();
  }
}
