const nodeDiameter = 50;

class Node {
  selected = false;
  neighbours = [];

  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
  }

  addNeighbour(neighbourID) {
    //check if neighbour already exists
    if (this.neighbours.includes(neighbourID)) {
      //delete
      let neighbourIndex = this.neighbours.indexOf(neighbourID);

      //remove neighbour
      this.neighbours.splice(neighbourIndex, 1);
      return;
    }
    this.neighbours.push(neighbourID);
  }
}
