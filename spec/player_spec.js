describe("player", function(){
  beforeEach(function() {
    subject = new player();
  });

  describe("A player should have", function(){
    it("No points at start", function(){
      expect(subject.points).toEqual(0);
    });

    it("be able to roll", function(){
      subject.roll();
      expect(player.points).not.toEqual(0);
    });

    it("Displays a roll message", function(){
      subject.roll();
      expect(player.rollMessage).not.toEqual(NaN);
    });
  });
});
