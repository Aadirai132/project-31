const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,world;
var divisions = [];
var particles = [];
var plinkos = [];
var divisionHeight = 300;

function setup() 
{
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(200,800,650,20);

}

function draw() 
{
  background(0);
  
  ground.display();

  if(frameCount%60===0)
  {
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  for(var j = 0;j < particles.length;j++)
  {
    particles[j].display();
  }

  for(var d = 0; d <=width;d= d+80)
  {
    divisions.push(new Divisions(d, height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=0;j<=divisions.length;j++)
  {
    divisions[j].display();
  }
  for(var p = 40;p < width;p = p+50)
  {
    plinkos.push(new Plinko(p,75));
  }
  for(var p = 15;p < width-10;p = p+50)
  {
    plinkos.push(new Plinko(p,175));
  }

  

  drawSprites();
}

