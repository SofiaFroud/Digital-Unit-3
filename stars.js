function setup() {
  resizeCanvas(500,500);
  background (0);
  drawStars();
}

function drawStars(){
  stroke(255);
  for(var i = 0; i < 1000; i++){
  point(random(width), random(height));
  }
}
  

