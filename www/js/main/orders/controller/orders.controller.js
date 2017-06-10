/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('orders.module')
  .controller('OrdersCtrl', OrdersCtrl);

OrdersCtrl.$inject = ['$scope', '$state'];

function OrdersCtrl($scope, $state) {
  $scope.show = "This is from OrdersCtrl";
}

