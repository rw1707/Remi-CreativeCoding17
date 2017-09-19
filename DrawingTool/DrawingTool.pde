// Brush
void mouseDragged(){
  ellipse(mouseX,mouseY,20,20);
  if(mouseY>650){
    noFill();
  }
}

void setup(){
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
}

void draw(){
  
  //background(255);
  
  // Press any key to refresh
  if(keyPressed == true){
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
  }
  
  // Choose Colors
  if(mouseX <= 525 && mouseX >= 475 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(255,250,82);
  }
  
  if(mouseX <= 450 && mouseX >= 400 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(187,88,255);
  }
  
  if(mouseX <= 375 && mouseX >= 325 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(0,0,255);
  }
  
  else if(mouseX <= 300 && mouseX >= 250 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(0,255,0);
  }
  
  else if(mouseX <= 225 && mouseX >= 175 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(255,0,0);
  }
  
  else if(mouseX <= 150 && mouseX >= 100 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(255,255,255);
  }
  
  else if(mouseX <= 75 && mouseX >= 25 && mouseY <= 725 && mouseY >= 675 && mousePressed == true){
    fill(0,0,0);
  }
  
  //ellipse(mouseX,mouseY,30,30);
  
}

/*
void keyPressed(){
  background(255);
}
*/