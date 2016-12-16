(function () {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    var otherwise = '/';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [
      {
        state: 'main',
        title: 'Main',
        config: {
          url: '/',
          views: {
            'main': {
              templateUrl: 'app/main/main.html',
              controller: 'MainController as mainCtrl'
            }
          }

        }
      }
    ];
  }
})();

