// Creates the canvas to draw on
function setup () {
  createCanvas(400, 400)
  background(255)
}
// Creates an orange triangle and square
function draw () {
  fill(255, 130, 0)
  stroke(0)
  house(30, 80, 80)
}
// Function to turn squares into rectangles
function square(x, y, size) {
  rect(x, y, size, size)
}
// Function to turn triangles into roofs
function roof(x, y) {
  triangle(x, y, size, size)
}
// Function to turn roof and square into house
function house(x,y) {
  roof(x, y)
  square(x, y, 70)
}