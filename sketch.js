var grid;
var rows = 20;
var cols = 20;
var w = 30;


function setup() {
  createCanvas(801, 801);
  grid = create2DArray(rows, cols);
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      grid[i][j] = new Cell(i * w, j * w, w);
    }
  }
}

function create2DArray(rows, cols) {
  var arr = new Array(rows);
  for (var i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function draw() {
  background(255);
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      grid[i][j].show(i, j);
    }
  }
}

function mousePressed() {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].reveal();
      }
    }
  }
}
