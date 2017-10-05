function setup(){
    
    createCanvas(600,500);
    background(255);
}

function draw(){
    
    background(255);
    var rot1 = 4;
    var rot2 = 1;
    var rot3 = 3;
    
    push();
    translate(width*(1/3),height/2);
    
    rotate(rot1);
    rect(0,0,40,40);
    pop();
    
    push();
    translate(width/2,height/2);
    
    rotate(rot2);
    rect(0,0,40,40);
    pop();
    
    push();
    translate(width*(2/3),height/2);
    
    rotate(rot3);
    rect(0,0,40,40);
    pop();
    
    
}