

class Graph {
  static nodes = [];
  #currentId = 1;
  #selectedNode = 0;

  state = DRAWING;

  switchState() {
    console.log(this.state);
    this.state = !this.state;
    console.log(this.state);
  }

  #outOfBOunds(x, y) {
    if (x < 0 || y < 0 || x > width || y > height){
      return true;
    }
    return false;
  }

  #insideNode(x, y) {
    for (let node of Graph.nodes) {
      if (
        squareDistance(x, y, node.x, node.y) <
        (nodeDiameter * nodeDiameter) / 4
      )
        return node;
    }
    return false;
  }

  #tooCloseToNode(x, y) {
    for (let node of Graph.nodes) {
      if (squareDistance(x, y, node.x, node.y) < nodeDiameter * nodeDiameter) {
        return true;
      }
    }
    // too close to edge
    if (
      x < nodeDiameter / 2 ||
      y < nodeDiameter / 2 ||
      x > width - nodeDiameter / 2 ||
      y > width - nodeDiameter / 2
    )
      return true;
    return false;
  }

  #drawNodes() {
    for (let node of Graph.nodes) {
      if (node.selected) {
        push();
        fill(100, 100, 100);
      }
      circle(node.x, node.y, nodeDiameter);
      if (node.selected) pop();
    }
  }

  #drawEdges() {
    for (let node of Graph.nodes) {
      if (node.neighbours.length > 0) {
        for (let nodeId of node.neighbours) {
          const otherNode = Graph.nodes[nodeId - 1];
          line(node.x, node.y, otherNode.x, otherNode.y);
        }
      }
    }
  }

  #unselect(x, y) {
    const otherNode = this.#insideNode(x, y);
    if (otherNode.id === this.#selectedNode) {
      this.#selectedNode = 0;
      otherNode.selected = false;
      return true;
    }
    return false;
  }

  onClick(x, y) {
    // out of bounds -> nothing happens
    if (this.#outOfBOunds(x, y)) return;

    // no node selected -> nothing happens
    if (!this.#selectedNode) return this.#addNode(x, y);

    // unselecting current node -> disable node
    if (this.#unselect(x, y)) return;

    // selecting new node -> add edge
    if (this.#addEdge(x, y)) return;

    // deselect and add node normally
    Graph.nodes[this.#selectedNode - 1].selected = false;
    this.#selectedNode = 0;
    this.#addNode(x, y);
  }

  draw() {
    this.#drawNodes();
    this.#drawEdges();
  }

  #addEdge(x, y) {
    const otherNode = this.#insideNode(x, y);
    if (otherNode) {
      const currentNode = Graph.nodes[this.#selectedNode - 1];
      otherNode.neighbours.push(currentNode.id);
      currentNode.neighbours.push(otherNode.id);
      currentNode.selected = false;
      this.#selectedNode = 0;
      return true;
    }
    return false;
  }

  #addNode(x, y) {
    // check if it's inside another node
    const insideNode = this.#insideNode(x, y);
    if (insideNode) {
      this.#selectedNode = insideNode.id;
      insideNode.selected = true;
      return;
    }

    //check if too close to node
    if (this.#tooCloseToNode(x, y)) return;

    // add node
    let newNode = new Node(x, y, this.#currentId);
    Graph.nodes.push(newNode);
    this.#currentId++;
  }
}

let graph = new Graph();
