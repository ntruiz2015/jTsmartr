/* jshint -W117, -W030 */
describe('confirm routes', function() {
  describe('state', function() {
    var view = 'app/admin/confirm.html';

    beforeEach(function() {
      module('app.confirm', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /confirm ', function() {
      expect($state.href('confirm', {})).to.equal('/confirm');
    });

    it('should map /confirm route to confirm View template', function() {
      expect($state.get('confirm').templateUrl).to.equal(view);
    });

    it('of confirm should work with $state.go', function() {
      $state.go('confirm');
      $rootScope.$apply();
      expect($state.is('confirm'));
    });
  });
});
