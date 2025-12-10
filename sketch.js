// 1 - draw nodes
// 2 - prevent draws from being on top of each other
// 3 - add & draw edges
// 4 - check properties
//5 - properties
// - degree of nodes
// - how many components does it have? (BFS)
// - detect cycles (DFS)
// - is bipartite (BFS)
// - is it a tree? (connected + no cycles)

function setup() {
  createCanvas(800, 700);

  // Create a button and place it beneath the canvas.
  let button = createButton("click me");

  function mousePressed() {
    graph.switchState();
    if (graph.state === DRAWING) {
      frameRate(30);
    } else {
      bfs.reset();
    }
  }

  button.mousePressed(mousePressed);
}

function draw() {
  background(220);

  if (graph.state === DRAWING) graph.draw();
  else bfs.draw();
}

function mouseClicked() {
  if (graph.state === DRAWING) graph.onClick(mouseX, mouseY);
}
