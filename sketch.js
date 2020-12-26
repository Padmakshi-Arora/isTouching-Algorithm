var fixedRectangle;
var movingRectangle;

function setup() {
 createCanvas(800,400);

 fixedRectangle = createSprite(400, 200, 60, 40);
 fixedRectangle.shapeColor = "powderblue";
 fixedRectangle.debug=true;
 
 movingRectangle = createSprite(600, 300, 60,40);
 movingRectangle.shapeColor = "yellow";
 movingRectangle.debug=true;
}

function draw() {
  background(0);
  
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;

  if(movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2+movingRectangle.width/2
    &&movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2
    &&fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2+movingRectangle.height/2){
    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  }
  else{
    fixedRectangle.shapeColor = "powderblue";
    movingRectangle.shapeColor = "yellow";
  }

  drawSprites();
}