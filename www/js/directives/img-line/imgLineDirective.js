/**
 * Created by yatree on 20/06/17.
 */
angular.module('smart.quest')
  .directive('imgLine', function () {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/img-line/imgLine.html',
      scope: true,
      link: function(scope,elem,attr){
           // code goes here ...
      }
    }
  });


