var grid;
var rows = 20;
var cols = 20;
var w = 30;


function setup() {
  createCanvas(801, 801);
  grid = create2DArray(rows, cols);
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }

  // Every bee will add 1 to its neighbor.
  //That way we only iterate on the bee neighbors and not every cell in the grid.
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j].bee) {
        for (var x = -1; x < 2; x++) {
          for (var y = -1; y < 2; y++) {
            if (isValid(i + x, j + y) && !grid[i + x][j + y].bee) {
              grid[i + x][j + y].setCount(grid[i + x][j + y].getCount() + 1);
            }
          }
        }
      }
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

function isValid(i, j) {
  return (i >= 0 && i < rows && j >= 0 && j < cols);
}
