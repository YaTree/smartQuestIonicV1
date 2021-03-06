/**
 * Created by yatree on 24/06/17.
 */

angular.module('smart.quest')
  .factory("cacheService", [function () {

//https://smartquest.herokuapp.com/users/authenticate
    function saveUser(loginedUser) {
      window.localStorage.setItem('currentUser', JSON.stringify(loginedUser));
    }

    function saveTasks(scenarioId, tasksList) {
      window.localStorage.setItem('tasks' + scenarioId,JSON.stringify(tasksList));
    }

    return {
      saveUser: saveUser,
      saveTasks:saveTasks
    }
  }]);
