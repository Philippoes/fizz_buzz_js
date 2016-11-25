describe("UI - Index", function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = "base/spec/fixtures/";
    loadFixtures("sample_partial.html");
    $.holdReady(false);
  });

  afterEach(function() {
    $("#fizzBuzzInput").val(NaN);
  });

  describe("It should be able to take an input", function() {
    it("of number 3", function(){
      $("#fizzBuzzInput").val(3);
      expect($("#fizzBuzzInput").val()).toEqual ("3");
    });
  });

  describe("It should give you an output message", function(){
    it("returns fizz", function(){
      $("#fizzBuzzInput").val(3);
      $("#checkNumber").click();
      expect($("#fizzBuzzOutput").text()).toEqual ("fizz");
    });
  });

  describe("You should be able to press player1 button", function(){
    it (" and give you your roll result", function(){
      $("#player1roll").click();
      expect($("#player1result").text()).toEqual (jasmine.any(String));
    });
  });
});
//MAKE ERROR MESSAGES IN BRANCHES TO TRY IT BRO
