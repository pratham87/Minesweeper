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
  //That way we only iterate for the bee neighbors and not every cell in the grid.
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j].bee) {

        //Right
        if (isValid(i + 1, j) && !grid[i + 1][j].bee) {
          grid[i + 1][j].setCount(grid[i + 1][j].getCount() + 1);
        }

        //left
        if (isValid(i - 1, j) && !grid[i - 1][j].bee) {
          grid[i - 1][j].setCount(grid[i - 1][j].getCount() + 1);
        }

        //bottom
        if (isValid(i, j + 1) && !grid[i][j + 1].bee) {
          grid[i][j + 1].setCount(grid[i][j + 1].getCount() + 1);
        }

        //bottom left
        if (isValid(i - 1, j + 1) && !grid[i - 1][j + 1].bee) {
          grid[i - 1][j + 1].setCount(grid[i - 1][j + 1].getCount() + 1);
        }

        //bottom right
        if (isValid(i + 1, j + 1) && !grid[i + 1][j + 1].bee) {
          grid[i + 1][j + 1].setCount(grid[i + 1][j + 1].getCount() + 1);
        }

        //top
        if (isValid(i, j - 1) && !grid[i][j - 1].bee) {
          grid[i][j - 1].setCount(grid[i][j - 1].getCount() + 1);
        }

        //top left
        if (isValid(i - 1, j - 1) && !grid[i - 1][j - 1].bee) {
          grid[i - 1][j - 1].setCount(grid[i - 1][j - 1].getCount() + 1);
        }

        //top right
        if (isValid(i + 1, j - 1) && !grid[i + 1][j - 1].bee) {
          grid[i + 1][j - 1].setCount(grid[i + 1][j - 1].getCount() + 1);
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
