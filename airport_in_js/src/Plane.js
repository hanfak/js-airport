function Plane() {
  this.flying = true;
}
Plane.prototype.land = function(airport) {
  if (this.flying === false) {
    throw new Error("You cannot land a landed plane")
  }
  else {
    airport.allowLanding(this)
    this.flying = false;
  }
};

Plane.prototype.takeOff = function(airport) {
  if (this.flying === true) {
    throw new Error("A flying plane cannot takeoff")
  }
  else {
    airport.allowTakeOff(this)
    this.flying = true;
  };
};
