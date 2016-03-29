describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should return 1 when number = 1", function() {
    expect(fizzbuzz.check(1)).toEqual(1);
  });

  it("should return fizz when number = 3", function() {
    expect(fizzbuzz.check(3)).toEqual("Fizz");
  });

  it("should return buzz when number = 5", function() {
    expect(fizzbuzz.check(5)).toEqual("Buzz");
  });

  it("should return fizzbuzz when number = 15", function() {
    expect(fizzbuzz.check(15)).toEqual("FizzBuzz");
  });

});
