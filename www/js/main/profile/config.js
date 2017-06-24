/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('profile.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.profile', {
        url: '/profile',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/profile/profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })
  });
