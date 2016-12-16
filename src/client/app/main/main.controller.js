/**
 * Created by nai on 12/14/2016.
 */

(function () {
  'use strict';

  /* jshint -W106*/
  angular
    .module('app.main')
    .controller('MainController', MainController);

  MainController.$inject = ['$filter', 'logger', 'shipsSrv'];
  /* @ngInject */

  function MainController($filter, logger, shipsSrv) {
    var mainCtrl = this;
    mainCtrl.title = 'mainCtrl';
    //mainCtrl.ships = shipsSrv.getShips();

    mainCtrl.matchCruiseSailing = matchCruiseSailing;
    mainCtrl.getLowestSailingPrice = getLowestSailingPrice;
    mainCtrl.selectedSailingsTotal = selectedSailingsTotal;
    mainCtrl.checkSailing = checkSailing;
    var contador = 0;
    shipsSrv.getShips().then(function (data) {
      mainCtrl.ships = data;

      mainCtrl.cruise_lines = mainCtrl.ships.cruise_lines;
      mainCtrl.sailings = mainCtrl.ships.sailings;

      mainCtrl.cruise_lines = mainCtrl.cruise_lines.map(function (cl) {
        cl.sailings = matchCruiseSailing(cl.cruise_line_id);
        return cl;
      });
    });

    //function to find the cruise sailing for a given cruise line.
    function matchCruiseSailing(cruiseLineId) {
      var matchedCruiseSailing = $filter('filter')(mainCtrl.sailings, function (sailing) {
        return sailing.sailing_cruise_line_id === cruiseLineId;
      }, true);
      //
      return matchedCruiseSailing;
    }

    function getLowestSailingPrice(sailing) {
      var lowestSailingPrice = sailing.sailing_options[0];
      for (var i = 1; i < sailing.sailing_options.length; i++) {
        if (sailing.sailing_options[i].sailing_price < lowestSailingPrice.sailing_price) {
          lowestSailingPrice = sailing.sailing_options[i];
        }
      }
      return lowestSailingPrice;
    }

    function selectedSailingsTotal() {
      var selectedSailingsTotal = 0;
      if (mainCtrl.sailings) {
        for (var i = 0; i < mainCtrl.sailings.length; i++) {
          for (var j = 0; j < mainCtrl.sailings[i].sailing_options.length; j++) {
            if (mainCtrl.sailings[i].sailing_options[j].checked) {
              selectedSailingsTotal += mainCtrl.sailings[i].sailing_options[j].sailing_price;
            }
          }
        }
      }
      return selectedSailingsTotal;
    }

    function checkSailing(sailing_options, option) {
      for (var i = 0; i < sailing_options.length; i++) {
        sailing_options[i].checked = false;
      }
      option.checked = true;
    }
  }
})();
