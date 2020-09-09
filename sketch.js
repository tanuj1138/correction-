
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Dustbin;
var ground1;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Dustbin = new dustbin(1000,330);
	ground1 = new ground (600,350,1200,20);
    paper1 = new Paper (50,200,25);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Dustbin.display();
  ground1.display();
  paper1.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-45});
  
  }
}

