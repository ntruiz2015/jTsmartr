(function() {
  'use strict';

  angular
    .module('app.header')
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
          templateUrl: 'app/header/header.html',
          controller: 'HeaderController',
          controllerAs: 'hder',
          title: 'HeaderCtrl',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Confirm'
          }
        }
      }
    ];
  }
})();
