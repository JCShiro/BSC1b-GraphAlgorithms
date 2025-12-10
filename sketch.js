// 1 - draw nodes
// 2 - prevent draws from being on top of each other
// 3 - add & draw edges
// 4 - check properties


function setup() {
  createCanvas(400, 400);

  // Create a button and place it beneath the canvas.
  let button = createButton('click me');
  // button.position(0, 100);
}

function draw() {
  background(220);

  graph.draw();
}

function mouseClicked() {
  graph.onClick(mouseX, mouseY);
}