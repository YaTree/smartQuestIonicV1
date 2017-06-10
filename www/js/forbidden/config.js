/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('forbidden.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.forbidden', {
        // cache: false,
        //requireAuthentication: false,
        url: '/forbidden',
        templateUrl: 'js/forbidden/forbidden.html'
      })

  });
