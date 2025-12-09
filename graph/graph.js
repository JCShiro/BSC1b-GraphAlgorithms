class Graph {

  #nodes = [];
  #ids = [];
  #currentId = 0;

  constructor() {
  }

  drawNodes() {
    for(let node of this.#nodes){
      circle(node.x, node.y, node.getDiam());
    }
  }

  drawEdges() {

  }

  addNode(x, y) {
    let newNode = new Node(x, y, this.#currentId);
    this.#nodes.push(newNode);
    this.#currentId++;
  }
}

let graph = new Graph();