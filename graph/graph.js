

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
    fill(95, 158, 160);
    circle(x, y, nodeDiameter);
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
  }


  /**
   * Check if (x, y) is inside another node
   * @param {Number} x 
   * @param {Number} y 
   * @return {boolean}
   */
  #insideNode(x, y) {
  }


  /**
   * Check if creating a node in (x, y) would make a node that overlaps with another node
   * @param {Number} x 
   * @param {Number} y 
   * @return {boolean}
   */
  #overlappingNode(x, y) {
  }

  /**
   * draw all nodes that in canvas
   */
  #drawNodes() {
  }

  /**
   * draw all edges on canvas
   */
  #drawEdges() {
    
  }

  // =================== INTERACTIVE ELEMENTS ===================

  
  /**
   * Add new edge from selected node to node at (x, y)
   * @param {*} x 
   * @param {*} y 
   */
  #addEdge(x, y) {
    
  }

  /**
   * Add new node at (x, y)
   * @param {Number} x 
   * @param {Number} y 
   */
  #addNode(x, y) {
    
  }
}

let graph = new Graph();
