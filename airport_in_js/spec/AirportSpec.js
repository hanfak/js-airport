describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("has an empty planes array", function(){
    expect(airport.planes.length).toEqual(0);
  });

  describe("#allowLanding",function(){
    it("calls the plane to land", function(){
      airport.allowLanding(plane);
      expect(airport.planes.length).toEqual(1);
    });
  });

  describe("#allowTakeOff",function(){
    it("calls the plane to take off", function(){
      airport.allowLanding(plane);
      airport.allowTakeOff(plane);
      expect(airport.planes.length).toEqual(0);
    });
  });
});
