/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('tutorial.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.tutorial', {
        //requireAuthentication: false,
        url: '/tutorial',
        templateUrl: 'js/tutorial/tutorial.html',
        controller: 'TutorialCtrl'
      })
  });
