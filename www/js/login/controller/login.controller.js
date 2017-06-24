/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('login.module')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state', 'apiService','cacheService','$ionicLoading'];

function LoginCtrl($scope, $state, apiService, cacheService, $ionicLoading) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.errorAlert = '';

  $scope.doLogin = function(loginForm) {
    if (loginForm.$valid) {
      $ionicLoading.show({template: '<ion-spinner icon="ios"></ion-spinner><p>Login...</p>'});
      apiService.getAuthToken($scope.user.email, $scope.user.password)
        .then(function (response) {

          $ionicLoading.hide();
          if (response.data.status == 'failed') {
            $scope.errorAlert = response.data.message;
          } else {

            cacheService.saveUser({
              userLogin: $scope.user.email,
              userPassword: $scope.user.password,
              userToken: response.data.token
            });
            $state.go('app.main.news');
          }
        });

    }

  };
}

