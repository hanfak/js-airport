describe("Plane", function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it('is flying by default',function(){
    expect(plane.atAirport()).toBe(false);

  });

  it('changes to not flying after landing', function(){
    plane.landed();
    expect(plane.atAirport()).toEqual(true);

  });

  it('changes to flying after taking off', function(){
    plane.takenOff();
    expect(plane.atAirport()).toEqual(false);

  });
});
