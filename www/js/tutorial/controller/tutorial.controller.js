/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('tutorial.module')
  .controller('TutorialCtrl', TutorialCtrl);

TutorialCtrl.$inject = ['$scope', '$state'];

function TutorialCtrl($scope, $state) {
  $scope.title = "This is from TutorialCtrl";
}

