var curState;
var endState;
var leg1y = 135;
var leg2y = 135;
var wing1 = 100;
var wing2 = 100;
var xPos = 150;
var yPos = 550 - 135;
var ground = 550 - 135;
var speed = 3;
var jump = 5;
var c = 1000;
var r;
var g;
var b;
var curImage;
var eye1X = -40; 
var eye1Y = 0;  
var eye2X = 40; 
var eye2Y = 0;  
var beak1 = 50;
var beak2 = 50;
var eatX;
var eatY;
var eat2X;
var eat2Y;
var eat3X;
var eat3Y;
var eat4X;
var eat4Y;
var fade = 1000;
var fade2 = 1000;
var fade3 = 1000;
var fade4 = 1000;
var score = 0;
var timeSnap;


function preload(){
    
    chick1 = loadImage("chick.png");
    chick2 = loadImage("chick2.png");
    chick3 = loadImage("chick3.png");
    chick4 = loadImage("chick4.png");
    chick5 = loadImage("chick5.png");
}

function setup(){
    
    createCanvas(1000,600);
    strokeWeight(3);
    
    curState = 0;
    curImage = 0;
    
    //endState = 0;
    
    timeSnap = 0;
    
    
    eatX = random(0,width);
    eat2X = random(0,width);
    eat3X = random(0,width);
    eat4X = random(0,width);
    
    eatY = random(0,ground);
    eat2Y = random(0,ground);
    eat3Y = random(0,ground);
    eat4Y = random(0,ground);
    
}

