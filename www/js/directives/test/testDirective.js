/**
 * Created by yatree on 20/06/17.
 */
angular.module('smart.quest')
  .directive('sqTest', function () {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/test/sqTest.html',
      scope: {
        labelText: '@'
      }
    }
  });
