function Cell(x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w;

  if (random(1) < 0.8) {
    this.bee = false;
  } else {
    this.bee = true;
  }
  this.revealed = true;
}

Cell.prototype.show = function(i, j) {
  stroke(0);
  fill(83, 112, 102);
  rect(this.x, this.y, this.w, this.w);

  if (this.bee && this.revealed) {
    fill(255, 0, 0);
    ellipse(this.x + w / 2, this.y + w / 2, w / 2);
  }
}
