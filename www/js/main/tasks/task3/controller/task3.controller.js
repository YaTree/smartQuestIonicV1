/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('task3.module')
  .controller('Task3Ctrl', Task0Ctrl);

Task3Ctrl.$inject = ['$scope', 'apiService', '$ionicLoading', '$state', '$stateParams'];

function Task3Ctrl($scope, apiService, $ionicLoading, $state, $stateParams) {
  $scope.task = $stateParams.obj;
}
