describe("Airport", function(){
  var plane;
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it('has a way to store planes', function() {
    expect(airport.planes.length).toEqual(0);
  });

  it('has a way to land planes', function() {
    expect(airport.land).not.toBeUndefined();
  });

});
