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
    if (outOfBOunds(x, y)) {
      console.log("Out of Bounds, no print!");
      return;
    }
    if (closeToBorder(x, y)) {
      console.log("Too close to edge, no print!");
      return;
    }
    let insideNode = this.#insideNode(x, y);
    if (insideNode) {
      if (this.#currentId != -1) {
        //this.currentId --> contains previously selected node
        //insideNode --> the newley selected node
        const insideNodeId = this.nodes.indexOf(insideNode);
        //if same node, deselect and return
        if (this.#currentId === insideNodeId) {
          this.#deselectNode();
          return;
        }
        this.#addEdge(this.#currentId, insideNodeId);
        return;
      }

      console.log("inside preexisting node,", insideNode, "node selected");
      let selectedIndex = this.nodes.indexOf(insideNode);

      this.nodes[selectedIndex].selected = true; //Marking specific node as selected
      this.#currentId = selectedIndex; //storing the id of the selected node
      return;
    }

    this.#deselectNode();

    //Check if node is overlapping a previus node
    if (this.#overlappingNode(x, y)) return;

    //create a node object and push to nodes array
    //create new node object -> this allows us to access neighbours and other properties
    let newNode = new Node(x, y, this.nodes.length);
    this.nodes.push(newNode);
    console.log(this.nodes); //console log for debugging
  }

  /**
   * called at every main sketch draw
   */
  draw() {
    this.#drawNodes();
    this.#drawEdges();
  }

  /**
   * A graph is complete when all nodes are connected to each other
   * i.e. when all nodes have n - 1 neighbours, where n = number of nodes
   * @returns true if graph is complete, false otherwise
   */
  isComplete() {
    for (let node of this.nodes) {
      if (node.neighbours.length !== this.nodes.length - 1) return false;
    }
    return true;
  }

  /**
   * @returns -1 if no selected node, or number of neighbours if a node is selected
   */
  getSelectedNodeDegree(){
    if(this.#currentId ==-1) return -1;

    //get selected node and return degree
    let selectedNode = this.nodes[this.#currentId];
    return selectedNode.neighbours.length
  }
  // =================== Drawing Functions ===================

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
  #overlappingNode(x, y) {
    for (let node of this.nodes) {
      if (squareDistance(x, y, node.x, node.y) < nodeDiameter ** 2) return node;
    }
    return false;
  }

  /**
   * draw all nodes that in canvas
   */
  #drawNodes() {
    for (let node of this.nodes) {
      fill(95, 158, 160);
      if (node.selected) {
        fill(220, 20, 60);
      }
      circle(node.x, node.y, nodeDiameter);
    }
  }

  /**
   * draw all edges on canvas
   */
  #drawEdges() {
    for (let node of this.nodes) {
      for (let neighbourID of node.neighbours) {
        let neighbour = this.nodes[neighbourID];
        line(node.x, node.y, neighbour.x, neighbour.y);
      }
      // if (node.neighbour) {
      //   let neighbourNode = this.nodes[node.neighbour];
      //   line(node.x, node.y, neighbourNode.x, neighbourNode.y);
      // }
    }
  }

  // =================== INTERACTIVE ELEMENTS ===================

  /**
   * Add new edge from selected node at positions one and two
   * @param {*} x
   * @param {*} y
   */
  #addEdge(nodeOnePos, nodeTwoPos) {
    // this.nodes[nodeOnePos].neighbour = nodeTwoPos;
    // this.nodes[nodeTwoPos].neighbour = nodeOnePos;

    //get node objects
    let nodeOne = this.nodes[nodeOnePos];
    let nodeTwo = this.nodes[nodeTwoPos];

    //add as neighbours
    nodeOne.addNeighbour(nodeTwoPos);
    nodeTwo.addNeighbour(nodeOnePos);
  }

  #deselectNode() {
    if (this.#currentId == -1) return;
    this.nodes[this.#currentId].selected = false; //mark node as not selected
    this.#currentId = -1;
  }

  /**
   * Add new node at (x, y)
   * @param {Number} x
   * @param {Number} y
   */
  #addNode(x, y) {}
}


