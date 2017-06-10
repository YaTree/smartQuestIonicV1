/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('main.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main', {
        // cache: false,
        //requireAuthentication: false,
        abstract: true,
        views: {
          'mainView': {
            templateUrl: 'js/main/main.html' // side-menu
          }
        },
        url: '/main'

      });
  });
