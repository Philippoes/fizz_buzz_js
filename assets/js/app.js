// denna för test ska gå
var onReadyEvents = function(){
  $("#checkNumber").click(function() {
     var input = parseInt($("#fizzBuzzInput").val());
     fizzbuzz = new fizzBuzzer();
     var output = fizzbuzz.checkNumber(input);
     $("#fizzBuzzOutput").html(output);
  });
};
// denna för att index ska gå
// $(document).ready(function () {
//   $("#checkNumber").click(function() {
//      var input = parseInt($("#fizzBuzzInput").val());
//      fizzbuzz = new fizzBuzzer();
//      var output = fizzbuzz.checkNumber(input);
//      $("#fizzBuzzOutput").html(output);
//   });
// });
