(function () {
  'use strict';

  angular
    .module('app.core')
    .run(appRun)


  /* @ngInject */
  function appRun(routerHelper) {
    var otherwise = '/';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [
      {
        state: 'booking',
        title: 'Booking',
        config: {
          url: '/',
          views: {
            'mainMenu@':{
              templateUrl: 'app/header.html'
            },
            'booking': {
              templateUrl: 'app/booking/booking.html'
            }
          }

        }
      }

    ];
  }
})();

