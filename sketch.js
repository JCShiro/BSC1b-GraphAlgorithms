function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  graph.drawNodes();
}

function mouseClicked() {
  graph.addNode(mouseX, mouseY);
}