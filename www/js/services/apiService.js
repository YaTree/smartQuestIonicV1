/**
 * Created by yatree on 24/06/17.
 */

angular.module('smart.quest')
  .factory("apiService", ['$http', function ($http) {

    var urlBase = 'https://smartquest.herokuapp.com/api/v1';
    var urlAuthBase = 'https://smartquest.herokuapp.com/users';


    function getToken() {
      var currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
      console.log('curUser-> ', currentUser);
      return currentUser.userToken;
    }

    //var currentUser = JSON.parse(window.localStorage.getItem('currentUser'));


    function getAuthToken(userLogin, userPassword) {
      return $http.post(urlAuthBase + '/authenticate', {
        email: userLogin,
        password: userPassword
      })
    }

    function createNewUser(userLogin, userPassword) {
      return $http.post(urlBase + '/users', {
        user_email: userLogin,
        user_password: userPassword
      })
    }

    function getScenariosByCityName(cityName) {
      //TODO Need to understand how to be with CORS ISSUE
      $http.defaults.headers.common['x-access-token'] = getToken();
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      console.log(config);

      return $http({
        method: 'GET',
        url: urlBase + '/scenarios/city/' + cityName
      })
    }

    function getStagesByScenarioId(scenarioId) {

      $http.defaults.headers.common['x-access-token'] = getToken();
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http({
        method: 'GET',
        url: urlBase + '/scenarios/'+ scenarioId + '/stages/'
      })
    }

    function getStagesByScenarioId(scenarioId) {

      $http.defaults.headers.common['x-access-token'] = getToken();
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http({
        method: 'GET',
        url: urlBase + '/scenarios/'+ scenarioId + '/stages/'
      })
    }

    function getTasksByStageId(stageId) {

      $http.defaults.headers.common['x-access-token'] = getToken();
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return $http({
        method: 'GET',
        url: urlBase + '/stages/'+ stageId + '/tasks/'
      })
    }


    return {
      getAuthToken: getAuthToken,
      createNewUser: createNewUser,
      getScenariosByCityName: getScenariosByCityName,
      getStagesByScenarioId:getStagesByScenarioId,
      getTasksByStageId:getTasksByStageId

    }
  }]);
