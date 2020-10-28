var movingrect, fixedrect;
var gameobject1, gameobject2;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite (25,40,80,30);
  gameobject1 = createSprite (300,50,80,40);
  gameobject2 = createSprite (70,100,80,50);
}

function draw() {
  background(255);  
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

if(isTouching(fixedrect,movingrect))
{
  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";
}
else 
{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}

  drawSprites();
}



