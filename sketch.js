const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Constraint = Matter.Constraint

var engine , world
function preload() {
  
//preload the images here
backGroundImg=loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 1000);
  engine = Engine.create()
  world = engine.world
  // create sprites here
 ground1= new Ground(2000,900,2000,10)
  hero1=new Hero(800,400,200)
  monster1=new Monster(1900,800,300)
  rope1=new Fly(hero1.hero,{x:900,y:10})
 box1= new Box(1200,450)
 box2= new Box(1200,450)
 box3= new Box(1200,450)
 box4= new Box(1200,450)
 box5= new Box(1200,450)
 box6= new Box(1200,450)
 box7= new Box(1200,450)
 box8= new Box(1200,450)
 box9= new Box(1200,450)
box10= new Box(1200,450)
 
 box11= new Box(1400,600)
 box12= new Box(1400,600)
 box13= new Box(1400,600)
 box14= new Box(1400,600)
 box15= new Box(1400,600)
 box16= new Box(1400,600)
 box17= new Box(1400,600)
 box18= new Box(1400,600)

}

function draw() {
  background(backGroundImg);
  Engine.update(engine)

  
  ground1.display();
  hero1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
  
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
monster1.display();

}


function mouseDragged(){
  Matter.Body.setPosition(hero1.hero,{x:mouseX,y:mouseY})
  }
  
  