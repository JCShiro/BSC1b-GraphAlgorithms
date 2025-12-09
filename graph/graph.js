class Graph {
  #nodes = [];
  #currentId = 0;

  constructor() {}

  drawNodes() {
    for (let node of this.#nodes) {
      circle(node.x, node.y, nodeDiameter);
    }
  }

  drawEdges() {}

  addNode(x, y) {
    for (let node of this.#nodes) {
      if ((x - node.x)*(x-node.x) + (y-node.y)*(y-node.y) < nodeDiameter * nodeDiameter) {
        return;
      }
    }

    let newNode = new Node(x, y, this.#currentId);
    this.#nodes.push(newNode);
    this.#currentId++;
  }
}

let graph = new Graph();
