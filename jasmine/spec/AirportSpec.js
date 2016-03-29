describe("Airport", function(){
  var plane;
  var airport = new Airport();

  afterEach(function(){
    airport = new Airport();
  });

  it('has a way to store planes', function() {
    expect(airport.planes.length).toEqual(0);
  });

  describe("Landing planes", function(){
    it('stores a plane', function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });

  describe("Take off a plane", function(){
    it('removes a plane from aiport', function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });
  });
});
