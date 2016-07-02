(function() {
  'use strict';

  angular
    .module('app.confirm')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'confirm',
        config: {
          url: '/',
          templateUrl: 'app/confirm/confirm.html',
          controller: 'ConfirmController',
          controllerAs: 'vm',
          title: 'Confirm',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Confirm'
          }
        }
      }
    ];
  }
})();
