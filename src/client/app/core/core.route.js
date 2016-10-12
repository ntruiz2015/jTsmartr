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
            'mainMenu':{
              templateUrl: 'app/header.html'
            },
            'main': {
              templateUrl: 'app/booking/booking.html',
              controller: 'BookingController as bookingCtrl'

            }
          }

        }
      },
      {
        state: 'confirm',
        title: 'confirm',
        config: {
          url: '/confirm',
          views: {
            'mainMenu':{
              templateUrl: 'app/header.html'
            },
            'main': {
              templateUrl: 'app/confirm/confirm.html',
              controller: 'ConfirmController as confirmCtrl'
            }
          }
        }
      }

    ];
  }
})();

