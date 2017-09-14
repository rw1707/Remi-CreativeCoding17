void setup(){
  size(600,600);
  noStroke();
}

void draw(){
  
  background(200);
  
  if(mouseX > width/2){
    fill(255,49,49);
    rect(width/2,0,width/2,height);
  }
  
  if(mouseX == width*3/4){
    background(255,248,36);
  }
  
  if(mouseX < width/2 && mouseY < height*2/3){
    fill(58,129,240);
    rect(0,0,width/2,height*2/3);
  }
  
  if(mouseX < width/2 && mouseY > height*2/3 && mousePressed == true){
    fill(150,240,212);
    rect(0,height*2/3,width/2,height/3);
  }
  
}





/*
void draw(){
  
  background(200);
  
  if(mousePressed == true){
    fill(255,121,121);
    ellipse(mouseX,mouseY,100,100);
  }
  else {
    fill(121,218,255);
    ellipse(mouseX,mouseY,80,80);
  }
}


void mouseMoved(){
  ellipse(mouseX,mouseY,80,90);
}

void mousePressed(){
  
}
*/