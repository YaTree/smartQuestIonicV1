angular
  .module('login.module')
  .config(function config($stateProvider) {
      $stateProvider
          .state('app.login', {
              requireAuthentication: false,
                  url: '/login',
                  views: {
                      'mainView': {
                          templateUrl: 'js/login/login.html',
                          controller: 'LoginCtrl'
                      }
                  }
          })
  });
