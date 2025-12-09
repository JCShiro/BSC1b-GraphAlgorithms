// 1 - draw nodes
// 2 - prevent draws from being on top of each other
// 3 - draw edges

function setup() {
  createCanvas(400, 400);
  // noLoop();
}

function draw() {
  background(220);

  graph.drawNodes();
}

function mouseClicked() {
  graph.addNode(mouseX, mouseY);
}