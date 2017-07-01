/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('task1.module')
  .controller('Task1Ctrl', Task0Ctrl);

Task1Ctrl.$inject = ['$scope', 'apiService', '$ionicLoading', '$state', '$stateParams'];

function Task1Ctrl($scope, apiService, $ionicLoading, $state, $stateParams) {
  $scope.task = $stateParams.obj;
}
