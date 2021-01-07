var PLAY=1;
var END=0;
var gameState=1;
var swordImage;
var score;
var fruit1,fruit2,fruit3,fruit4;
var monsterImage;      
var gameOverImage;



function preload(){
  swordImage=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  gameOverImage=loadImage("gameover.png");
  monsterImage=loadAnimation("alien1.png","alien2.png");
}
function setup(){
  createCanvas(600,600);
  
  knife=createSprite(40,200,20,20);
  knife.addImage(swordImage);
  knife.scale=0.7;
  score=0;
  fruitsGroup=createGroup();
  enemyGroup=createGroup();
}

function draw(){
  background(220)
  //call fruits and enemy function
  fruit();
  Enemy();
  text("Score: "+ score, 500,50);
  if(gameState===PLAY){
    knife.y=mouseY;
    knife.x=mouseX;
}
  if(fruitsGroup.isTouching(knife)){
     score=score+1;
     fruitsGroup.destroyEach();
     }
  if(enemyGroup.isTouching(knife)){
     gameState=END;
  }
  if (gameState===END){   
     fruitsGroup.destroyEach();
     enemyGroup.destroyEach();
     fruitsGroup.setVelocityXEach(0);
     enemyGroup.setVelocityXEach(0);
     knife.addImage(gameOverImage);
     knife.x=300;
     knife.y=300;
  }
  
drawSprites();
}
function fruit(){
  if(World.frameCount%80===0){
    var fruit=createSprite(400,200,20,20); 
    fruit.scale=0.2;
     var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
      
      default: break;
    }
    
    fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.Setlifetime=100;
    
    fruitsGroup.add(fruit);
}
}       
function Enemy(){
  if(World.frameCount%120===0){
    var monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.Setlifetime=50;
    
    enemyGroup.add(monster);
}
  
}
    
   
