const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var binL,binB,binR,bin;
var ballImg,binImg;

function preload() {
	binImg=loadImage("dustbinImg.png")
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Base(400, 390, 800, 10);
	ball = new Ball(100, 350, 50);

	binL = new BinSides(535, 300, 5, 165);
	binL.visible = false;
	binB = new BinSides(600, 380, 128, 7);
	binB.visible = false;
	binR = new BinSides(665, 300, 5, 165);
	binR.visible = false;
	bin = createSprite(600, 302, 20, 20);
	bin.addImage(binImg);
	bin.scale = 0.5;

}


function draw() {
	rectMode(CENTER);
	background(222);
	
    Engine.update(engine);
	
	ground.display();
	binL.display();
	binB.display();
	binR.display();
	ball.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Body.applyForce(ball.body, ball.body.position,{x:90,y:-100})

	}
}