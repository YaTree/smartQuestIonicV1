/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('registration.module')
  .controller('RegistrationCtrl', RegistrationCtrl);

RegistrationCtrl.$inject = ['$scope', '$state', 'apiService', 'cacheService', '$ionicLoading'];


function RegistrationCtrl($scope, $state, apiService, cacheService, $ionicLoading) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.errorAlert = '';

  $scope.doRegistration = function (registrationForm) {
    if (registrationForm.$valid) {
      $ionicLoading.show({template: '<ion-spinner icon="ios"></ion-spinner><p>Registration...</p>'});
      apiService.createNewUser($scope.user.email, $scope.user.password)
        .then(function (response) {
          console.log(response);

          if (response.data.status == 'failed') {
            $scope.errorAlert = response.data.message;
          } else {
            apiService.getAuthToken($scope.user.email, $scope.user.password)
              .then(function (resp) {
                $ionicLoading.hide();

                console.log (resp.data);
                cacheService.saveUser({
                  userLogin: $scope.user.email,
                  userPassword: $scope.user.password,
                  userToken: resp.data.token
                });
                $state.go('app.main.news');
              });
          }
        });

    }

  };
}


