function setup(rgb) {
  createCanvas(600, 600);
}
let gradient=50
let sat=10
let xvalue=50
let yvalue=50
let sizes=100

function draw() {
  background(220);
fill (255,gradient,255)
  //row1
fill(0,0,0) 
  ellipse (xvalue,yvalue,sizes)
  
  ellipse (xvalue+100,yvalue,sizes)
  ellipse (xvalue+200,yvalue,sizes)
  
  ellipse (xvalue+300,yvalue,sizes)
  ellipse (xvalue+400,yvalue,sizes)
fill (255,gradient,250)
  ellipse (xvalue+500,yvalue,sizes)
  //row2
  fill(255,gradient+sat,250)
   ellipse (xvalue,yvalue+100,sizes)
  ellipse (xvalue+100,yvalue+100,sizes)
  fill(0,0,0)
  ellipse (xvalue+200,yvalue+100,sizes)
fill (255,gradient+sat*2,250)
  ellipse (xvalue+300,yvalue+100,sizes)
  ellipse (xvalue+400,yvalue+100,sizes)
  ellipse (xvalue+500,yvalue+100,sizes)

  //row3

  ellipse (xvalue,yvalue+200,sizes)
  ellipse (xvalue+100,yvalue+200,sizes)
  fill(0,0,0)
  ellipse (xvalue+200,yvalue+200,sizes)
fill (255,gradient+sat*3,250)
  ellipse (xvalue+300,yvalue+200,sizes)
  ellipse (xvalue+400,yvalue+200,sizes)
  ellipse (xvalue+500,yvalue+200,sizes)
    //row4
  fill (0,0,0)
   ellipse (xvalue,yvalue+300,sizes)
fill (255,gradient+sat*4,250)
  ellipse (xvalue+100,yvalue+300,sizes)
  fill(0,0,0)
  ellipse (xvalue+200,yvalue+300,sizes)
fill (255,gradient+sat*5,250)
  ellipse (xvalue+300,yvalue+300,sizes)
  ellipse (xvalue+400,yvalue+300,sizes)
  ellipse (xvalue+500,yvalue+300,sizes)
  //row5
   ellipse (xvalue,yvalue+400,sizes)
  fill(0,0,0)
  ellipse (xvalue+100,yvalue+400,sizes)
fill (255,gradient+sat*6,250)
  ellipse (xvalue+200,yvalue+400,sizes)
  ellipse (xvalue+300,yvalue+400,sizes)
  ellipse (xvalue+400,yvalue+400,sizes)
  ellipse (xvalue+500,yvalue+400,sizes)
  //6
   ellipse (xvalue,yvalue+500,sizes)
  ellipse (xvalue+100,yvalue+500,sizes)
  ellipse (xvalue+200,yvalue+500,sizes)
  ellipse (xvalue+300,yvalue+500,sizes)
  ellipse (xvalue+400,yvalue+500,sizes)
  ellipse (xvalue+500,yvalue+500,sizes)
}
