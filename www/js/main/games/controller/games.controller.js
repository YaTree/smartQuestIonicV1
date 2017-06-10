/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('games.module')
  .controller('GamesCtrl', GamesCtrl);

GamesCtrl.$inject = ['$scope', '$state'];

function GamesCtrl($scope, $state) {
  $scope.show = "This is from GamesCtrl";
}

