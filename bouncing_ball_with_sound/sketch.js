var x = 400;
var y = 120;
var xvel = 5;
var yvel = 5;
var bubble;

function preload(){

    bubble = loadSound("assets/bubble.mp3");
    
}


function setup(){
    createCanvas(700,700);
    
}


function draw(){
    
    background(225,253,255);
    
    strokeWeight(3);
    
    fill(76,156,247,200);
    rect(0,0,width,100);
    rect(0,0,100,height);
    rect(0,height-1,width,-100);
    rect(width-1,0,-100,height-1);
    
    
    x = x + xvel;
    y = y + yvel;
    
    if(x + 20 > width - 100 || x - 15 < 100){
        xvel = xvel * -1;
        bubble.play();
    }
    
    if(y + 20 > height - 100 || y - 15 < 100){
        yvel = yvel * -1;
        bubble.play();
    }
    
    strokeWeight(5);
    stroke(152,209,242,250);
    fill(245,245,245,100);
    ellipse(x,y,40,40);
    
}
