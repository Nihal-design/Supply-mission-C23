var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1, log2, log3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.visible=false;
	packageSprite.scale=0.2


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 ,200, 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);

	helicopterBody = Bodies.circle(width/2, 200, 10, 10);
	World.add(world, helicopterBody);
	



	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	log1 = new Basket(280, 620, 20, 100);
	log2 = new Basket(390, 650, 200, 20);
	log3 = new Basket(500, 610, 20, 100);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  	rectMode(CENTER);
  	background(0);
  	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;

	log1.display();
	log2.display();
	log3.display();

  	drawSprites();

	  keyPressed();
	  

 
}

function keyPressed() {
	 if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
		packageSprite.visible=true;
		packageSprite.velocityY=5;
    	Matter.Body.setStatic(packageBody, false);
  	}
}



