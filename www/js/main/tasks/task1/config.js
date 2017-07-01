/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('task1.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.task1', {
        url: '/task1',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/tasks/task1/task1.html',
            controller: 'Task1Ctrl'
          }
        },
        params: {
          obj: null
        },
      })
  });
