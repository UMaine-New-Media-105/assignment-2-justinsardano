function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("cyan");
  push();
  noStroke();
  fill(0)
  rect(0,0,200,400)
  fill("yellow")
  rect(400,0,200,400)
  fill("red");
  ellipse(300, 200, 250);

  fill("white");
  addLucia(137, 80, 0, 0, 0, 0, 2.8);

  pop();
}
function addLucia(x1, y1, x2, y2, x3, y3, size) {
  translate(x1, y1);
  scale(size);

  triangle(30, 75, 58, 20, 86, 75);
}
