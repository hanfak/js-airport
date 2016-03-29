var Airport = function(){
  this.planes = [];

  Airport.prototype.land = function(plane) {
    this.planes.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    planeToTakeOff = this.planes.indexOf(plane);
    this.planes.splice(planeToTakeOff,1);
  };
};
