describe("FizzBuzz", function() {
  var array = [];
  var fizzbuzz;

  beforeEach(function(){
    for (i=1; i < 101; i++) {
      array.push(i);
    }


  });

  it('prints numbers 1-100', function() {
    fizzbuzz = new FizzBuzz();
    expect(fizzbuzz.play()).toEqual(array);   
  });








});
