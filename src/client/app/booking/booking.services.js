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
      };
      var airports;

      airportServObj.getData = function (remoteData) {
        return remoteData.data;
      }

      airportServObj.cacheAirports = function (remoteData) {
        airports = airportServObj.getData(remoteData);
        return airports;
      }

      airportServObj.getAirports = function () {
        return $http.get(URLS.FETCH).then(airportServObj.cacheAirports);
      }


      return airportServObj;


    })
    .factory('bookingSrv', function () {

    });
})();
