describe("Plane", function() {
  var plane;
  // var airport;

  beforeEach(function() {
    plane = new Plane();
    // airport = new Airport();
  });

  describe("#flying", function() {
    it("is flying", function() {
      expect(plane.flying).toBeTruthy();
    });
  });

  describe("#landing", function() {
    it("is not flying", function() {
      plane.land();
      expect(plane.flying).toBeFalsy();
    });
    it("throws an error if plane already landed", function() {
      plane.land();
      expect(function() {plane.land();}).toThrowError("You cannot land a landed plane")
    });
  });

  describe("#takeoff", function() {
    it("is flying after takeoff", function() {
      plane.land();
      plane.takeOff();
      expect(plane.flying).toBeTruthy();
    });
    it("throws an error if plane already flying", function() {
      expect(function() {plane.takeOff();}).toThrowError("A flying plane cannot takeoff")
    });
  });

});
