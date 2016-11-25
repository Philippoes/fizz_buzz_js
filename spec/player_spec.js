describe("player", function(){
  beforeEach(function() {
    subject = new player();
  });

  describe("A player should have", function(){
    it("No points at start", function(){
      expect(subject.points).toEqual(0);
    });
  });
});
