/**
 * Created by naivys on 7/13/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.booking')
    .controller('BookingController', BookingController);


  BookingController.$inject = ['logger', 'airportsSrv', 'passengerSrv', 'flightSrv', 'bookingSrv', '$http'];
  /* @ngInject */

  function BookingController(logger, airportsSrv, passengerSrv, flightSrv, bookingSrv, $http) {
    var bookingCtrl = this;
    bookingCtrl.passengers = passengerSrv.passengersList;
    bookingCtrl.airports = [];
    bookingCtrl.airportsRepopulated = [];
    bookingCtrl.allowed = 0;
    bookingCtrl.passengersAllowed = passengersAllowed;
    bookingCtrl.saveFlight = saveFlight;
    bookingCtrl.openArrival = false;
    bookingCtrl.openDepart = false;
    bookingCtrl.openArriv = openArriv;
    bookingCtrl.openDep = openDep;
    bookingCtrl.openDob = openDob;
    bookingCtrl.showButtonBar = false;
    bookingCtrl.openDateOfB = false;
    bookingCtrl.getId = getId;
    bookingCtrl.updatePassenger = updatePassenger;
    bookingCtrl.PssgCopy;

    function getId(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
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

    function openArriv($event) {
      bookingCtrl.openArrival = true;
    }


    function openDep($event) {
      bookingCtrl.openDepart = true;
    }

    function openDob($event) {
      bookingCtrl.openDateOfB = true;
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
      var id = bookingCtrl.getId(1, 200);
      if (bookingCtrl.psgrName && bookingCtrl.psgrDOB && bookingCtrl.psgrWeight && bookingCtrl.psgrSeats) {
        var passng = new passengerSrv.passengerObj(id, bookingCtrl.psgrName, bookingCtrl.psgrDOB, bookingCtrl.psgrWeight,
          bookingCtrl.psgrSeats);
        passengerSrv.addPassenger(passng);
        bookingCtrl.psgrName = null;
        bookingCtrl.psgrDOB = null;
        bookingCtrl.psgrWeight = null;
        bookingCtrl.psgrSeats = null;
        bookingCtrl.submitted = true;
      }
      bookingCtrl.pasengersForm.$setPristine();
    };

    function saveFlight() {
      bookingCtrl.flight = new flightSrv.flightObj(bookingCtrl.departAirportSelected, bookingCtrl.arrivalAirportSelected,
        bookingCtrl.departDate, bookingCtrl.arrivDate, bookingCtrl.allowed);
    }

    function updatePassenger(passenger) {


    }


  }

})();
