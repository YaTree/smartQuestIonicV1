/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('scenarios.module')
  .controller('ScenariosCtrl', ScenariosCtrl);

ScenariosCtrl.$inject = ['$scope', '$state'];

function ScenariosCtrl($scope, $state) {
  $scope.show = "This is from ScenariosCtrl";
}

