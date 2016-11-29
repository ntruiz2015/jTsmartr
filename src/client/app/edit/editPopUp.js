/**
 * Created by nai on 10/11/2016.
 */

(function () {
  'use strict'
  angular
    .module('editPopUp')
    .component('editPopUp', {
      controller: 'EditPopUpCtrl',
      controllerAs: 'editPopUpCtrl',
      bindings: {
        passenger: '<',
        passengerCopy: '<',
        passengerIndex: '<'
      },
      transclude: true,
      template: '<div ng-transclude ng-click="editPopUpCtrl.showPassengerEditPopup();editPopUpCtrl.copyPassenger()"></div>'
    })
    .controller('EditPopUpCtrl', EditPopUpCtrl);

  EditPopUpCtrl.$inject = ['$scope', '$uibModal', 'passengerSrv'];

  function EditPopUpCtrl($scope, $modalInstance, passengerSrv) {
    var editPopUpCtrl = this;

    editPopUpCtrl.passenger;
    editPopUpCtrl.passengerCopy;
    editPopUpCtrl.copyPassenger = copyPassenger;
    editPopUpCtrl.editPassenger = editPassenger;
    editPopUpCtrl.updatePassenger = updatePassenger;
    editPopUpCtrl.showPassengerEditPopup = showPassengerEditPopup;
    editPopUpCtrl.closePopUp = closePopUp;


    function copyPassenger() {
      editPopUpCtrl.passenger = angular.copy(editPopUpCtrl.passengerCopy);
    }

    function editPassenger(extPassenger) {
      editPopUpCtrl.passenger.name = extPassenger.name;
      editPopUpCtrl.passenger.dob = extPassenger.dob;
      editPopUpCtrl.passenger.weight = extPassenger.weight;
      editPopUpCtrl.passenger.seat = extPassenger.seat;

    }

    function updatePassenger() {
      passengerSrv.updatePassenger(editPopUpCtrl.passenger);
    }

    function showPassengerEditPopup() {
      editPopUpCtrl.modalInstance = $modalInstance.open({
        templateUrl: 'app/edit/editPopUp.html',
        size: 'lg',
        scope: $scope,
        backdrop: 'static',
        keyboard: false
      });

    }

    function closePopUp() {
      editPopUpCtrl.modalInstance.close();
    }
  }

}());
