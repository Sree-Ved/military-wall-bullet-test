var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(100, 200, 50, 20);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, 0, 200);
  wall.shapeColor = rgb(80,80,80);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;
 
}

function draw() {
  wall.width = thickness;
  background("orange");
  if(hasCollided(bullet,wall)){
    
     var damage;
     damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage<10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();

}

function hasCollided(object1,object2){
  var object1re = object1.x + (object1.width/2);
  var object2le = object2.x - (object2.width/2);
  if(object1re>object2le){
    object1.velocityX =0;
    object1.x = object2le-25;
    return true;
    }
  else{
    return false;
}}
