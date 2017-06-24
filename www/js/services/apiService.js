/**
 * Created by yatree on 24/06/17.
 */

angular.module('smart.quest')
  .factory("apiService", ['$http',function ($http) {

    var urlBase = 'https://smartquest.herokuapp.com/api/v1';
    var urlAuthBase = 'https://smartquest.herokuapp.com/users'

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


    return {
      getAuthToken: getAuthToken,
      createNewUser: createNewUser

    }
  }]);
