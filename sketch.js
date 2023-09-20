let ballx = 200;
let ballspeed = 4;
let rectx = 0;
let diameter = 40;
let shouldMove = true;

function setup() {
  createCanvas(400, 400);
 

}

function draw() {
  background(123);
  if (ballx > width || ballx < 0) {
    ballspeed = ballspeed * -1;
  }
  if(shouldMove){
    ballx = ballx + ballspeed;
  }
  ellipse(ballx, height/2, 30)
  
  rectx = rectx +1
  rect(rectx, 100, 50, 50)
}

function mouseClicked() {
shouldMove = ! shouldMove
}

