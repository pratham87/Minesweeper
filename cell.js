function Cell(x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w;

  if (random(1) < 0.1) {
    this.bee = true;
  } else {
    this.bee = false;
  }
  this.revealed = false;
}

Cell.prototype.show = function(i, j) {
  stroke(0);
  strokeWeight(3);
  fill(83, 112, 102);
  rect(this.x, this.y, this.w, this.w);

  if (this.bee && this.revealed) {
    stroke(0);
    strokeWeight(1);
    fill(255, 0, 0);
    ellipse(this.x + w / 2, this.y + w / 2, w / 2);
  }
}

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
  this.revealed = true;
}
