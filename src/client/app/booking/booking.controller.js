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
    bookingCtrl.passengersAllowed;

    activate();

    function activate() {
      logger.info('Activated Booking View');
    }

    function passengersAllowed(){
      bookingCtrl.passengersAllowed = bookingCtrl.adultsNumber + bookingCtrl.childrenNumber;
      return passengers;
    }

    airportsSrv.getAirports()
      .then(function (result) {
        bookingCtrl.airports = result.data;
        bookingCtrl.airportsRepopulated = bookingCtrl.airports.slice(0);
        console.log(bookingCtrl.airportsRepopulated);
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
      if (bookingCtrl.psgrName && bookingCtrl.psgrDOB && bookingCtrl.psgrWeight && bookingCtrl.psgrSeats
          && bookingCtrl.passengers.length < passengersAllowed){
          bookingCtrl.passengers.push(passng);
          console.log(bookingCtrl.passengers);
          bookingCtrl.psgrName = null;
          bookingCtrl.psgrDOB = null;
          bookingCtrl.psgrWeight = null;
          bookingCtrl.psgrSeats = null;
          bookingCtrl.submitted = true;
      }
    }


  }

})();
