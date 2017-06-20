/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('news.module')
  .controller('NewsCtrl', NewsCtrl);

NewsCtrl.$inject = ['$scope'];

function NewsCtrl($scope) {

    $scope.cities = [{
            name:'jerusalem',
            label: 'Jerusalem',
            info: 'Jerusalem quest info'
        },
        {
            name:'hifa',
            label: 'Haifa',
            info: 'Haifa quest info'
        },
        {
            name:'tel_aviv',
            label: 'Tel Aviv',
            info: 'Tel Aviv quest info'
        },
    ];

    $scope.attaches = [{
            name:'jerusalem',
            label: 'Jerusalem',
            info: 'Jerusalem quest info'
        },
        {
            name:'hifa',
            label: 'Haifa',
            info: 'Haifa quest info'
        },
        {
            name:'tel_aviv',
            label: 'Tel Aviv',
            info: 'Tel Aviv quest info'
        },
    ];

    $scope.show = "This is from NewsCtrl";

}
