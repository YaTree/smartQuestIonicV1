/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('profile.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'js/main/profile/profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })
  });
