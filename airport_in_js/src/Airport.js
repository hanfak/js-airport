function Airport() {
  this.planes = [];
}

  Airport.prototype.allowLanding = function(plane){
    this.planes.push(plane);
  };
  Airport.prototype.allowTakeOff = function(plane){
    this.planes.delete(plane);
  };
