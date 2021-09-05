const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
var backgroundImg, backgroundSprite;
var engine,world;

function preload(){
  backgroundImg = loadImage("snow1.jpg")

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  //backgroundSprite = createSprite(200,200);
 // backgroundSprite.addAnimation("backgroundImg", backgroundImg);

  snow1 = new Snow(200,25,50,50)
  snow2 = new Snow(300,50,50,50)
  snow3 = new Snow(350,13,50,50)
  snow4 = new Snow(258,33,50,50)
  snow5 = new Snow(364,45,50,50)
  snow6 = new Snow(678,19,50,50)
  snow7 = new Snow(437,40,50,50)
  snow8 = new Snow(320,20,50,50)
  snow9 = new Snow(758,38,50,50)
  snow10 = new Snow(427,28,50,50)
  snow11 = new Snow(568,58,50,50)
  snow12 = new Snow(423,27,50,50)
  snow13 = new Snow(697,22,50,50)
  snow14 = new Snow(456,12,50,50)
  snow15 = new Snow(345,36,50,50)

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();

  drawSprites();

}