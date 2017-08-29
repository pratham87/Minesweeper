function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;

  if (random(1) < 0.1) {
    this.bee = true;
  } else {
    this.bee = false;
  }
  this.revealed = true;

  this.count = 0;
}

Cell.prototype.getCount = function() {
  return this.count;
}

Cell.prototype.setCount = function(count) {
  this.count = count;
}

Cell.prototype.show = function(i, j) {
  stroke(0);
  strokeWeight(3);
  fill(83, 112, 102);
  rect(this.x, this.y, this.w, this.w);

  if (this.bee && this.revealed) {
    //stroke(0);
    strokeWeight(1);
    fill(255, 0, 0);
    rect(this.x, this.y, this.w, this.w);

    stroke(0);
    strokeWeight(1);
    fill(0);
    ellipse(this.x + w / 2, this.y + w / 2, w / 2);
  } else if (this.revealed) {
    stroke(0);
    strokeWeight(0);
    fill(255);
    rect(this.x, this.y, this.w, this.w);

    fill(0);
    textAlign(CENTER);
    text(this.count, this.x + this.w * 0.5, this.y + this.w - 10);
  }
}

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
  this.revealed = true;
}

Cell.prototype.count = function() {
  if (this.bee) {
    return -1;
  } else {

  }
}
