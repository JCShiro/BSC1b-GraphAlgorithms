class Graph {
  #nodes = [];
  #currentId = 1;
  #selectedNode = -1;

  drawNodes() {
    for (let node of this.#nodes) {
      if (node.selected) {
        push();
        fill(100, 100, 100);
      }
      circle(node.x, node.y, nodeDiameter);
      if (node.selected) pop();
    }
  }

  onClick(x, y) {
    if (!this.#selectedNode) this.addNode();
  }

  drawEdges() {}

  addNode(x, y) {
    for (let node of this.#nodes) {
      console.log(squareDistance(x, y, node.x, node.y));
      if (squareDistance(x, y, node.x, node.y) < nodeDiameter * nodeDiameter) {
        console.log("too close");
        // don't draw if too close
        if (
          squareDistance(x, y, node.x, node.y) <
          (nodeDiameter * nodeDiameter) / 4
        ) {
          this.#selectedNode = node.id;
          node.selected = true;
        }
        return;
      }
    }

    let newNode = new Node(x, y, this.#currentId);
    this.#nodes.push(newNode);
    this.#currentId++;
  }
}

let graph = new Graph();
