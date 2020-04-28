var head;
var hand1, hand2;
var leg1;
var body;

function setup() {
  createCanvas(400, 400);
  
  head = createSprite(200,150,50,50);
  
  body = createSprite(200,230,90,125);
  
  leg1 = createSprite(165,320,25,75);
  
  hand1 = createSprite(140,255,25,75);
  
  hand2 = createSprite(260,255,25,75);
}

function draw() {
  background(220);
  
  text("PRESS SPACEBAR TO REDUCE THE SIZE OF THE ROBOT",50,350);
  
  if(keyDown("space") && head.width > 30 && head.height > 30){
    head.width = head.width - 2;
    
    head.height = head.height - 2;
    
    body.width = body.width -3 ;
    
    body.height = body.height - 3;
    
    body.y = body.y - 2;
    
    leg1.height = leg1.height - 2;
    
    leg1.width = leg1.width - 1;
    
    leg1.x = leg1.x + 1;
    
    leg1.y = leg1.y - 3.5;
    
    hand1.width = hand1.width - 1;
    
    hand1.height = hand1.height - 1.15;
    
    hand1.x = hand1.x + 1.865;
    
    hand1.y = hand1.y - 1.865;
    
    hand2.width = hand2.width - 1;
    
    hand2.height = hand2.height - 1.15;
    
    hand2.x = hand2.x - 1.865;
    
    hand2.y = hand2.y - 1.865;
    
  }
  else  {

  }
  
  head.x = mouseX;
  hand1.x = mouseX;
  hand2.x = mouseX;
  leg1.x = mouseX;
  body.x = mouseX;
  
  
  
  
  console.log(leg1.height);
  
  drawSprites();
}