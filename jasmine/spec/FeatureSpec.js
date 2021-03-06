'use strict';

describe("Feature Test:",function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();

  });

  it('planes can be told to land at an airport', function(){
    spyOn(Math,'random').and.returnValue(0.2);
    airport.land(plane);
    expect(airport.planes).toContain(plane);
    expect(plane.atAirport()).toEqual(true);
  });

  it('planes can be told to take off from an airport', function(){
    spyOn(Math,'random').and.returnValue(0.2);
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).not.toContain(plane);
    expect(plane.atAirport()).toEqual(false);

  });

  it('stops planes from taking off if weather is stormy', function(){
    airport.land(plane);
    spyOn(Math,'random').and.returnValue(0.9);
    expect(function(){ airport.takeOff(plane);}).toThrowError('Cannot take off during storm');
    expect(airport.planes).toContain(plane);
  });

  it('stops planes from landing if weather is stormy', function(){
    spyOn(Math,'random').and.returnValue(0.9);
    expect(function(){ airport.land(plane);}).toThrowError('Cannot land during storm');
    expect(airport.planes).not.toContain(plane);
  });

});
