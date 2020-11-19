var car, wall;
var speed, weight;
var deform;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  console.log(speed);
  console.log(weight);

  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1200, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  
  car.velocityX = speed;

  deformation();

  drawSprites();
}

function deformation(){


  if(wall.x - car.x < (car.width+ wall.width )/2){
    car.velocityX = 0;

    deform = (0.5 * weight *speed * speed)/22500;
    console.log(deform);

    if(deform >180){
        car.shapeColor = color(255,0,0);
    }
    if(deform < 180 && deform > 100){
      car.shapeColor = color(230,230,0);
    }
    if(deform < 100 ){
      car.shapeColor = color(0,255,0);
    }

  }
}