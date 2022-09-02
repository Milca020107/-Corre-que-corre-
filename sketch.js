var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

  boy = loadAnimation("Runner-1.png", "Runner-2.png");
  path = loadImage("path.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
  
 
  pathImg = createSprite(200,180,400,20);
  pathImg.addImage("pista",path);
  pathImg.y = pathImg.width /2;
  pathImg.velocityY = -4;
pathImg.scale=1.2;

boyImg = createSprite(200, 300);
boyImg.addAnimation("running", boy);
boyImg.scale=0.08;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  pathImg.velocityY = 4;
  
  
  boyImg.x = World.mouseX;


  edges= createEdgeSprites();
  boyImg.collide(edges[3]);
  boyImg.collide(leftBoundary); 
  boyImg.collide(rightBoundary);
  
  if(pathImg.y > 400 ){
    pathImg.y = height/2;
  }
  
  drawSprites();
}
