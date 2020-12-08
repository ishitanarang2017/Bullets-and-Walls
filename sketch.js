var bullet , wall;
var speed, thickness,weight;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500,200,60,height/2);
  bullet =createSprite(50, 200, 50, 50);
  bullet.shapeColor = "gold";
  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);
  bullet.velocityX = speed;
  wall.width = thickness;
}

function draw() {
  background(0);  
 if (wall.x - bullet.x < bullet.width/2 + wall.width/2);
{
  bullet.velocityX =0;
  var deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  console.log(deformation);
  if (deformation>=10);
  {
    wall.shapeColor = "red";
  }
  
  if(deformation<10);
  {
    wall.shapeColor = "green";
  }
  }
  
    drawSprites();
  }