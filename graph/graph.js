class Graph {
  nodes = [];
  #currentId = -1;

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
    let insideNode = this.#insideNode(x, y);
    if (insideNode) {

      if(this.#currentId != -1) {
        //this.currentId --> contains previously selected node
        //insideNode --> the newley selected node
        const insideNodeId = this.nodes.indexOf(insideNode);
        this.#addEdge(this.#currentId, insideNodeId);
        return;
      }

      console.log("inside preexisting node,", insideNode, "node selected");
      let selectedIndex = this.nodes.indexOf(insideNode);

      this.nodes[selectedIndex].selected = true; //Marking specific node as selected
      this.#currentId = selectedIndex; //storing the id of the selected node
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
  #insideNode(x, y) {
    let radius = nodeDiameter / 2;
    for (let node of this.nodes) {
      if (squareDistance(x, y, node.x, node.y) < radius * radius) {
        return node;
      }
    }
    return false;
  }

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
      if(node.selected){
        fill(220, 20, 60)
      }
      circle(node.x, node.y, nodeDiameter);
    }
  }

  /**
   * draw all edges on canvas
   */
  #drawEdges() {
    for(let node of this.nodes){
      if(node.neighbour){
        let neighbourNode = this.nodes[node.neighbour];
        line(node.x, node.y, neighbourNode.x, neighbourNode.y)
      }
    }
  }

  // =================== INTERACTIVE ELEMENTS ===================

  /**
   * Add new edge from selected node at positions one and two
   * @param {*} x
   * @param {*} y
   */
  #addEdge(nodeOnePos, nodeTwoPos) {
    this.nodes[nodeOnePos].neighbour = nodeTwoPos;
    this.nodes[nodeTwoPos].neighbour = nodeOnePos;
  }

  /**
   * Add new node at (x, y)
   * @param {Number} x
   * @param {Number} y
   */
  #addNode(x, y) {}
}

let graph = new Graph();
