function setup(){
    createCanvas(600,500);
    background(255);
    noStroke();
    
    console.log("Launched the screen!");
}


function draw(){
    background(255);
    
    if(mouseX < width/2 && mouseY < height*1/3 && mouseIsPressed){
        fill(70,220,200);
        rect(0,0,width/2,height*1/3);
    }
    
    if(mouseX < width/2 && mouseY > height*1/3){
        fill(230,0,0);
        rect(0,height*1/3,width/2,height*2/3);
    }
    
    if(mouseX > width/2){
        fill(50,100,210);
        rect(width/2,0,width/2,height);
    }
    
    if(mouseX == 500){
        fill(240,250,40);
        rect(0,0,width,height);
    }
}
