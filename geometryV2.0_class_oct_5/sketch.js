var y = 100;

function setup(){
    createCanvas(600,600);
    background(200);
    noFill();
}

function draw(){
    
    background(200);
    
    var mappedRot = map(mouseX,0,width,0,2*PI);
    
    push();
    translate(width/2,height/2);
    ellipse(0,0,80,80);
    pop();
    
    // Spinning triangles 
    push();
    translate(width/2,height/2);
    rotate(mappedRot);
    triangle(40,-40,40,40,y,0);
    triangle(-40,-40,40,-40,0,-y);
    triangle(-40,-40,-40,40,-y,0);
    triangle(-40,40,40,40,0,y);
    pop();
    

    /* What we did in class
    for(var i = 0; i < 6; i++){
        
        push();
        translate(300,300);
        rotate(i);
        triangle(40,-40,40,40,y,0);
        pop();
        
    }
    */
        
}

function keyPressed(){
    
    if(keyCode == UP_ARROW){
        y += 10;
    }
    
    if(keyCode == DOWN_ARROW){
        y -= 10;
    }
}