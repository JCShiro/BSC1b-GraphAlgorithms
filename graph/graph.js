class Graph {
  nodes = [];
  #currentId = 0;

  // public functions

  /**
   * called when the mouse is clicked anywhere
   * @param {Number} x
   * @param {Number} y
   */
  onClick(x, y) {
    //if co-ordinates are out of bounds --> stop function
    if (this.#outOfBOunds(x, y)) {
      console.log("Out of Bounds, no print!");
      return;
    }
    if (this.#closeToBorder(x, y)) {
      console.log("Too close to edge, no print!");
      return;
    }
    this.nodes.push({ x, y });
    // console.log(this.nodes); //console log for debugging
  }

  /**
   * called at every main sketch draw
   */
  draw() {
    this.#drawNodes();
    this.#drawEdges();
  }

  // =================== Drawing Functions ===================
  /**
   * Check if (x, y) is outside canvas bounds
   * @param {Number} x
   * @param {Number} y
   * @return {boolean}
   */
  #outOfBOunds(x, y) {
    let outside = false;
    if (0 > x > width) return (outside = true);
    if (0 > y > height) return (outside = true);
  }
  /**
   * Checks if x, y is near the border
   * @param {Number} x
   * @param {Number} y
   * @return {boolean}
   */
  #closeToBorder(x, y) {
    let radius = nodeDiameter / 2;
    let distanceLeft = x;
    let distanceTop = y;
    let distanceRight = width - x;
    let distanceBottom = height - y;

    let near = false;
    if (distanceLeft <= radius) return (near = true);
    if (distanceTop <= radius) return (near = true);
    if (distanceRight <= radius) return (near = true);
    if (distanceBottom <= radius) return (near = true);
  }

  /**
   * Check if (x, y) is inside another node
   * @param {Number} x
   * @param {Number} y
   * @return {boolean}
   */
  #insideNode(x, y) {}

  /**
   * Check if creating a node in (x, y) would make a node that overlaps with another node
   * @param {Number} x
   * @param {Number} y
   * @return {boolean}
   */
  #overlappingNode(x, y) {}

  /**
   * draw all nodes that in canvas
   */
  #drawNodes() {
    for (let node of this.nodes) {
      fill(95, 158, 160);
      circle(node.x, node.y, nodeDiameter);
    }
  }

  /**
   * draw all edges on canvas
   */
  #drawEdges() {}

  // =================== INTERACTIVE ELEMENTS ===================

  /**
   * Add new edge from selected node to node at (x, y)
   * @param {*} x
   * @param {*} y
   */
  #addEdge(x, y) {}

  /**
   * Add new node at (x, y)
   * @param {Number} x
   * @param {Number} y
   */
  #addNode(x, y) {}
}

let graph = new Graph();
