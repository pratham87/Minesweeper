function Cell(x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.bee = true;
  this.revealed = true;
}

Cell.prototype.show = function() {
  stroke(0);
  fill(255);
  rect(this.x, this.y, this.w, this.w);
}
