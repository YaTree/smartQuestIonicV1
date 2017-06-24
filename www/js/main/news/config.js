/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('news.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.news', {
        url: '/news',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/news/news.html',
            controller: 'NewsCtrl'
          }
        }
      })
  });
