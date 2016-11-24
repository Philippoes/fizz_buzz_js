describe('fizzBuzzer', function() {
  var subject;

  beforeEach(function() {
    subject = new fizzBuzzer();
  });

  it('Should return fizz if number is divisible by 3', function() {
    expect(subject.checkNumber(3)).toEqual('fizz');
  });

  it('Returns buzz if number is divisible by 5', function() {
    expect(subject.checkNumber(5)).toEqual('buzz');
  });

  it('Returns fizz buzz if number is divisible by 15', function(){
    expect(subject.checkNumber(15)).toEqual('fizz buzz');
  });
});
