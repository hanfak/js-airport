describe("Weather", function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('generates stormy weather', function(){
    spyOn(Math, 'random').and.returnValue(0.9);

    expect(weather.isStormy()).toEqual(true);


  });

});
