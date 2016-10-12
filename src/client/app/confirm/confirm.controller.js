/**
 * Created by naivys on 8/31/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.confirm')
    .controller('ConfirmController', ConfirmController);


  ConfirmController.$inject = ['logger', 'passengerSrv'];
  /* @ngInject */

  function ConfirmController(logger, passengerSrv) {
    var confirmCtrl = this;
    confirmCtrl.title = 'confirmCtrl';

    confirmCtrl.passengers = passengerSrv.passengersList;

    activate();

    function activate() {
      logger.info('Activated Confirm View');
    }





  }



})();
