describe('UI - Index', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  afterEach(function() {
    $('$fizzBuzzInput').val(NaN);
    // If you need to reset some values after each testing
    // you can do it here.
  });

  describe('It should be able to take an input', function() {
    it('of number 3', function(){
      $('#fizzBuzzInput').val(3);
      expect($('#fizzBuzzInput').val()).toEqual ('3');
    });
  });
});
