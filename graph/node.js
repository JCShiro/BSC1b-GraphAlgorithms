class Node {

  #diam = 50;

  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.neighbours = [];
  }

  getDiam() {
    return this.#diam;
  }
}
