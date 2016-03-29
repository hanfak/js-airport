'use strict';

describe("Feature Test:",function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('planes can be told to land at an airport', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
    expect(plane.isFlying()).toEqual(false);
  });

  it('planes can be told to take off from an airport', function(){
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).not.toContain(plane);
  });


});
