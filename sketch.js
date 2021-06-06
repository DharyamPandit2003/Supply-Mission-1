var HelicopterImage, HelicopterSprite, PackageSprite,PackageImage;
var PackageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	HelicopterImage=loadImage("images/helicopter.png");
	PackageImage=loadImage("images/package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	PackageSprite=createSprite(width/2, 80, 10,10);
	PackageSprite.addImage(PackageImage);
	PackageSprite.scale=0.2;
	
	HelicopterSprite=createSprite(width/2, 200, 10,10);
	HelicopterSprite.addImage(HelicopterImage);
	HelicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	PackageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, PackageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw(){
  rectMode(CENTER);
  background(0);
  PackageSprite.x= PackageBody.position.x ;
  PackageSprite.y= PackageBody.position.y ;
  drawSprites();
 
}

function keyPressed() {
   if (keyCode === DOWN_ARROW) {
 	  Matter.Body.setStatic(PackageBody, false);
      this.PackageBody= Bodies.circle(width/2, 650, width, 10 , {isStatic:false});
    }
}



