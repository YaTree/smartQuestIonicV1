/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('news.module')
  .controller('NewsCtrl', NewsCtrl);

NewsCtrl.$inject = ['$scope'];

function NewsCtrl($scope) {

  $scope.show = "This is from NewsCtrl";

}

