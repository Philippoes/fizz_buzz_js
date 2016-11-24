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
};
