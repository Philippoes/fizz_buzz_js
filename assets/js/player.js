function player() {
  this.points = 0;
}

player.prototype.roll = function() {
  var points = this.points;
  var roll = Math.floor((Math.random() * 100) + 1);
  if (roll % 15 === 0){
    this.points = roll + 15;
  }
  else if (roll % 3 === 0){
    this.points = roll + 3;
  }
  else if (roll % 5 === 0){
    this.points = roll + 5;
  }
  else{
    this.points = roll;
}
if (roll % 15 === 0){
  this.rollMessage = " rolled " + roll + " and you get 15 extra points because it's FIZZ BUZZ!";
}
else if (roll % 3 === 0){
  this.rollMessage = " rolled " + roll + " and you get 3 extra points because it's fizz!";
}
else if (roll % 5 === 0){
  this.rollMessage = " rolled " + roll + " and you get 5 extra points because it's buzz!";
}
else{
  this.rollMessage = " rolled " + roll;
}
return this.rollMessage;
};
