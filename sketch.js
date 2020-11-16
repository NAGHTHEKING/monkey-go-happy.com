var trex,trexrun,trex_is_dead,ground,invisiground,groundanimate,cloud,cloudimg,cactus,cactus1,c2,c3,c4,c5,c6,gamestate,gameover,resetbutton,gameoverimg,resetbuttonimg,scor;
var groupofcloud,cactusgroup1;
var c7,c8,c9,c10;
var PLAY=1;
var END=0;

gamestate=PLAY;
function preload()
{
  trexrun=loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png");
  groundanimate=loadImage("jungle.jpg");
 cloudimage=loadImage("banana.png");
  cactus1=loadImage("stone.png");
    
  trex_is_dead=loadAnimation("trex_collided.png");
  gameoverimg=loadImage("gameOver.png");
  resetbuttonimg=loadImage("restart.png");
  }

function setup() {
  createCanvas(600, 200);
  trex=createSprite(50,170);
  trex.addAnimation("running",trexrun);
  trex.addAnimation("dead",trex_is_dead);
trex.scale=0.5;
  ground=createSprite(300,180,width,20);
  scor=0;
  ground.addImage(groundanimate);
  invisiground=createSprite(width/2,185,width,10);
  invisiground.visible=false;
  groupofcloud=new Group();
  cactusgroup1=new Group();
  
  }

function draw() {
  background(180);
text("score:"+scor,500,50);
  if (gamestate===PLAY)
    {
          scor=scor+Math.round(getFrameRate()/60);
  if (keyDown("space")&&(trex.y>150))
    {
      trex.velocityY=-12;
    }
 if (ground.x<0)
   {
     ground.x=ground.width/2;
   }
  trex.velocityY=trex.velocityY+0.6;
  ground.velocityX=(-5-3*Math.round(scor/100));
  spawncloud();
  createobstacles();
      if (cactusgroup1.isTouching(trex))
        {
          trex.scale=trex.scale-0.5;
          }
      if (groupofcloud.isTouching(trex))
        {
          trex.scale=trex.scale+0.5;
        }
    trex.collide(invisiground);
} 
  drawSprites();
}

function spawncloud()
{
  if (frameCount%100===0)
    {
      cloud=createSprite(600,Math.round(random(80,120)),30,10);
      cloud.addImage(cloudimg);
      cloud.velocityX=(-5-3*Math.round(scor/100));
      trex.depth=cloud.depth+1;
      cloud.lifetime=120;
      groupofcloud.add(cloud);
      
    }
  }

function createobstacles()
{
  if (frameCount%100===0)
    {
      cactus=createSprite(600,165);
      cactus.velocityX=(-5-2*Math.round(scor/100));
      cactus.addImage("")
      cactus.scale=0.5;
      cactus.lifetime=120;
      cactusgroup1.add(cactus);
    }
  
 }