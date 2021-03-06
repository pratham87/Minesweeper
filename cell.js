function Cell(i, j, w) {
  this.i = i; // (i, j): index, w: width, (x,y): Pixel location on the html page. 
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
  drawRectangle(0, 3, 83, 112, 102, this.x, this.y, this.w, this.w);

  if (this.flag) {
    drawRectangle(0, 1, 255, 184, 0, this.x, this.y, this.w, this.w);

    stroke(0);
    strokeWeight(1);
    fill(237, 34, 93);
    triangle(this.x + w / 2, this.y + w / 4, this.x + w / 4, this.y + (w - w / 4), this.x + (w - w / 4), this.y + (w - w / 4));
  }

  if (this.bee && this.revealed) {
    drawRectangle(0, 1, 255, 0, 0, this.x, this.y, this.w, this.w);

    stroke(0);
    strokeWeight(1);
    fill(0);
    ellipse(this.x + w / 2, this.y + w / 2, w / 2);
  } else if (this.revealed) {
    if (this.count > 0) {
      drawRectangle(0, 1, 255, 255, 255, this.x, this.y, this.w, this.w);

      fill(0);
      textAlign(CENTER);
      text(this.count, this.x + this.w * 0.5, this.y + this.w - 10);
    } else {
      drawRectangle(0, 1, 255, 255, 255, this.x, this.y, this.w, this.w);
    }
  }
}

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
