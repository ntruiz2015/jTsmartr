/**
 * Created by naivys on 7/13/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.booking')
    .controller('BookingController', BookingController);


  BookingController.$inject = ['logger', 'airportsSrv', 'passengerSrv', 'flightSrv', 'bookingSrv', 'moment', '$q', '$http'];
  /* @ngInject */

  function BookingController(logger, airportsSrv, passengerSrv, flightSrv, bookingSrv, moment, $q, $http) {
    var bookingCtrl = this;
    bookingCtrl.passengers = [];
    bookingCtrl.airports = [];
    bookingCtrl.airportsRepopulated = [];
    bookingCtrl.allowed = 0;
    bookingCtrl.passengersAllowed = passengersAllowed;
    bookingCtrl.saveFlight = saveFlight;
    bookingCtrl.opened = false;
    bookingCtrl.open = open;

    bookingCtrl.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    activate();

    function activate() {
      logger.info('Activated Booking View');
    }

    function open($event) {
      bookingCtrl.opened = true;
    }
    function passengersAllowed() {
      if (bookingCtrl.adultsNumber && bookingCtrl.childrenNumber) {
        bookingCtrl.allowed = parseInt(bookingCtrl.adultsNumber) + parseInt(bookingCtrl.childrenNumber);
      }

    }

    airportsSrv.getAirports()
      .then(function (remoteData) {
        bookingCtrl.airports = remoteData;
        bookingCtrl.airportsRepopulated = remoteData;
      });

    bookingCtrl.repopulate = function (selected) {
      bookingCtrl.airportsRepopulated = [];
      for (var i = 0; i < bookingCtrl.airports.length; i++) {
        if (bookingCtrl.airports[i].name !== selected.name) {
          bookingCtrl.airportsRepopulated.push(bookingCtrl.airports[i]);
        }
      }
    };

    bookingCtrl.SavePassenger = function () {
      var passng = new passengerSrv.passengerObj(bookingCtrl.psgrName, bookingCtrl.psgrDOB, bookingCtrl.psgrWeight, bookingCtrl.psgrSeats);
      if (name && dob && weight && seats) {
        bookingCtrl.passengers.push(passng);
        bookingCtrl.psgrName = null;
        bookingCtrl.psgrDOB = null;
        bookingCtrl.psgrWeight = null;
        bookingCtrl.psgrSeats = null;
        bookingCtrl.submitted = true;
      }
      console.log(bookingCtrl.psgrDOB);
      bookingCtrl.pasengersForm.$setPristine();
    };

    function saveFlight() {
      bookingCtrl.flight = new flightSrv.flightObj(bookingCtrl.departAirportSelected, bookingCtrl.arrivalAirportSelected,
        bookingCtrl.departDate, bookingCtrl.arrivDate, bookingCtrl.allowed);
    }




  }

})();
