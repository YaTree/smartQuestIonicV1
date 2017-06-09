// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
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
    console.log('wtf?!', currentUser, $rootScope.currentUser);
    if ($rootScope.currentUser === undefined && currentUser === null) {


      //noinspection JSUnresolvedVariable
      if (next.requireAuthentication) {
        //noinspection JSUnresolvedFunction
        event.preventDefault(); // prevent current page from loading
        // $state.go('forbidden');
        $state.go('app.login');
      }
      else {
        $rootScope.currentUser = null;
      }
    }
    else {
      $rootScope.currentUser = currentUser;
      // if(!next.requireAuthentication) {
      //   event.preventDefault();
      //   $state.go('app.main.reviews');
      // }
    }


  });
})

.config(function($stateProvider, $urlRouterProvider) {
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
  })
  .state('app.login', {
    requireAuthentication: false,
    url: '/login',
    views: {
      'mainView': {
      templateUrl: 'templates/login.html',
        controller: 'AppCtrl'
      }
    }


  })
  .state('app.tutorial', {
    //requireAuthentication: false,
    url: '/tutorial',
    templateUrl: 'templates/tutorial.html',
    //controller: 'TutorialCtrl'
  })
  .state('app.sign-up', {
    //requireAuthentication: false,
    url: '/sign-up',
    templateUrl: 'templates/sign-up.html',
    controller: 'SignUpCtrl'
  })
  .state('app.forbidden', {
    // cache: false,
    //requireAuthentication: false,
    url: '/forbidden',
    templateUrl: 'templates/forbidden.html'
  })


  // .state('app', {
  //   url: '/app',
  //   abstract: true,
  //   templateUrl: 'templates/menu.html',
  //   controller: 'AppCtrl'
  // })

    .state('app.main', {
    // cache: false,
    //requireAuthentication: false,
    abstract: true,
    views: {
      'mainView': {
        templateUrl: 'templates/main.html' // side-menu
      }
    },
    url: '/main'

  })


    .state('app.main.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'PlaylistsCtrl'
      }
      }
  })
  .state('app.main.news', {
    url: '/news',
    views: {
      'menuContent': {
        templateUrl: 'templates/news.html'
      }
    }
  })
  .state('app.main.scenario-selector', {
    url: '/scenario-selector',
    views: {
      'menuContent': {
        templateUrl: 'templates/scenario-selector.html'
        //controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.main.my-scenarios', {
    url: '/my-scenarios',
    views: {
      'menuContent': {
        templateUrl: 'templates/my-scenarios.html'
        //controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.main.current-scenario', {
    url: '/current-scenario',
    views: {
      'menuContent': {
        templateUrl: 'templates/current-scenario.html'
        //controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.main.history', {
    url: '/history',
    views: {
      'menuContent': {
        templateUrl: 'templates/history.html'
        //controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
        //controller: 'PlaylistCtrl'
      }
    }
  });




  // .state('app', {
    //   url: '/app',
    //   abstract: true,
    //   templateUrl: 'templates/menu.html',
    //   controller: 'AppCtrl'
    // })

    // .state('app.search', {
    //   url: '/search',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/search.html'
    //     }
    //   }
    // })
    //
    // .state('app.browse', {
    //   url: '/browse',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/browse.html'
    //     }
    //   }
    // })
    //
    // .state('app.single', {
    //   url: '/playlists/:playlistId',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/playlist.html',
    //       controller: 'PlaylistCtrl'
    //     }
    //   }
    // });




        // .state('app.main.my-quests', {
        //   url: '/playlists/:playlistId',
        //   views: {
        //     'menuContent': {
        //       templateUrl: 'templates/playlist.html',
        //       controller: 'PlaylistCtrl'
        //     }
        //   }

          //   .state('app', {
  //   url: '/app',
  //   templateUrl: 'templates/menu.html',
  //   controller: 'AppCtrl'
  // })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
