/**
 * Created by yatree on 10/06/17.
 */
angular
  .module('stages.module')
  .config(function config($stateProvider) {
    $stateProvider
      .state('app.main.stages', {
        abstract: true,

        url: '/stages',

        requireAuthentication: true,
        views: {
          'menuContent': {
            templateUrl: 'js/main/stages/stages.html',
            controller: 'StagesCtrl'
          }
        },
        params: {
          obj: null
        }
      })
      .state('app.main.stages.preview', {
        url: '/preview',
        views: {
          'preview-tab': {
            templateUrl: 'js/main/stages/preview/preview.html',
            //controller: 'HomeTabCtrl'
            // controller: function ($scope, $ionicSideMenuDelegate) {
            //   $scope.openMenu = function () {
            //     $ionicSideMenuDelegate.toggleLeft();
            //   }
            // }
          }
        }
      })
      .state('app.main.stages.rules', {
        url: '/rules',
        views: {
          'rules-tab': {
            templateUrl: 'js/main/stages/rules/rules.html',
            // controller: function ($scope, $ionicSideMenuDelegate) {
            //   $scope.openMenu = function () {
            //     $ionicSideMenuDelegate.toggleLeft();
            //   }
            // }
          }
        }
      })
  });
