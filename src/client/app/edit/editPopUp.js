/**
 * Created by nai on 10/11/2016.
 */

(function () {
  'use strict'
  angular
    .module('editPopUp')
    .component('editPopUp', {
      templateUrl: 'editPopUp.html',
      controller: 'EditPopUpCtrl',
      controllerAs: 'editPopUpCtrl',
      bindings: {
        name: '<',
        dateOfB: '<',
        weight: '<',
        seat: '<'
      }
    })
    .controller('EditPopUpCtrl', function EditPopUpCtrl() {
      var editPopUpCtrl = this;

      editPopUpCtrl.passenger = undefined;
      editPopUpCtrl.copyPassenger = copyPassenger;
      editPopUpCtrl.editPassenger = editPassenger;
      editPopUpCtrl.updatePassenger = updatePassenger;


      function copyPassenger(extPassenger) {
        editPopUpCtrl.passenger = angular.copy(extPassenger);
      }

      function editPassenger(extPassenger) {
        editPopUpCtrl.passenger.name = extPassenger.name;
        editPopUpCtrl.passenger.dateOfB = extPassenger.dateOfB;
        editPopUpCtrl.passenger.weight = extPassenger.weight;
        editPopUpCtrl.passenger.seat = extPassenger.seat;
      }

      function updatePassenger(extPassenger) {
        var passenger = editPopUpCtrl.copyPassenger(extPassenger);
        editPopUpCtrl.editPassenger(passenger);
        return passenger;
      }
    })
}());
