function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  addShape (100,100,.5)
}
function addShape (x,y,size){
  
  translate (x,y)
  scale (size)
  fill ("purple")
  noStroke()
  ellipse (100,125,200)
  ellipse (300,125,200)
  ellipse (200,300,200)
  fill ("red")
  ellipse (200,25,100)
  ellipse (75,250,100)
  ellipse (325,250,100)
  ellipse (200,175,100)
}
