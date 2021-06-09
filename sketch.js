const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;
var  boy,tree;
function preload(){
    boy= loadImage("boy.png");
    tree = loadImage("tree.png");
}
function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(700,1000,1500,40);
    stone = new Stone(150,800,20);
    mango = new Mango(700,340,40);
    mango1 = new Mango(600,400,40);
    mango2 = new Mango(600,480,40)
    mango3 = new Mango(800,450,40);
    mango4 = new Mango(850,500,40)
    mango5 = new Mango(790,520,40);
    mango6 = new Mango(750,530,40)
    mango7 = new Mango(900,500,40);
    mango8 = new Mango(700,400,40)
    mango9 = new Mango(850,450,40);
    mango10 = new Mango(700,540,40)
    mango11 = new Mango(700,500,40)
    slingshot = new Slingshot(stone.body,{x:150, y:600});
}

function draw(){
    background(0);
    Engine.update(engine);
    imageMode(CENTER);
    image(boy,200,900,150,300);
    image(tree,750,600,450,700);
   ground.display();
   stone.display();
   mango.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   mango11.display();
   collide(stone,mango);
   collide(stone,mango1);
   collide(stone,mango2);
   collide(stone,mango3);
   collide(stone,mango4);
   collide(stone,mango5);
   collide(stone,mango6);
   collide(stone,mango7);
   collide(stone,mango8);
   collide(stone,mango9);
   collide(stone,mango10);
   collide(stone,mango11);
    
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function collide(s,m){
    var mposition = m.body.position; 
    var sposition = s.body.position;
    var distance = dist(sposition.x , sposition.y , mposition.x , mposition.y);
    if(distance <= m.radius+s.radius){
        Matter.Body.setStatic(m.body,false)
    }
}