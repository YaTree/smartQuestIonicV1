/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('task0.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.task0', {
        url: '/task0',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/tasks/task0/task0.html',
            controller: 'Task0Ctrl'
          }
        },
        params: {
          obj: null
        },
      })
  });
