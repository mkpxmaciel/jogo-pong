function setup() {
  createCanvas(400, 400);
   background("#607D8B");
}

function draw() {

 
  //console.log(mouseIsPressed);
  
  if(mouseIsPressed){
      rect(mouseX, mouseY, 15, 15)
  }
  
  fill("#2196F3")
  stroke("#9C27B0")

  }