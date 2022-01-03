
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var wall1, wall2, wall3, wall4;
var ghost1;
var jack;

function preload() {
//jackImg=loadAnimation("animations/jack4.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  // ground =new Wall(width/2,390,width,20);
  // right = new Wall(width/2-10,height/2,20,400);
  // left = new Wall(10,200,20,400);
  // top_wall = new Wall(200,10,400,20);
  ground = new Wall(0, 2780, 2780 * 2, 20);
  right = new Wall(10, 2780, 20, 2780 * 2);
  left = new Wall(2780, 2780, 20, 2780 * 2);
  top_wall = new Wall(0, 20, 2780 * 2, 20);
  line1 = new Wall(200, 200, 380, 50);
  ghost1 = new Ghost(50, 200, 30, 30, 0);
  jack = createSprite(30, height / 2, 30, 30);

}

function draw() {
  background(51);
  ground.display();
  right.display();
  left.display();
  top_wall.display();
  ghost1.display();
  ghost1.moving();
 // jack.addAnimation(jackImg);
  drawSprites();
}

function movingJack() {
  if (keyDown(RIGHT_ARROW)) {
    jack.movingRight
  }
}

