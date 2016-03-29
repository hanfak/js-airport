function Plane() {
  this.flying = true;
}
Plane.prototype.land = function() {
  if (this.flying === false) {
    throw new Error("You cannot land a landed plane")
  }
  else {
    this.flying = false;
  }
};

Plane.prototype.takeOff = function() {
  if (this.flying === true) {
    throw new Error("A flying plane cannot takeoff")
  }
  else {
    this.flying = true;
  };
};
