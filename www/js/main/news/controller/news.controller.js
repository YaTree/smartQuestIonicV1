/**
 * Created by yatree on 10/06/17.
 */
'use strict';

angular
  .module('news.module')
  .controller('NewsCtrl', NewsCtrl);

NewsCtrl.$inject = ['$scope', 'apiService', '$ionicLoading', '$state', '$ionicHistory'];

function NewsCtrl($scope, apiService, $ionicLoading, $state, $ionicHistory) {
  $scope.swiper = {}; //initialize

  $ionicLoading.show({template: '<ion-spinner icon="ios"></ion-spinner><p>Login...</p>'});
  $scope.options = {
    loop: true,
    // effect: 'fade',
    // show-nav-buttons="false",
    pagination: false,
    paginationHide: true,
    parallax: true,
    effect: 'coverflow',
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
      centeredSlides: true
    },
    speed: 300,
    spaceBetween: 100,
    initialSlide: 1,
    onInit: function (swiper) {
      swiper.initObservers();
      $scope.swiper = swiper;
    },
    onSlideChangeEnd: function (swiper) {
      console.log('The active index is ' + swiper.activeIndex);
      swiper.params.onlyExternal = false;
    },
    onSlideChangeStart: function (swiper) {
      swiper.params.onlyExternal = true;
    },

    onSlideNextEnd: function (swiper) {
    },
    onSlidePrevEnd: function (swiper) {
    },
    onTransitionEnd: function (swiper) {
      console.log('End -->', $scope.swiper.activeIndex, ($scope.questList).length);
      console.log($scope.questList);
      $scope.current_scenario_id = $scope.questList[geSlideDataIndex(swiper)].scenario_id;
      console.log('Sce_id', $scope.current_scenario_id);

    },
    onTouchEnd: function (swiper) {
    }


  };

  function geSlideDataIndex(swipe) {
    var activeIndex = swipe.activeIndex;
    var slidesLen = swipe.slides.length;
    if (swipe.params.loop) {
      switch (swipe.activeIndex) {
        case 0:
          activeIndex = slidesLen - 3;
          break;
        case slidesLen - 1:
          activeIndex = 0;
          break;
        default:
          --activeIndex;
      }
    }
    return activeIndex;
  }


  function dataChangeHandler() {
    // call this function when data changes, such as an HTTP request, etc
    if ($scope.slider) {
      console.log('slider is fine')
      $scope.slider.updateLoop();
    }
  }

  function getQuestsForSlider(cityName) {
    apiService.getScenariosByCityName(cityName)
      .then(function (response) {
        if (response.data.status == 'failed') {
          $scope.errorAlert = response.data.message;
        } else {
          $scope.questList = response.data.data;

          setTimeout(function () //give the data a moment to propagate
          {
            $scope.current_scenario_id = $scope.questList[0].scenario_id;
            dataChangeHandler();
            $ionicLoading.hide();
          }, 300);

          console.log(($scope.questList).length);

        }
      });
  }



  getQuestsForSlider('Jerusalem');


  $scope.loadQuestForCity = function (cityName) {
    getQuestsForSlider(cityName);
  };

  $scope.startQuest = function (questId) {
    console.log(questId);
    $ionicHistory.clearCache().then(function(){
      $state.go('app.main.preview', {obj: {scenario_id: questId}});
    });

  };

  $scope.attaches = [{
    name: 'Jerusalem',
    label: 'Jerusalem',
    info: 'Jerusalem quest info'
  },
    {
      name: 'Haifa',
      label: 'Haifa',
      info: 'Haifa quest info'
    },
    {
      name: 'Aviva',
      label: 'Tel Aviv',
      info: 'Tel Aviv quest info'
    }
  ];
}
