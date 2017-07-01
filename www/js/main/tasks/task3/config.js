/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('task3.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.task3', {
        url: '/task3',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/tasks/task3/task3.html',
            controller: 'Task3Ctrl'
          }
        },
        params: {
          obj: null
        },
      })
  });
