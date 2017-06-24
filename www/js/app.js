angular.module('smart.quest', ['ionic', 'smart.quest.controllers',
  'login.module', 'registration.module',
  'news.module',
  'scenarios.module', 'games.module',
  'about.module', 'orders.module',
  'profile.module', 'logout.module',
  'main.module', 'forbidden.module'])

  .run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    $rootScope.$on('$stateChangeStart', function (event, next) {

      var currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
      if ($rootScope.currentUser === undefined && currentUser === null) {
        //noinspection JSUnresolvedVariable
        if (next.requireAuthentication) {
          //noinspection JSUnresolvedFunction
          event.preventDefault(); // prevent current page from loading
          $state.go('app.login');
        }
        else {
          $rootScope.currentUser = null;
        }
      }
      else {
        $rootScope.currentUser = currentUser;
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('checkLogin', {
        requireAuthentication: false,
        url: '/'

      })
      .state('app', {
        abstract: true,
        views: {
          'mainView': {
            template: '<ion-nav-view name="mainView"></ion-nav-view>'
          }
        }
      });


    $urlRouterProvider.otherwise('/login');
  });
