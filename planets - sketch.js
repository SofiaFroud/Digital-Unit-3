function setup() {
  createCanvas(500,500);
  background(0);

}

 function drawPlanet(x,y,radius) {
  ellipse (x,y,radius,radius);
  
  var c = color (random (255), random (255), random (255));
  fill(c)
 }
  
  function drawRings(x,y,radius){
  
 }
 
 function drawMoons(x,y,radius){
}

function mouseClicked(){
  drawPlanet (mouseX,mouseY,random (100), color);
  drawRings(mouseX, mouseY,random (60), color);
  drawMoons(mouseX, mouseY, random (60),color);
}