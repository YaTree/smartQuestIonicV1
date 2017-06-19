/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular.module('profile.module').controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$scope', '$state'];

function ProfileCtrl($scope, $state) {
  $scope.show = "This is from ProfileCtrl";
}
