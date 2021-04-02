const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world

var ground

var ball



function setup() {

  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world

  var options= {


    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,options)
  World.add(world,ground)
console.log(ground)
console.log(ground.position.x)
console.log(ground.position.y)



var options={

  restitution:1.2
}

ball = Bodies.circle(200,250,30,options)
World.add(world,ball)
console.log(ball)
  
}



function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
}