Array.prototype.first = function() {
  if(this.length == 0) {
    return undefined;
  }
  return this[0];
}

Array.prototype.last = function() {
  if(this.length == 0) {
    return undefined;
  }
  return this[this.length - 1];
}
