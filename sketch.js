var perro 



function setup() {
  createCanvas(400,400);
  perro = createSprite (200,200,20,20)
}

function draw() 
{
  background(30);

  if (keyDown("right")) {
    perro.x = perro.x+3
    }
  if (keyDown("left")) {
    perro.x = perro.x-3
    }
  if (keyDown("up")) {
    perro.y = perro.y-3
    }
  if (keyDown("down")) {
    perro.y = perro.y+3
    }
  drawSprites(); 
}




