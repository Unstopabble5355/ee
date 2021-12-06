var zombieImg,Zombie,zomgroup;
var unicorn,UnicornAnimation,unicornImg;
var ground,groundImg;
//var serve;
//var play;
//var end;
var score;
var arrowImg,arrow;
function preload(){
zombieImg=loadImage("zombie.png");
UnicornAnimation=loadAnimation("unicorn1.png","unicorn2.png");
unicornImg=loadImage("uni.png")
groundImg=loadImage("ground2.png");
arrowImg=loadImage("ARROW.png");

}

function setup() {
    createCanvas(600,200)

  ground=createSprite(200,180,400,20);
ground.addImage("ground",groundImg)
ground.velocityX=-3;

unicorn=createSprite(50,160,20,50);
unicorn.addAnimation("running",UnicornAnimation);
unicorn.scale=0.1;
 
zomgroup=new Group();
 argroup=new Group()

 
}
function draw() {
background("cyan");
if(ground.x<0){
ground.x=ground.width/2;
}

unicorn.addAnimation(UnicornAnimation);



text("score",+score,72,29);

if(keyDown(RIGHT_ARROW)){
 arrowS();
}

Zombiespawn();

    drawSprites();
}

function Zombiespawn(){
if(frameCount%100===0){
    zombie=createSprite(600,160,10,40);
    zombie.addImage(zombieImg);
    zombie.velocityX=-2;
zombie.scale=0.1;
zomgroup.add(zombie);
}

function arrowS(){
    arrow=createSprite(unicorn.x+80,unicorn.y-50);
    arrow.addImage(arrowImg);
arrow.scale=0.2;

arrow.velocityX=3;
argroup.add(arrow);

if(arrow.isTouching(zombie)){
    score=score+5;
    zombie.destroy();
    }
    
}
