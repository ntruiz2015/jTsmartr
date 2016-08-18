(function () {
  'use strict';

  angular
    .module('app.header')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['logger', '$scope', '$filter'];
  /* @ngInject */

  function HeaderController(logger, $scope, $filter) {
    var hder = this;
    hder.title = 'HeaderCtrl';


    activate();

    function activate() {
      logger.info('Activated Confirm View');
    }
}






})();
