var Airport = function(){
  this.planes = [];

  Airport.prototype.land = function(plane) {
    if (this.isStormy() === true) {
      throw new Error('Cannot land during storm');
    }
    plane.landed();
    this.planes.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    if (this.isStormy() === true) {
      throw new Error('Cannot take off during storm');
    }
      plane.takenOff();
      planeToTakeOff = this.planes.indexOf(plane);
      this.planes.splice(planeToTakeOff,1);
  };

  Airport.prototype.isStormy = function() {
      return false;
  };
};
