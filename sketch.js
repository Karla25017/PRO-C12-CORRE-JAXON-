var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg=loadImage("path.png")
  //loadAnimation de boy (niño)
 boyImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png")
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path=createSprite(200,150,20,20);
//agregar imagen de path
path.addImage(pathImg)
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;

//crear sprite de boy (niño)
boy=createSprite(200,100,20,20);
//agregar animación para boy
boy.addAnimation("Jakerunner", boyImg);
boy.scale=0.5;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible=true;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite derecho
rightBoundary.visible=true;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  if(keyDown("space"))
  {
     boy.velocityX=2;
     boy.velocityY=3;
  }

  if (keyDown("left")) {
    boy.x=boy.x-3;
   }
   if (keyDown("right")) {
    boy.x=boy.x+3;
   }
   if (keyDown("up")) {
    boy.y=boy.y-3;
  }
  if (keyDown("DOWN")) {
    boy.y=boy.y+3;
  }
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
