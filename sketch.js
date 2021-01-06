var fixedRect, movingRect;

function preload(){
  img = loadImage("th.jpg")
}

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400,200,80,30);

  batsgirl = createSprite(300,200,50,50)
  batsgirl.shapeColor = "purple"
  donald_trump = createSprite(300,500,50,50)
  donald_trump.shapeColor = "yellow"
  batsgirl.velocityY = 4
}

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (collision(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(collision(batsgirl,donald_trump)){
    batsgirl.addImage(img)
    batsgirl.width = batsgirl.width*1.1
    donald_trump.width = donald_trump.width*1.1
  } else {
    batsgirl.width = 50
    donald_trump.width = 50
  }

  drawSprites();
}
