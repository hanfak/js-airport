function FizzBuzz() {
  var numbers = [];

  FizzBuzz.prototype.play = function() {
    for (i = 1; i < 101; i++) {
      if (i % 15 === 0) { numbers.push('FizzBuzz');}
      else if (i % 5 === 0) { numbers.push('Buzz');}
      else if (i % 3 === 0) { numbers.push('Fizz');}
      else { numbers.push(i);}
    }
   return numbers;

  };

};
