function setup(){
    
    createCanvas(600,500);
    background(255);
}

function draw(){
    
    background(255);
    //var rot2 = map(mouseX,0,width,0,PI);
    //var rot3 = map(mouseX,0,width,0,0.5*PI);
    
    for(var i = 1; i < 4; i++){
        
        var rot = i*4;
        
        push();
        translate(200,200);
        rotate(rot);
        rect(i*60,0,30,30);
        pop();
        
    }
    /*
    push();
    translate(width*(1/3),height/2);
    
    rotate(rot1);
    rect(0,0,40,40);
    pop();

    
    push();
    translate(width/2,height/2);
    
    rotate(rot1);
    rect(0,0,40,40);
    pop();
    
    
    push();
    translate(width*(2/3),height/2);
    
    rotate(rot1);
    rect(0,0,40,40);
    pop();
    */
    
}