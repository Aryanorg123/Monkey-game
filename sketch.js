
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstatleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-3;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
  
}


function draw() {
  background("white");
  
  if(ground.x<0){
    ground.x=200;
  }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+1;
  monkey.collide(ground);

  if(obstacleGroup.isTouching(monkey)){
     ground.velocityX=0;
    monkey.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     }
  score = Math.ceil(frameCount/frameRate());
  text("survival time = "+score,100,50);
  spawnBanana();
  spawnObstacles();
  drawSprites();
}
function spawnBanana(){
  if (frameCount%80===0){
   banana=createSprite(600,250,40,10);
    banana.y=Math.round(random(120,200));
    banana.velocityX=-4;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=300;
    FoodGroup.add(banana);
    
  }
  
}
function spawnObstacles(){
  if(frameCount%300===0){
    obstatle=createSprite(600,320,10,40);
    obstatle.addImage(obstatleImage);
    obstatle.velocityX=-4;
    obstatle.scale=0.1;
    obstacleGroup.add(obstatle);
    
  }
}





