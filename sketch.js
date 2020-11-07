
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime;
var bananaGroup,obstaceGroup;
var GameState = "PLAY"


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  
monkey = createSprite(75,340,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  bananaGroup = new Group()
  obstaceGroup = new Group()
  
  
 ground = createSprite(200,370,400,10)
  ground.VelocityX = -4
  
  console.log(ground.x)
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score :",score,500,50)
  
  
  
  
}


function draw() {
background("brown")
  
  if(GameState==="PLAY"){
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
      if (ground.x <0){
        ground.x = ground.width/2;
}
      spawnBanana()
 spawnObstace() 
    monkey.velocityY = monkey.velocityY + 0.8   
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach()
    
  }
    if(monkey.isTouching(obstaceGroup)){
      GameState = "END";
    }
    survivalTime=Math.ceil(frameCount/frameRate())
  
  }
  
  if(GameState==="END"){
    ground.velocityX = 0;
    bananaGroup.destroyEach()
    obstaceGroup.setVelocityXEach(0)
    text("Game Over",200,200)
    obstaceGroup.setLifetimeEach(-1)
    
  }
  
  
  
  
 
  monkey.collide(ground);
  
 

  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  
  text("Survival Time: "+ survivalTime,100,50);
  
}

function spawnBanana() {
 if(frameCount % 150 === 0){
   banana = createSprite(600,120,10,10)
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale = 0.1
   banana.velocityX = -3
   banana.lifetime = 200;
    bananaGroup.add(banana)
  
 } 
}

function spawnObstace() {
  if(frameCount % 300 ===0){
    obstace = createSprite(200,350,400,10)
  obstace.addImage("obstace",obstaceImage)
  obstace.scale = 0.2
   obstace.velocityX = -3
    
    
    obstaceGroup.add(obstace);
    
  }
}


