/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('task2.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.task2', {
        url: '/task2',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/tasks/task2/task2.html',
            controller: 'Task2Ctrl'
          }
        },
        params: {
          obj: null
        },
      })
  });
