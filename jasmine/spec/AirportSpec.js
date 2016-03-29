describe("Airport", function(){
  var plane;
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('has a way to store planes', function() {
    expect(airport.planes.length).toEqual(0);
  });

  it('has a way to land planes', function() {
    expect(airport.land).not.toBeUndefined();
  });

  it('has a way to take off planes', function() {
    expect(airport.takeOff).not.toBeUndefined();
  });

  it('checks for storms', function(){
    expect(airport.isStormy()).toEqual(false);
  });

});
