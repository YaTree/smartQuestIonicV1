angular
  .module('registration.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.registration', {
        requireAuthentication: false,
        url: '/registration',
        views: {
          'mainView': {
            templateUrl: 'js/registration/registration.html',
            controller: 'RegistrationCtrl'
          }
        }
      })
  });
