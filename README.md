## Coding Minesweeper walkthrough:

* Create the canvas and the 2D grid.
* Every ```grid[i][j] = new Cell(location, width)```.
* Create the bee's and draw them on the canvas.
* User click and Cell reveal:
  * Iterate through every cell and check if it contains (mouseX, mouseY).
  * If yes then reveal = true (show what the cell contains).
* Cell count:
  * Default count = 0.
  * Every bee will add 1 to its neighbor.
  * That way we only iterate on the bee neighbors and not every cell in the grid.
* Flood fill: Reveal all empty (value = 0) cells.
* Flag: Put a flag with a right click.
* Game Over: Reveal all bee's or Victory.
