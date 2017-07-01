/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('task0.module')
  .controller('Task0Ctrl', Task0Ctrl);

Task0Ctrl.$inject = ['$scope', 'apiService', '$ionicLoading', '$state', '$stateParams'];

function Task0Ctrl($scope, apiService, $ionicLoading, $state, $stateParams) {
  console.log($stateParams, $stateParams.obj);
  $scope.task = $stateParams.obj;
}
