
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// function preload()
// {
	
// }

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new paper(130, 606, 40);

	dustbin1 = new dustbin(530, 580, 20, 100);
	dustbin2 = new dustbin(620, 620, 200, 20);
	dustbin3 = new dustbin(710, 580, 20, 100);

	ground = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:25, y:-52})
	
	}

}



