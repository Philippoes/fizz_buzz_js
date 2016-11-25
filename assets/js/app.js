var onReadyEvents = function(){
  var player1 = new player();
  var player2 = new player();

  $("#checkNumber").click(function() {
     var input = parseInt($("#fizzBuzzInput").val());
     fizzbuzz = new fizzBuzzer();
     var output = fizzbuzz.checkNumber(input);
     $("#fizzBuzzOutput").html(output);
  });

  $("#player1roll").click(function() {
    var rollresult1 = player1.roll();
    $("#player1result").html("Player 1" + rollresult1);
  });

  $("#player2roll").click(function() {
    var rollresult2 = player2.roll();
    $("#player2result").html("Player 2" + rollresult2);
  });
};
