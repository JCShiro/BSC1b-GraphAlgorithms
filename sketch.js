let graph = new Graph();

let completeSpan = document.getElementById("completeSpan");
let degreeSpan = document.getElementById("degreeSpan");

function setup() {
  createCanvas(800, 700);

  if (graph.isComplete()) {
    completeSpan.innerHTML = "";
  } else {
    completeSpan.innerHTML = "not";
  }
  // console.log(graph.nodes)
}

function draw() {
  background(220);

  graph.draw();
}

function mouseClicked() {
  graph.onClick(mouseX, mouseY);

  if (graph.isComplete()) {
    completeSpan.innerHTML = "";
  } else {
    completeSpan.innerHTML = "not ";
  }

  //check if a node is selected and change node degree text accordingly
  if(graph.getSelectedNodeDegree()===-1){
    degreeSpan.innerHTML = ""
  }else{
    degreeSpan.innerHTML = graph.getSelectedNodeDegree();
  }
  // console.log("Mouse has been clicked at, X: " + mouseX + "Y: " + mouseY); //Console log gor debugging
}
