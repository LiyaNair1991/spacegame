const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var earth,earth_animation;
function preload()
{
   bg=loadImage("universe.jpg");
  
   //created oone image
   gif_createImg = createImg("earth.gif");

}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    gif_createImg.position(250, 50);
    
   
}

function draw(){
    background(bg);
    Engine.update(engine);
    drawSprites();
}