/* jshint -W117, -W030 */
describe('headerController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.header');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('HeaderController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('header controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Admin', function() {
        expect(controller.title).to.equal('header');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
