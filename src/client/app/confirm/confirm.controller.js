/**
 * Created by naivys on 8/31/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.confirm')
    .controller('ConfirmController', ConfirmController);


  BookingController.$inject = ['logger', '$scope'];
  /* @ngInject */

  function BookingController(logger, $scope) {
    var confirmCtrl = this;
    confirmCtrl.title = 'confirmCtrl';

    activate();

    function activate() {
      logger.info('Activated Confirm View');
    }


  }



})();
