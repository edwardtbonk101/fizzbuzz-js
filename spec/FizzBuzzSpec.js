/* global testFizzBuzz: true */
/* global testFizz: true */
/* global testBuzz: true */
/* global fizzBuzz: true */
describe('fizzbuzz',function(){
  it('should test if 15 is divisible by 3 and 5',function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
  it('should test if 14 is divisible by 3 and 5',function() {
    expect(fizzBuzz(14)).toEqual(14);
  });
  it('should test if 6 is divisible by 3',function() {
    expect(fizzBuzz(6)).toEqual('Fizz');
  });
  it('should test if 10 is divisible by 5',function() {
    expect(fizzBuzz(10)).toEqual('Buzz');
  });
});