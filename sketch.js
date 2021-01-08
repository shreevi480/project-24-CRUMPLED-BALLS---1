const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ball;
var ground;


function setup() {
    createCanvas(1250, 650);
    engine = Engine.create();
    world = engine.world;
    /*ball = new PAPER(100,200,20);
    ground = new GROUND(750,580,1500,20)
    dustbin1 = new DUSTBIN (400,,20,120)
    dustbin2 = new DUSTBIN (740, 657, 20, 120)
	dustbin3 = new DUSTBIN (400, 690, 100, 20)*/
	
	ball=new PAPER(200,450,26);
	ground=new GROUND(width/2,620,width,20);
	dustbin1=new DUSTBIN(1200,510,20,200);
	dustbin2=new DUSTBIN(1000,510,20,200);
	dustbin3=new DUSTBIN(1100,600,200,20);

    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
    
    Engine.update(engine);

    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    ball.display();

  drawSprites();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}
