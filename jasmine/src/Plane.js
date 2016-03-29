var Plane = function(){
  this.status = false;

  Plane.prototype.atAirport = function(){
    return this.status;
  };

  Plane.prototype.landed = function(){
    return this.status = true;
  };

  Plane.prototype.takenOff = function(){
    return this.status = false;
  };

};