function draw(){
    
    strokeWeight(3);
    
    // Starting Screen
    if(curState == 0){
        
        background(230,75,90);
        
        stroke(255);
        textSize(40);
        text("HUNGRY LITTLE CHUCK", width*(2/7) - 8, height*(6/9));
        
        strokeWeight(0);
        fill(255);
        textSize(25);
        text("Press [ENTER] / [RETURN] To Continue", width*(3/10) - 12, height*(7/9));
        
        fill(255);
        stroke(50);
        strokeWeight(10);
        ellipse(width/2,height*(1/3),250,250);
        
        if(frameCount%20 == 0){
            if(curImage < 2){
                curImage++;
            }
            else {
                curImage = 0;
            }
        }
        
        if(curImage==0){
            image(chick1,width*(2/5),100,200,200);
        }
        
        else if(curImage==1){
            image(chick2,width*(2/5),100,200,200);
        }
        
        else if(curImage==2){
            image(chick3,width*(2/5),100,200,200);
        }
        
    }
    
    stroke(0);
    strokeWeight(0);
    
    // Instructions Screen
    if(curState == 1){
        
        fill(145);
        rect(0,0,width,height);
        
        fill(110);
        rect(width*(1/7),220,600,200);
        
        fill(50);
        rect(475,335,80,15);
        triangle(555,320,555,370,577,343);
        
        stroke(255,204,100);
        strokeWeight(10);
        fill(246,85,85);
        ellipse((width/2)+110,350,35,35);
        
        
        strokeWeight(0);
        fill(255);
        text("Little Chuck is hungry, find some food to feed him!",width*(1/7),150);
        text("You have 30 seconds to feed Little Chuck before he faints!", width*(1/7), 200);
        text("Controls:", width*(1/7)+10,250);
        text("[ARROW KEYS] to walk and fly", width*(1/7)+10,300);
        text("[SPACEBAR] to collect food", width*(1/7)+10, 350);
        fill(255,248,138);
        text("Press [ENTER] / [RETURN] To Continue", width*(1/7),500);
        
    }
    
    // Game Screen
    if(curState == 2){

        
        background(186,234,246);


        var mappedRot1 = map(second(),350,450,0.5*PI,1.5*PI);
        var mappedRot2 = map(millis(),0,width,0.5*PI,1.5*PI);
        var mappedRot3 = map(mouseX,0,width,0,2*PI);


        //Rotating Background
        push();
        translate(width/2,height+40);
        //rotate(millis()/3000);
        for(var x = 0; x < 20; x++){
            noStroke();
            fill(70,(255 - x*17),(255 - x*15));
            rect(-750,(x*80)-800,1500,80);
        }
        line(0,0,60,0);
        pop();
        
        // trees
        for(var leaf = 0; leaf < 30; leaf++){
            strokeWeight(2);
            fill(216,184,95);
            rect((leaf*60)+5,430,30,150);
            fill(73,125,58);
            ellipse((leaf*40)+20,400,30,30);
            ellipse((leaf*40)+5,420,40,40);
            ellipse((leaf*40)+35,420,40,40);
            ellipse((leaf*40)+10,440,40,40);
            ellipse((leaf*40)+25,440,40,40);
            
        }
        
        //background
        fill(255,255,255,100);
        strokeWeight(0);
        rect(0,0,width,550);
        
        
        //ground
        fill(157,198,145);
        rect(0,550,width,50);
        
        strokeWeight(3);

        /* Clock
        push();
        translate(730,70);
        fill(255);
        ellipse(0,0,80,80);
        rotate(mappedRot1);
        line(0,0,0,-30);
        pop();

        push();
        translate(730,70);
        rotate(mappedRot2);
        line(0,0,0,-30);
        pop();*/

        // Cursor Star
        fill(228,175,255);
        quad(mouseX+10,mouseY,mouseX,mouseY+20,mouseX-10,mouseY,mouseX,mouseY-20);

        
        push();
        translate(xPos,yPos);
        
        // Wings
        fill(255);
        triangle(0,10,-50,wing1,0,wing1);
        triangle(0,10,50,wing2,0,wing2);
        
        // Feet
        fill(255);
        line(-5,120,-5,leg1y);
        line(5,120,5,leg2y);
        line(-15,leg1y,-5,leg1y);
        line(15,leg2y,5,leg2y);
        
        // Body
        ellipse(0,75,45,100);
        
        // Face

        fill(255);
        ellipse(0,0,150,150);

        fill(255,50,50);
        quad(0,-90,15,-75,0,-50,-15,-75);

        
        // Eyes

        fill(255);
        ellipse(-40,0,60,60);
        ellipse(40,0,60,60);
        fill(0);
        ellipse(eye1X,eye1Y,30,30);
        ellipse(eye2X,eye2Y,30,30);
        
        
        // Beak
        fill(255,255,0);
        triangle(0,20,20,beak1,-20,beak2);


        pop();
        
        // Movement mechanics
        movement();
        
        
        strokeWeight(0);
        
        // Food
        
        /*
        eatX = 600;
        eatY = 100;
        eat2X = 300;
        eat2Y = 150;
        eat3X = 720;
        eat3Y = 450;
        eat4X = 900;
        eat4Y = 280;
        */

        var dx = dist(eatX,eatY,xPos,yPos);
        var dd = dist(eat2X,eat2Y,xPos,yPos);
        var dg = dist(eat3X,eat3Y,xPos,yPos);
        var db = dist(eat4X,eat4Y,xPos,yPos);
        
        // Score
        fill(100);
        text("Food: " + score,30,70);
        
        //text(dx,30,30);
        
        stroke(255,204,100,fade);
        strokeWeight(10);
        fill(246,85,85,fade);
        ellipse(eatX,eatY,35,35);
        
        stroke(255,204,100,fade2);
        fill(246,85,85,fade2);
        ellipse(eat2X,eat2Y,35,35);
        
        stroke(255,204,100,fade3);
        fill(246,85,85,fade3);
        ellipse(eat3X,eat3Y,35,35);
        
        stroke(255,204,100,fade4);
        fill(246,85,85,fade4);
        ellipse(eat4X,eat4Y,35,35);
        
        
        // Timer
        
        var timeDiff = second() - timeSnap;
        fill(100);
        strokeWeight(5);
        text(timeDiff,30,45);      
        
        
        // Animated Baby chick
        if(frameCount%20 == 0){
            if(curImage < 2){
                curImage++;
            }
            else {
                curImage = 0;
            }
        }
        
        if(curImage==0){
            image(chick1,-10,450,130,130);
        }
        
        else if(curImage==1){
            image(chick2,-10,450,130,130);
        }
        
        else if(curImage==2){
            image(chick3,-10,450,130,130);
        }
        
        strokeWeight(0);
        
        //win
        if(score >= 4){
            timeSnap = second();
            fill(255,255,255,180);
            rect(0,0,width,height);
            fill(50);
            textStyle(BOLD);
            textSize(25);
            text("Good Job! Little Chuck is healthy and happy!", width*(3/11)-30,height*(1/4));
            image(chick4,width*(2/6)+10,200,300,300);
            textSize(15);
            text("Press [BACKSPACE] / [DELETE] To Return To Home Screen  OR  Refresh Page To Start Over", width*(2/11),580);
        
        }  
        
        //lose
        if(timeDiff >= 30){
            timeSnap = -30;
            fill(255,255,255,180);
            rect(0,0,width,height);
            fill(50);
            textStyle(BOLD);
            textSize(25);
            text("Game Over! Litte Chuck has fainted!", width*(3/9)-30,height*(1/4));
            image(chick5,width*(2/6)+10,200,300,300);
            textSize(15);
            text("Press [BACKSPACE] / [DELETE] To Return To Home Screen  OR  Refresh Page To Start Over", width*(2/11),580);
            
        } 
        
    }
    
}



