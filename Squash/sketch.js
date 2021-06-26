var racket, ball;
var wallTop, wallBottom, wallLeft, wallRight;

var losingSound;

function preload() {
  losingSound = loadSound("Assets/losing.wav");
}

function setup() {
  createCanvas(450, 300);

  //paddle sprite
  racket = createSprite(200, 250, 60, 7);
  racket.shapeColor = "darkgray";
  racket.immovable = true;

  //ball sprite
  ball = createSprite(200, 150, 7, 7);
  ball.shapeColor = "black";

  //Top edge
  wallTop = createSprite(225, 0, 450, 20);
  wallTop.shapeColor = "navajowhite";
  wallTop.immovable = true;

  //Bottom edge
  wallBottom = createSprite(225, 300, 450, 5);
  wallBottom.shapeColor = "navajowhite";
  wallBottom.immovable = true;

  //Left edge
  wallLeft = createSprite(0, 200, 5, 400);
  wallLeft.shapeColor = "navajowhite";
  wallLeft.immovable = true;

  //Right edge
  wallRight = createSprite(450, 200, 5, 400);
  wallRight.shapeColor = "navajowhite";
  wallRight.immovable = true;
}

function draw() {
  background("beige");

  racket.position.x = mouseX;

  if (mouseIsPressed) {
    ball.velocity.x = 1; // Left or Right
    ball.velocity.y = 1; // Top to Bottom
    ball.setSpeed(5);
  }

  ball.bounce(wallLeft);
  ball.bounce(wallRight);
  ball.bounce(racket);

  ball.bounce(wallBottom, endgame);

  drawSprites();
}

function endgame(ball) {
  ball.remove();
  losingSound.play();
}
