/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('orders.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.orders', {
        url: '/orders',
        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/orders/orders.html',
            controller: 'OrdersCtrl'
          }
        }
      })
  });
