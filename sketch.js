var bullet,wall
var speed,weight,deformation,thickness

function setup() {
  createCanvas(800,400);

  thickness = Math.round(random(22,83))
  bullet = createSprite(400, 200, 50, 10);
  wall = createSprite(800,200,thickness,400)
  speed = Math.round(random(55,90))
  weight = Math.round(random(400,1500))

}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed

  damage = weight*speed*speed/thickness*thickness*thickness

  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2
    && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
  bullet.velocityX = 0
  if (damage > 10) {
    wall.shapeColor = color(255,0,0);
  }
  if (damage < 10) {
    wall.shapeColor = color(0,255,0)
  }
}

  drawSprites();
}