function keyPressed(){
    
    var dx = dist(eatX,eatY,xPos,yPos);
    var dd = dist(eat2X,eat2Y,xPos,yPos);
    var dg = dist(eat3X,eat3Y,xPos,yPos);
    var db = dist(eat4X,eat4Y,xPos,yPos);
    
    if(key == ' '){
        
        beak1 = 37;
        beak2 = 37;
        
        if(dx < 40){
            fade = 0;
            score++;

        }
        if(dd < 40){
            fade2 = 0;
            score++;

        }
        if(dg < 40){
            fade3 = 0;
            score++;

        }
        if(db < 40){
            fade4 = 0;
            score++;

        }
    }
    
    if(keyCode == ENTER){
        if(curState < 2){

            curState++;
            timeSnap = second();

        }
    }
    
    if(keyCode == BACKSPACE){
        curState = 0;
    }
        
}

function keyReleased(){
    
    if(key == ' '){
        beak1 = 50;
        beak2 = 50;
        
    }
    
}

function movement(){
    
    if(keyIsDown(RIGHT_ARROW)){
        xPos = xPos + speed;
        leg1y = random(125,135);
        leg2y = random(125,135);
        eye1X = -25;
        eye2X = 55;
    }
    
    else if(keyIsDown(LEFT_ARROW)){
        xPos = xPos - speed;
        leg1y = random(125,135);
        leg2y = random(125,135);
        eye1X = -55;
        eye2X = 25;
    }
        
    else{
        leg1y = 135;
        leg2y = 135;
        eye1X = -40;
        eye2X = 40;
    }
       
    if(yPos < ground){
        yPos += 2;
    }
    
    else if(yPos < 300){
        jump = 0;
    }

    if(yPos < 0){
        jump = 0;
    }
    
    if(keyIsDown(DOWN_ARROW)){
        eye1Y = 15;
        eye2Y = 15;
    }

    else if(keyIsDown(UP_ARROW)){
        jump = 5;
        yPos -= jump;
        wing1 = random(85,100);
        wing2 = random(85,100);
        eye1Y = -15;
        eye2Y = -15;
    }
        
    else{
        wing1 = 100;
        wing2 = 100;
        eye1Y = 0;
        eye2Y = 0;
    }
        
    
}