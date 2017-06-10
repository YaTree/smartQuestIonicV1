/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('logout.module')
  .controller('LogoutCtrl', LogoutCtrl);

LogoutCtrl.$inject = ['$scope', '$state'];

function LogoutCtrl($scope, $state) {
  $scope.show = "This is from LogoutCtrl";
}

