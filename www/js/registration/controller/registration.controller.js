/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('registration.module')
  .controller('RegistrationCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state'];

function LoginCtrl($scope, $state) {
  $scope.doLogin = function() {
    $state.go('app.main.profile');
  };
}

