/**
 * Created by naivys on 9/14/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.booking')
    .factory('airportsSrv', function ($http) {
      //var airports = this;
      //var URLS = {
      //  FETCH: 'data/airports.json'
      //};
      //
      //airports.getAirports = function () {
      //  return $http.get(URLS.FETCH);
      //};
      //
      //return airports;

      var airportServObj = {};
      var URLS = {
        FETCH: 'data/airports.json'
      }
      airportServObj.getAirports = function () {
        return $http.get(URLS.FETCH);
      }

      return airportServObj;


    })
})();
