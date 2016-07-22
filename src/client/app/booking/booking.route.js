/**
 * Created by naivys on 7/13/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.booking')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'booking',
        config: {
          url: '/booking',
          templateUrl: 'app/booking/booking.html',
          controller: 'BookingController',
          controllerAs: 'bookingCtrl',
          title: 'Booking',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Booking'
          }
        }
      }
    ];
  }
})();
