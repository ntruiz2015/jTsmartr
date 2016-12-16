/**
 * Created by nai on 12/14/2016.
 */
/**
 * Created by naivys on 9/14/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.main')
    .service('shipsSrv', ['$http', function ($http) {
      this.getShips = function () {
        return $http.get('data/ships.json')
          .then(function (response) {
            return response.data;
          });
      };
    }]);
}());
