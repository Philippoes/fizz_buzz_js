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
};
