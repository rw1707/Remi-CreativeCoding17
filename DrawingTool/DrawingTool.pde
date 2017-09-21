int canvasW = width;
int canvasH = 650;

PImage canvas;

void setup(){
  canvas = createImage(canvasW, canvasH, ARGB);
  
  size(600,800);
  noStroke();
  background(255);
  fill(230);
  rect(0,650,600,200);
  fill(0,0,0);
  ellipse(50,700,50,50);
  fill(255,255,255);
  ellipse(125,700,50,50);
  fill(255,0,0);
  ellipse(200,700,50,50);
  fill(0,255,0);
  ellipse(275,700,50,50);
  fill(0,0,255);
  ellipse(350,700,50,50);
  fill(187,88,255);
  ellipse(425,700,50,50);
  fill(255,250,82);
  ellipse(500,700,50,50);
  
  fill(0);
  textSize(15);
  text("Press SPACE to refresh canvas",370,790);
  text("Press S to save your drawing",370,770);
}

void draw(){
  
  // Press SPACE to refresh
  if(keyPressed == true){
    if((key == ' ') || (key == ' ')){
    background(255);
    fill(230);
    rect(0,650,600,200);
    fill(0,0,0);
    ellipse(50,700,50,50);
    fill(255,255,255);
    ellipse(125,700,50,50);
    fill(255,0,0);
    ellipse(200,700,50,50);
    fill(0,255,0);
    ellipse(275,700,50,50);
    fill(0,0,255);
    ellipse(350,700,50,50);
    fill(187,88,255);
    ellipse(425,700,50,50);
    fill(255,250,82);
    ellipse(500,700,50,50);
    fill(0);
    textSize(15);
    text("Press SPACE to refresh canvas",370,790);
    text("Press S to save your drawing",370,770);
    }
  }
 
  
  // Choose Colors
  
  // Yellow
  if(mouseX <= 525 && mouseX >= 475 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(0,0,0);
    ellipse(50,700,50,50);
    fill(255,255,255);
    ellipse(125,700,50,50);
    fill(255,0,0);
    ellipse(200,700,50,50);
    fill(0,255,0);
    ellipse(275,700,50,50);
    fill(0,0,255);
    ellipse(350,700,50,50);
    fill(187,88,255);
    ellipse(425,700,50,50);
    fill(253,255,173);
    ellipse(500,700,50,50);
    fill(255,250,82);
  }
  
  //Purple
  if(mouseX <= 450 && mouseX >= 400 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(0,0,0);
    ellipse(50,700,50,50);
    fill(255,255,255);
    ellipse(125,700,50,50);
    fill(255,0,0);
    ellipse(200,700,50,50);
    fill(0,255,0);
    ellipse(275,700,50,50);
    fill(0,0,255);
    ellipse(350,700,50,50);
    fill(230,162,255);
    ellipse(425,700,50,50);
    fill(255,250,82);
    ellipse(500,700,50,50);
    fill(187,88,255);
  }
  
  // Blue
  if(mouseX <= 375 && mouseX >= 325 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(0,0,0);
    ellipse(50,700,50,50);
    fill(255,255,255);
    ellipse(125,700,50,50);
    fill(255,0,0);
    ellipse(200,700,50,50);
    fill(0,255,0);
    ellipse(275,700,50,50);
    fill(112,141,252);
    ellipse(350,700,50,50);
    fill(187,88,255);
    ellipse(425,700,50,50);
    fill(255,250,82);
    ellipse(500,700,50,50);
    fill(0,0,255);
  }
  
  //Green
  else if(mouseX <= 300 && mouseX >= 250 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(0,0,0);
    ellipse(50,700,50,50);
    fill(255,255,255);
    ellipse(125,700,50,50);
    fill(255,0,0);
    ellipse(200,700,50,50);
    fill(176,255,131);
    ellipse(275,700,50,50);
    fill(0,0,255);
    ellipse(350,700,50,50);
    fill(187,88,255);
    ellipse(425,700,50,50);
    fill(255,250,82);
    ellipse(500,700,50,50);
    fill(0,255,0);
  }
  
  // Red
  else if(mouseX <= 225 && mouseX >= 175 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(0,0,0);
    ellipse(50,700,50,50);
    fill(255,255,255);
    ellipse(125,700,50,50);
    fill(250,121,125);
    ellipse(200,700,50,50);
    fill(0,255,0);
    ellipse(275,700,50,50);
    fill(0,0,255);
    ellipse(350,700,50,50);
    fill(187,88,255);
    ellipse(425,700,50,50);
    fill(255,250,82);
    ellipse(500,700,50,50);
    fill(255,0,0);
  }
  
  // White
  else if(mouseX <= 150 && mouseX >= 100 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(0,0,0);
    ellipse(50,700,50,50);
    fill(245);
    ellipse(125,700,50,50);
    fill(255,0,0);
    ellipse(200,700,50,50);
    fill(0,255,0);
    ellipse(275,700,50,50);
    fill(0,0,255);
    ellipse(350,700,50,50);
    fill(187,88,255);
    ellipse(425,700,50,50);
    fill(255,250,82);
    ellipse(500,700,50,50);
    fill(255,255,255);
  }
  
  // Black
  else if(mouseX <= 75 && mouseX >= 25 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(90);
    ellipse(50,700,50,50);
    fill(255,255,255);
    ellipse(125,700,50,50);
    fill(255,0,0);
    ellipse(200,700,50,50);
    fill(0,255,0);
    ellipse(275,700,50,50);
    fill(0,0,255);
    ellipse(350,700,50,50);
    fill(187,88,255);
    ellipse(425,700,50,50);
    fill(255,250,82);
    ellipse(500,700,50,50);
    fill(0,0,0);
  }
  
}

// Brush
void mouseDragged(){  

  ellipse(mouseX,mouseY,20,20);
  if(mouseY>650){
    noFill();
  }
}

void keyPressed(){
  
  if((key == 's') || (key == 'S')){
    canvas = get(0,0,width,650);
    canvas.save("drawing.jpg");
  }
}

/*
void keyPressed(){
  background(255);
}
*/