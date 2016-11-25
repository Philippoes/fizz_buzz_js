function fizzBuzzer() {}

fizzBuzzer.prototype.checkNumber = function(number) {
  if (number % 15 === 0){
    return 'fizz buzz';
  }
  else if (number % 3 === 0){
    return 'fizz';
  }
  else if (number % 5 === 0){
    return 'buzz';
  }
  else{
  return number;
}
};

fizzBuzzer.prototype.roll = function(player) {
  var points = player.points;
  var roll = Math.floor((Math.random() * 100) + 1);
  if (roll % 15 === 0){
    player.points += roll + 15;
  }
  else if (roll % 3 === 0){
    player.points += roll + 3;
  }
  else if (roll % 5 === 0){
    player.points += roll + 5;
  }
  else{
    player.points += roll;
}
setRollMessage(player, roll);
};

function setRollMessage (player, roll) {
  if (roll % 15 === 0){
    player.rollMessage = "You rolled " + roll + " and you get 15 extra points because it's FIZZ BUZZ!";
  }
  else if (roll % 3 === 0){
    player.rollMessage = "You rolled " + roll + " and you get 3 extra points because it's fizz!";
  }
  else if (roll % 5 === 0){
    player.rollMessage = "You rolled " + roll + " and you get 5 extra points because it's buzz!";
  }
  else{
    player.rollMessage = "You rolled " + roll;
  }
}
