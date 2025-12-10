class BFS {

  #queue = [];
  first = true;

  #visited = [];

  reset() {
    this.first = true;
    frameRate(2);
    this.#queue = [];
    this.#visited = [];
  }

  draw() {
    graph.draw();

    if(this.first) {
      if(Graph.nodes.length === 0) return;
        this.#queue.push(Graph.nodes[0]);
      this.#visited.push(Graph.nodes[0]);
      this.first = false;
    }

      else this.#bfsStep();

    this.#drawVisited();
  }

  #drawVisited(){
    for(let node of this.#visited) {
      
      // const originalNode = Graph.nodes[nodeId - 1];
      push();
      fill(200, 0, 200);
      circle(node.x, node.y, nodeDiameter);
      pop();
    }
  }

  #bfsStep() {

    if(this.#queue.length === 0 ) return;

    const nextPoint = this.#queue.pop();

    console.log("checking", nextPoint);
    
    if(!nextPoint.neighbours) return;


    for(let otherNodeId of nextPoint.neighbours) {
      const otherNode = Graph.nodes[otherNodeId - 1];
      if(otherNode.id in this.#visited) continue;
      this.#queue.push(otherNode);
      console.log("adding", otherNode);
      this.#visited.push(otherNode);
    }

  }
}

const bfs = new BFS();