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
  this.revealed = false;
  this.count = 0;
  this.flag = false;
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

  if (this.flag) {
    stroke(0);
    strokeWeight(1);
    fill(255, 184, 0);
    rect(this.x, this.y, this.w, this.w);

    stroke(0);
    strokeWeight(1);
    fill(237, 34, 93);
    triangle(this.x + w / 2, this.y + w / 4, this.x + w / 4, this.y + (w - w / 4), this.x + (w - w / 4), this.y + (w - w / 4));
  }

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
    if (this.count > 0) {
      stroke(0);
      strokeWeight(0);
      fill(255);
      rect(this.x, this.y, this.w, this.w);

      fill(0);
      textAlign(CENTER);
      text(this.count, this.x + this.w * 0.5, this.y + this.w - 10);
    } else {
      stroke(0);
      strokeWeight(0);
      fill(255);
      rect(this.x, this.y, this.w, this.w);
    }
  }
}

// Cell.prototype.drawShape = function(stroke, strokeWeight, fillV1, fillV2, fillV3, shape) {
//   if (shape == "rectangle") {
//
//   } else if (shapre == "ellipse") {
//
//   }
//
// }

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
  this.revealed = true;
}

Cell.prototype.flagIt = function() {
  this.flag = true;
}

Cell.prototype.floodFill = function(i, j) {
  if (!isValid(i, j) || grid[i][j].revealed) {
    return;
  }

  if (grid[i][j].getCount() > 0) {
    grid[i][j].reveal();
    return;
  }

  if (grid[i][j].getCount() == 0) {
    grid[i][j].reveal();
    grid[i][j].floodFill(i, j - 1);
    grid[i][j].floodFill(i, j + 1);
    grid[i][j].floodFill(i - 1, j);
    grid[i][j].floodFill(i + 1, j);
  }
}
