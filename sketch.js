var bg, backgroundImage;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10,
 wall11, wall12, wall13, wall14, wall15, wal16, wall17, wall18, wall19, wall20,
 wall21, wall22;



var coords;



function preload(){

  backgroundImage = loadImage("sprites/background2.jpg");
  backgroundImage.scale = (7)



}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //bg = createSprite(0, 0, 1200, 400)
  //bg.addImage(bgImage)
  //bg.scale = 1;
  //createSprite(400, 200, 50, 50);
  wall1 = createSprite(212, 700, 275, 10)
  wall1.shapeColor = "white";

  wall2 = createSprite(150, 600, 150, 10)
  wall2.shapeColor = "white";

  wall3 = createSprite(230, 530, 10, 150)
  wall3.shapeColor = "white";

  wall4 = createSprite(352, 577.5, 10, 255)
  wall4.shapeColor = "white";

  wall5 = createSprite(352, 372.5, 10, 155)
  wall5.shapeColor = "white";

  wall6 = createSprite(230, 277, 10, 360)
  wall6.shapeColor = "white";

  wall7 = createSprite(352, 250, 10, 90)
  wall7.shapeColor = "white";

  wall8 = createSprite(447, 210, 200, 10)
  wall8.shapeColor = "white";

  wall9 = createSprite(335, 97.5, 220, 10)
  wall9.shapeColor = "white";

  wall10 = createSprite(885, 210, 680, 10) //right to the sun
  wall10.shapeColor = "white";
  
  wall11 = createSprite(1220, 380, 10, 335)
  wall11.shapeColor = "white";
  
  wall12 = createSprite(895, 97.5, 900, 10)
  wall12.shapeColor = "white";
  
  wall13 = createSprite(1350, 377, 10, 570)
  wall13.shapeColor = "white";

  wall14 = createSprite(1090, 550, 270, 10)
  wall14.shapeColor = "white";

  wall15 = createSprite(920, 657, 870, 10)
  wall15.shapeColor = "white";

  wall16 = createSprite(900, 550, 600, 10)
  wall16.shapeColor = "white";

  wall17 = createSprite(605, 500, 10, 100)
  wall17.shapeColor = "white";

  wall18 = createSprite(490, 505, 10, 300)
  wall18.shapeColor = "white";

  wall19 = createSprite(585, 350, 200, 10)
  wall19.shapeColor = "white";

  wall20 = createSprite(710, 445, 220, 10)
  wall20.shapeColor = "white";

  wall21 = createSprite(819, 385, 10, 131)
  wall21.shapeColor = "white";

  wall22 = createSprite(680, 335, 10, 40)
  wall22.shapeColor = "white";

}

function draw() {
  background(backgroundImage);  
  

    
  drawSprites();

}