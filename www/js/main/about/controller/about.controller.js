/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('about.module')
  .controller('AboutCtrl', AboutCtrl);

AboutCtrl.$inject = ['$scope', '$state'];

function AboutCtrl($scope, $state) {
  $scope.show = "This is from AboutCtrl";
}

