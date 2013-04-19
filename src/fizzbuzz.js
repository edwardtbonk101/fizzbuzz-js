var fizzBuzz = function(i) {
  var outcome = '';

  var testFizzBuzz = function(i) {
    if(i % 3 === 0 && i % 5 === 0) {
      return outcome = 'FizzBuzz';
    }
  };
  
  var testFizz = function(i) {
    if(i % 3 === 0) {
      return outcome = 'Fizz';
    }
  };
  
  var testBuzz = function(i) {
    if(i % 5 === 0) {
      return outcome = 'Buzz';
    }
  };
  
  if (testFizzBuzz(i)) {
  } else if(testFizz(i)) {
  } else if(testBuzz(i)) {
  } else {
    outcome = i;
  }
  return outcome;
};