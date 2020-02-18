function Airport() {
this.hanger = [];
};

Airport.prototype.land = function(plane) {
  return plane;
};

Airport.prototype.takeOff = function(plane) {
    return plane;
};

Airport.prototype.size = function(amount = 5) {
    return amount

};

Airport.prototype.store = function(plane) {
    if (this.size() >= 5 ) { 
    throw new Error("Hanger full") ;
    } 
    this.hanger.push(plane);
};


