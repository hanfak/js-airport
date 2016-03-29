describe("Airport", function(){
  var plane;
  var airport = new Airport();

  it('has a way to store planes', function() {
    expect(airport.planes.length).toEqual(0);
  });

  describe("Landing planes", function(){
    it('stores a plane', function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });
});
