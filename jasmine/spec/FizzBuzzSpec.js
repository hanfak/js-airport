describe("FizzBuzz", function() {
  var array = [];
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
    for (i=1; i < 101; i++) {
      array.push(i);
    }
  });

  it('returns an array of 100 elements', function() {
    expect(fizzbuzz.play().length).toEqual(100);
  });

  it('prints Fizz for any number divisible by 3', function(){
    expect(fizzbuzz.play()[2]).toEqual('Fizz');

  });








});
