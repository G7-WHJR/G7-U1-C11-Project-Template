var racket, ball, points;
var wallTop, wallBottom, wallLeft, wallRight;


function setup() {
  createCanvas(450, 300);

  points=0; 

  //paddle sprite
  racket = createSprite(200, 250, 60, 7);
  racket.shapeColor = "darkgray";

  //ball sprite
  ball = createSprite(200, 150, 7, 7);
  ball.shapeColor = "black";

  //Top edge
  wallTop = createSprite(225, 0, 450, 20);
  wallTop.shapeColor = "navajowhite";

  //Bottom edge
  wallBottom = createSprite(225, 300, 450, 5);
  wallBottom.shapeColor = "navajowhite";

  //Left edge
  wallLeft = createSprite(0, 200, 5, 400);
  wallLeft.shapeColor = "navajowhite";

  //Right edge
  wallRight = createSprite(450, 200, 5, 400);
  wallRight.shapeColor = "navajowhite";
}

function draw() {
  background("beige");

  text("Score : ", 360, 30);
  text(points, 400, 30);

  racket.x = mouseX;

  if (mouseIsPressed) {
    ball.velocityX = 5; 
    ball.velocityY = 5; 
  }

  ball.bounceOff(wallLeft);
  ball.bounceOff(wallRight);
  ball.bounceOff(racket);

  
  ball.bounceOff(wallBottom, endgame);

  drawSprites();
}

function endgame() {
  ball.velocityX=0;
  ball.velocityY=0;
}

