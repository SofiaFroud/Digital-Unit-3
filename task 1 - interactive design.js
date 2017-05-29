var circlex = 0 ;
var rect1 =0;
var tri=0;

function setup(){
  createCanvas(400,400);
}

function draw() {
  noStroke();
  fill(252,106,5);
  rect(200,0,200,200);
  
  noStroke();
  fill(227,182,65);
  ellipse(circlex,100,200,200);
  
  noStroke();
  fill(218,73,86);
  rect(rect1,200,200,100);
  
  noStroke();
  fill(128,185,108);
  rect(circlex,300,200,100);
  
  noStroke();
  fill(91,170,138);
  triangle(tri,400,200,400,400,200,400);
  
  circlex = circlex +3;
  rect1=rect1+1;
  tri=tri+5;
  
}
  
  function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}


