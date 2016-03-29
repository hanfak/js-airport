function FizzBuzz() {
  var numbers = [];

  FizzBuzz.prototype.play = function() {
    for (i=1; i < 101; i++) {
      numbers.push(i);
    }
   return numbers;

  };

};
