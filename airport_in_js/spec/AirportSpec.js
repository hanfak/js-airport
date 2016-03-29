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

  it("is initialised with a default capacity ", function(){
    expect(airport.capacity).toEqual(20);
  });

  describe("#allowLanding",function(){
    it("calls the plane to land", function(){
      airport.allowLanding(plane);
      expect(airport.planes.length).toEqual(1);
    });

    it("Cannot land if airport is full", function(){
      for(i=1; i<=20; i++) {
        airport.allowLanding(plane);
      }
      console.log(airport.planes.length);
      expect(function() {airport.allowLanding(plane);}).toThrowError("Cannot land airport full")
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
