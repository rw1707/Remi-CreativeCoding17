var mySound;
var loopMode = "sustain";
var yo = 50;

function preload(){
    
    mySound= loadSound("assets/sample.mp3");
    
}


function setup(){
    
    createCanvas(300,300);
    background(20);
    
    //loopMode = "restart";
    
    //mySound.playMode(loopMode);
    //mySound.loop(true);
    //mySound.play();
    
}


function draw(){
    
    fill(yo);
    rect(120,120,60,60);
    
}

function mouseClicked(){
    //mySound.loop(true);
    mySound.play();
}

function keyPressed( ){
    
    if(loopMode == "sustain"){
        loopMode = "restart";
        yo = 150;
    }
        
    else {
        loopMode = "sustain";
        yo = 50;
    }
    
    mySound.playMode(loopMode);
}