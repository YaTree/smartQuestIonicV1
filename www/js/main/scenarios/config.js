/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('scenarios.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.scenarios', {
        url: '/scenarios',
        views: {
          'menuContent': {
            templateUrl: 'js/main/scenarios/scenarios.html',
            controller: 'ScenariosCtrl'
          }
        }
      })
  });
