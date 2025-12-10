function setup() {
  createCanvas(800, 700);
  
  // console.log(graph.nodes)
}

function draw() {
  background(220);

  graph.draw();
}

function mouseClicked() {
  graph.onClick(mouseX, mouseY);
  
  console.log("Mouse has been clicked at, X: " +mouseX+ "Y: " +mouseY);
}
