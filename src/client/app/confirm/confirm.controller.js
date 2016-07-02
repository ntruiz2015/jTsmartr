(function() {
  'use strict';

  angular
    .module('app.confirm')
    .controller('ConfirmController', ConfirmController);

  ConfirmController.$inject = ['logger'];
  /* @ngInject */
  function ConfirmController(logger) {
    var vm = this;
    vm.title = 'Confirm';

    activate();

    function activate() {
      logger.info('Activated Confirm View');
    }
  }
})();
