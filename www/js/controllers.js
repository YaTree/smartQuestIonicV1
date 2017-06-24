angular.module('smart.quest.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {
  console.log('Main application controller');

  var currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
  console.log('AppCtrl: running');

  if (currentUser != null) {
    $state.go('app.main.news',  {}, { reload: true });
  }
});

