const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper, ground1, ground2, ground3;
var hexagon, sling;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;


function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hexagon = new ball(50,200);
	
	sling = new Slingshot(hexagon.body,{x:100, y:200});

	ground1 = new Ground(390,305,225,15);
	ground2 = new Ground(690,205,165,15);
  ground3 = new Ground(500,600,1000,15);

	box1 = new block(300,275,30,40);
	box2 = new block(330,275,30,40);
	box3 = new block(360,275,30,40);
	box4 = new block(390,275,30,40);
	box5 = new block(420,275,30,40);
	box6 = new block(450,275,30,40);
	box7 = new block(480,275,30,40);

	box8 = new block(330,235,30,40);
	box9 = new block(360,235,30,40);
	box10 = new block(390,235,30,40);
	box11 = new block(420,235,30,40);
	box12 = new block(450,235,30,40);
  
	box13 = new block(360,195,30,40);
	box14 = new block(390,195,30,40);
	box15 = new block(420,195,30,40);
  
	box16 = new block(390,155,30,40);

	box17 = new block(630,165,30,40);
	box18 = new block(660,165,30,40);
	box19 = new block(690,165,30,40);
	box20 = new block(720,165,30,40);
	box21 = new block(750,165,30,40);	

	box22 = new block(660,125,30,40);
	box23 = new block(690,125,30,40);
	box24 = new block(720,125,30,40);
	
	box25 = new block(690,85,30,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  //Engine.update(engine);

  noStroke();
  textSize(20)
  fill(0)
  text("Drag the hexagonal stone and release it, to launch it towards the blocks",100, 25)

  noStroke();
  textSize(20)
  fill(0)
  text("Press space to get a second chance to play",600, 500)

  drawSprites();
 
  ground1.display();
  ground2.display();
  ground3.display();
  hexagon.display();
  sling.display();

  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("yellow");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("pink");
  box13.display();
  box14.display();
  box15.display();

  fill("blue");
  box16.display();

  fill("green")
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill("blue")
  box22.display();
  box23.display();
  box24.display();
  
  fill("red")
  box25.display();

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
  if(keyCode === 32 && hexagon.body.speed < 1){
      sling.attach(hexagon.body);
      Matter.Body.setPosition(hexagon.body,{x:50,y:200});
  }
}
