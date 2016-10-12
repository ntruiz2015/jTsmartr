/**
 * Created by naivys on 9/14/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.booking')
    .factory('airportsSrv', function ($http) {
      var airportsSrv = {};
      var URLS = {
        FETCH: 'data/airports.json'
      };
      var airports;

      airportsSrv.getData = function (remoteData) {
        return remoteData.data;
      }

      airportsSrv.cacheAirports = function (remoteData) {
        airports = airportsSrv.getData(remoteData);
        return airports;
      }

      airportsSrv.getAirports = function () {
        return (airports) ? $q.when(airports) : $http.get(URLS.FETCH).then(airportsSrv.cacheAirports);
      }
      return airportsSrv;

    })
    .factory('flightSrv', function () {
      var flightSrv = {};

      flightSrv.flightObj = function (airpFrom, airpTo, departDate, arrivDate, passgrsTotal) {
        this.airpFrom = airpFrom;
        this.airpTo = airpTo;
        this.departDate = new Date(departDate);
        this.arrivDate = new Date(arrivDate);
        this.passgrsTotal = passgrsTotal;
      };
      return flightSrv;
    })
    .factory('passengerSrv', function () {
      var passengerSrv = {};
      passengerSrv.passengersList = [];
      passengerSrv.passengerObj = function (id, name, dob, weight, seats){
        this.id = id;
        this.name = name;
        this.dob = new Date(dob);
        this.weight = weight;
        this.seats = seats;
      };

      passengerSrv.addPassenger = function(passenger){
        passengerSrv.passengersList.push(passenger);
      };



      return passengerSrv;
    })
    .factory('bookingSrv', function () {
      var bookingSrv = {};
      bookingSrv.bookingObj = function (passengers, flight) {
        this.passengers = passengers;
        this.flight = flight;
      };

      return bookingSrv;
    })


})();
