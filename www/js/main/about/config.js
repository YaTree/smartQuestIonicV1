/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('about.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.about', {
        url: '/about',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/about/about.html',
            controller: 'AboutCtrl'
          }
        }
      });
  });
