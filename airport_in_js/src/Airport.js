function Airport() {
  this.planes = [];
}

  Airport.prototype.allowLanding = function(plane){
    this.planes.push(plane);
  };
  Airport.prototype.allowTakeOff = function(plane){
    index = this.planes.indexOf(plane);
    this.planes.splice(index, 1);
  };
