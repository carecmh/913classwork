let x = 200;
let speed = 4;
let diameter = 40;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(123);
  ellipse(x, height/2, diameter);
if (x >= width || x <= 0) {speed = speed * -1; 
} x += speed

}
