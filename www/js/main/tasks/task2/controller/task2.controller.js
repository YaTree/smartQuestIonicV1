/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('task2.module')
  .controller('Task2Ctrl', Task0Ctrl);

Task2Ctrl.$inject = ['$scope', 'apiService', '$ionicLoading', '$state', '$stateParams'];

function Task2Ctrl($scope, apiService, $ionicLoading, $state, $stateParams) {
  $scope.task = $stateParams.obj;
}
