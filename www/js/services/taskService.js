/**
 * Created by yatree on 01/07/17.
 */
/**
 * Created by yatree on 24/06/17.
 */

angular.module('smart.quest')
  .factory("taskService", [function () {

    function getTaskByOrder(taskList, order) {
      console.log('taskslengt', taskList.length);
      for (var i=0; i<taskList.length; i++) {
        console.log (taskList[i].task_order , order);
        if (taskList[i].task_order == order) {
          return taskList[i];
        }
      }
    }

    function getTaskType(task) {
      //TODO We need to dicede, how we will handle task's types. Do we need int -> to some sting value, or no.
      return task.task_type;
    }

    function saveTasks(scenarioId, tasksList) {
      window.localStorage.setItem('tasks' + scenarioId,JSON.stringify(tasksList));
    }

    return {
      getTaskByOrder: getTaskByOrder,
      getTaskType: getTaskType,
      saveTasks: saveTasks
    }
  }]);
