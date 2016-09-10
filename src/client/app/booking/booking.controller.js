/**
 * Created by naivys on 7/13/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.booking')
    .controller('BookingController', BookingController);


  BookingController.$inject = ['logger'];
  /* @ngInject */

  function BookingController(logger,$scope) {
    var bookingCtrl = this;
    bookingCtrl.passengers = [];
    bookingCtrl.eventSources = [];

    bookingCtrl.airports = [
      {
        "iata": "UTK",
        "lon": "169.86667",
        "city": "MH",
        "status": 1,
        "name": "Utirik Airport",
        "state": "OC",
        "type": "airport",
        "lat": "11.233333",
        "size": "small"
      },
      {
        "iata": "FIV",
        "city": "US",
        "status": 1,
        "name": "Five Finger CG Heliport",
        "state": "NA",
        "type": "heliport",
        "size": null
      },
      {
        "iata": "FAK",
        "city": "US",
        "status": 1,
        "name": "False Island Seaplane Base",
        "state": "NA",
        "type": "seaplanes",
        "size": null
      },
      {
        "iata": "BWS",
        "city": "US",
        "status": 0,
        "name": "Blaine Municipal Airport",
        "state": "NA",
        "type": "closed",
        "size": null
      },
      {
        "iata": "WKK",
        "lon": "-158.61111",
        "city": "US",
        "status": 1,
        "name": "Aleknagik  New Airport",
        "state": "NA",
        "type": "airport",
        "lat": "59.27778",
        "size": "medium"
      },
      {
        "iata": "TSS",
        "city": "US",
        "status": 1,
        "name": "East 34th Street Heliport",
        "state": "NA",
        "type": "heliport",
        "size": null
      },
      {
        "iata": "FOB",
        "lon": "-123.79444",
        "city": "US",
        "status": 1,
        "name": "Fort Bragg Airport",
        "state": "NA",
        "type": "airport",
        "lat": "39.474445",
        "size": "small"
      },
      {
        "iata": "ABP",
        "lon": "141.1",
        "city": "PG",
        "status": 1,
        "name": "Atkamba Airport",
        "state": "OC",
        "type": "airport",
        "lat": "-6.066667",
        "size": "small"
      },
      {
        "iata": "ALV",
        "city": "AD",
        "status": 1,
        "name": "Andorra la Vella Heliport",
        "state": "EU",
        "type": "heliport",
        "size": null
      },
      {
        "iata": "ADC",
        "lon": "145.73334",
        "city": "PG",
        "status": 1,
        "name": "Andakombe Airport",
        "state": "OC",
        "type": "airport",
        "lat": "-7.133333",
        "size": "small"
      },
      {
        "iata": "TJP",
        "lon": "-66.563545",
        "city": "PR",
        "status": 1,
        "name": "Areopuerto Internacional Michael Gonzalez",
        "state": "NA",
        "type": "airport",
        "lat": "18.010702",
        "size": "large"
      },
      {
        "iata": "AEE",
        "city": "SS",
        "status": 1,
        "name": "Adareil Airport",
        "state": "AF",
        "type": "airport",
        "size": "small"
      },
      {
        "iata": "AEI",
        "city": "ES",
        "status": 1,
        "name": "Algeciras Heliport",
        "state": "EU",
        "type": "heliport",
        "size": null
      },
      {
        "iata": "AEK",
        "lon": "146.28334",
        "city": "PG",
        "status": 1,
        "name": "Aseki Airport",
        "state": "OC",
        "type": "airport",
        "lat": "-7.366667",
        "size": "small"
      },
      {
        "iata": "OLR",
        "lon": "36.130333",
        "city": "AF",
        "status": 1,
        "name": "Salerno Landing Zone Airport",
        "state": "AS",
        "type": "airport",
        "lat": "34.023167",
        "size": "small"
      },
      {
        "iata": "AFR",
        "lon": "148.38333",
        "city": "PG",
        "status": 1,
        "name": "Afore Airstrip",
        "state": "OC",
        "type": "airport",
        "lat": "-9.133333",
        "size": "small"
      },
      {
        "iata": "AFT",
        "lon": "160.85",
        "city": "SB",
        "status": 1,
        "name": "Afutara Aerodrome",
        "state": "OC",
        "type": "airport",
        "lat": "-9.2",
        "size": "small"
      },
      {
        "iata": "ATD",
        "lon": "161.03334",
        "city": "SB",
        "status": 1,
        "name": "Uru Harbour Airport",
        "state": "OC",
        "type": "airport",
        "lat": "-8.866667",
        "size": "small"
      },
      {
        "iata": "VEV",
        "lon": "159.55",
        "city": "SB",
        "status": 1,
        "name": "Barakoma Airport",
        "state": "OC",
        "type": "airport",
        "lat": "-7.85",
        "size": "small"
      },
      {
        "iata": "GEF",
        "lon": "156.59778",
        "city": "SB",
        "status": 1,
        "name": "Geva Airport",
        "state": "OC",
        "type": "airport",
        "lat": "-7.578333",
        "size": "small"
      },
      {
        "iata": "AGG",
        "lon": "144.07388",
        "city": "PG",
        "status": 1,
        "name": "Angoram Airport",
        "state": "OC",
        "type": "airport",
        "lat": "-4.168611",
        "size": "small"
      }

    ];
    bookingCtrl.airportsRepopulated = bookingCtrl.airports.slice(0);
    activate();

    function activate() {
      logger.info('Activated Booking View');
    }

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

      if (bookingCtrl.psgrName && bookingCtrl.psgrDOB && bookingCtrl.psgrWeight && bookingCtrl.psgrSeats) {
        bookingCtrl.passengers.push(passng);
        console.log(bookingCtrl.passengers);
        bookingCtrl.psgrName = null;
        bookingCtrl.psgrDOB = null;
        bookingCtrl.psgrWeight = null;
        bookingCtrl.psgrSeats = null;
        bookingCtrl.submitted = true;
      }


    }

    bookingCtrl.minDate = function(){
       var date = new Date();
      return
        date.getDate() + 1;

    }

  }

})();
