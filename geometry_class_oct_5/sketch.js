var y = 100;

function setup(){
    createCanvas(600,600);
    background(200);
    noFill();
}

function draw(){
    
    var mappedRot = (mouseX,0,width,0,2*PI);
    
    push();
    translate(width/2,height/2);
    rotate(mappedRot);
    ellipse(0,0,80,80);
    pop();
    
    for(var i = 0; i < 6; i++){
        
        push();
        translate(300,300);
        rotate(i*45);
        triangle(40,-40,40,40,y,0);
        pop();
        
    }
    
    
}

function keyPressed(){
    
    if(keyCode == UP_ARROW){
        y += 10;
    }
    
}