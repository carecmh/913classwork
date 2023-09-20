let ballx = 200;
let ballspeed = 4;
let rectx = 0;
let diameter = 40;
let shouldMove = true;
let gray = 120
let transparency = 0

function setup() {
  createCanvas(400, 400);
 

}

function draw() {
  if (millis() > 10000) {
    background(275,13,75)
  } else {
  background(255,125,0);
  }

  if (ballx > width || ballx < 0) {
    ballspeed = ballspeed * -1;
  }
  if(shouldMove){
    ballx = ballx + ballspeed;
  }
  fill(gray);
  ellipse(ballx, height/2, 30)
  
  if (transparency < 255) {
  }transparency++;
  fill(25,42,100,transparency);
  rectx = rectx +1
  rect(rectx, 100, 50, 50)
}

function mouseClicked() {
  if(shouldMove) {
    shouldMove = false;
  } else {
    shouldMove = true;
    gray = random(255);
  }

}

