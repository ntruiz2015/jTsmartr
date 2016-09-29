/**
 * Created by naivys on 7/13/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.booking')
    .controller('BookingController', BookingController);


  BookingController.$inject = ['logger', 'airportsSrv'];
  /* @ngInject */

  function BookingController(logger, airportsSrv) {
    var bookingCtrl = this;
    bookingCtrl.passengers = [];
    bookingCtrl.airports = [];
    bookingCtrl.airportsRepopulated = [];
    bookingCtrl.allowed = 0;

    bookingCtrl.passengersAllowed = passengersAllowed;

    activate();

    function activate() {
      logger.info('Activated Booking View');
    }

    function passengersAllowed(){
      if(bookingCtrl.adultsNumber && bookingCtrl.childrenNumber){
        bookingCtrl.allowed = parseInt(bookingCtrl.adultsNumber) + parseInt(bookingCtrl.childrenNumber);
        //return bookingCtrl.allowed;
        console.log(bookingCtrl.allowed);
      }

    }

    airportsSrv.getAirports()
      .then(function (remoteData) {
        bookingCtrl.airports = remoteData;
        bookingCtrl.airportsRepopulated = remoteData;
      })

    bookingCtrl.repopulate = function (selected) {
      bookingCtrl.airportsRepopulated = [];
      for (var i = 0; i < bookingCtrl.airports.length; i++) {
        if (bookingCtrl.airports[i].name !== selected.name) {
          bookingCtrl.airportsRepopulated.push(bookingCtrl.airports[i]);
        }
      }
    }
    bookingCtrl.SavePassenger = function (name, dob, weight, seats) {
      var passng = {
        name: name,
        weight: weight,
        dob: dob,
        seats: seats
      };
      if (bookingCtrl.psgrName && bookingCtrl.psgrDOB && bookingCtrl.psgrWeight && bookingCtrl.psgrSeats){
          bookingCtrl.passengers.push(passng);
          bookingCtrl.psgrName = null;
          bookingCtrl.psgrDOB = null;
          bookingCtrl.psgrWeight = null;
          bookingCtrl.psgrSeats = null;
          bookingCtrl.submitted = true;
      }
    }


  }

})();
