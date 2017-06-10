/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('logout.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.logout', {
        url: '/logout',
        views: {
          'menuContent': {
            templateUrl: 'js/main/logout/logout.html',
            controller: 'LogoutCtrl'
          }
        }
      });
  });
