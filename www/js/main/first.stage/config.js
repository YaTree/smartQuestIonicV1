/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('first.stage.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.preview', {
        url: '/preview',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/first.stage/first.stage.html',
            controller: 'FirstStageCtrl'
          }
        },
        params: {
          obj: null
        }
      })
  });
