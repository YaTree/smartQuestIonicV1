/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('login.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.games', {
        url: '/games',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/games/games.html',
            controller: 'GamesCtrl'
          }
        }
      })
  });
