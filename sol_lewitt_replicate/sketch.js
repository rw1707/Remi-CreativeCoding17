function setup(){
    createCanvas(1000,510);
    background(255,238,77);
    stroke(240,20,20);
    strokeWeight(3);
}

function draw(){
    
    stroke(240,20,20);
    for(j = 15 ; j < height; j += 15){
        line(0,j,width,j);
    }
    
    fill(255,238,77);
    rect(width/2 - 210,45,420,420);
    
    for(i = width/2 - 210; i <= width/2 + 210; i += 15){
        stroke(4,63,139);
        line(i,45,i,465);
    }
    
}