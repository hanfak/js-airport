var Airport = function(){
  this.planes = [];

  Airport.prototype.land = function(plane) {
    plane.landed();
    this.planes.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    plane.takenOff();
    planeToTakeOff = this.planes.indexOf(plane);
    this.planes.splice(planeToTakeOff,1);
  };
};
