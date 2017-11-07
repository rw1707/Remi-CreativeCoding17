var bass1;
var bass2;
var barC;
var barD;
var barE;
var barF;
var barG;
var barA;
var barB;
var barCC;
var bass;
var noteC;
var noteD;
var noteE;
var noteF;
var noteG;
var noteA;
var noteB;
var noteCC;
var but1;
var but2;
var but3;
var but4;
var but5;


function preload(){
    
    bubble = loadSound("assets/bubble.mp3");
    bass = loadSound("assets/drumbass.mp3");
    noteC = loadSound("assets/noteC.wav");
    noteD = loadSound("assets/noteD.wav");
    noteE = loadSound("assets/noteE.wav");
    noteF = loadSound("assets/noteF.wav");
    noteG = loadSound("assets/noteG.wav");
    noteA = loadSound("assets/noteA.wav");
    noteB = loadSound("assets/noteB.wav");
    noteCC = loadSound("assets/noteCC.wav");
    
    
}


function setup(){
    
    createCanvas(1000,600);
    
    bass1 = new Bass(200,325,20,4);
    bass2 = new Bass(780,325,20,4);
    
    barC = new Note(380,360,20,-80,65,color(134,121,255));
    barD = new Note(410,360,20,-80,83,color(121,130,255));
    barE = new Note(440,360,20,-80,68,color(121,152,255));
    barF = new Note(470,360,20,-80,70,color(121,215,255));
    barG = new Note(500,360,20,-80,71,color(121,238,255));
    barA = new Note(530,360,20,-80,72,color(121,255,242));
    barB = new Note(560,360,20,-80,74,color(121,255,193));
    barCC = new Note(590,360,20,-80,75,color(121,255,148));
    
    but1 = color(255,204,153);
    but2 = color(255,178,102);
    but3 = color(255,153,51);
    but4 = color(255,128,0);
    but5 = color(204,102,0);
    
}


function draw(){
    
    background(240);
    
    strokeWeight(6);
    
    // body
    fill(130);
    rect(110,200,770,250);
    strokeWeight(0);
    fill(160);
    rect(120,210,750,230);
    
    strokeWeight(6);
    // panel
    fill(30);
    rect(280,220,420,160);
    
    // handle
    rect(200,200,30,-100);
    rect(780,200,-30,-100);
    rect(200,100,580,25);
    
    // speaker
    fill(50);
    ellipse(200,325,100,100);
    ellipse(780,325,100,100);
    
    //buttons
    fill(but1);
    rect(350,395,40,40);
    fill(but2);
    rect(410,395,40,40);
    fill(but3);
    rect(470,395,40,40);
    fill(but4);
    rect(530,395,40,40);
    fill(but5);
    rect(590,395,40,40);
    
    bass1.animate();
    bass1.display();
    bass2.animate();
    bass2.display();
    
    barC.animate();
    barC.display();
    barD.animate();
    barD.display();
    barE.animate();
    barE.display();
    barF.animate();
    barF.display();
    barG.animate();
    barG.display();
    barA.animate();
    barA.display();
    barB.animate();
    barB.display();
    barCC.animate();
    barCC.display();
    
    
}


function keyPressed(){
    
    if(keyCode == 65){

        noteC.play();
        
    }
    
    if(keyCode == 83){

        noteD.play();
        
    }
    
    if(keyCode == 68){

        noteE.play();
        
    }
    
    if(keyCode == 70){

        noteF.play();
        
    }
    
    if(keyCode == 71){

        noteG.play();
        
    }
    
    if(keyCode == 72){

        noteA.play();
        
    }
    
    if(keyCode == 74){

        noteB.play();
        
    }
    
    if(keyCode == 75){

        noteCC.play();
        
    }
    
}


function mousePressed(){
    
    if(mouseX > 350 && mouseX < 390 && mouseY > 395 && mouseY < 435){
        
        bass1.change1();
        bass2.change1();

        but1 = color(255,229,204);
        but2 = color(255,178,102);
        but3 = color(255,153,51);
        but4 = color(255,128,0);
        but5 = color(204,102,0);
        
    }
    
    else if(mouseX > 410 && mouseX < 450 && mouseY > 395 && mouseY < 435){
        
        bass1.change2();
        bass2.change2();
        
        but1 = color(255,204,153);
        but2 = color(255,229,204);
        but3 = color(255,153,51);
        but4 = color(255,128,0);
        but5 = color(204,102,0);
        
    }
    
    else if(mouseX > 470 && mouseX < 510 && mouseY > 395 && mouseY < 435){
        
        bass1.change3();
        bass2.change3();
        
        but1 = color(255,204,153);
        but2 = color(255,178,102);
        but3 = color(255,229,204);
        but4 = color(255,128,0);
        but5 = color(204,102,0);
        
    }
    
    else if(mouseX > 530 && mouseX < 570 && mouseY > 395 && mouseY < 435){
        
        bass1.change4();
        bass2.change4();
        
        but1 = color(255,204,153);
        but2 = color(255,178,102);
        but3 = color(255,153,51);
        but4 = color(255,229,204);
        but5 = color(204,102,0);
        
    }
    
    else if(mouseX > 590 && mouseX < 630 && mouseY > 395 && mouseY < 435){
        
        bass1.change5();
        bass2.change5();
        
        but1 = color(255,204,153);
        but2 = color(255,178,102);
        but3 = color(255,153,51);
        but4 = color(255,128,0);
        but5 = color(255,229,204);
        
    }
}


function Bass(bX, bY, mySize, myVel){
    
    this.x = bX;
    this.y = bY;
    this.size = mySize;
    this.speed = myVel;
    
    this.display = function(){
        
        fill(100);
        ellipse(this.x, this.y, this.size, this.size);
        
    }
    
    this.animate = function(){
        
        this.size = this.size + this.speed;
        
        if(this.size > 80 || this.size < 20){
            this.speed *= -1;
        }
        
        if(this.size > 80){
            bass.play();
        }
        
        if(keyIsPressed && this.size < 79 && this.size > 21){
            //this.speed++;
        }
        
    }
    
    this.change1 = function(){
        
        this.speed = 2;
        
    }
    
    this.change2 = function(){
        
        this.speed = 3;
        
    }
    
    this.change3 = function(){
        
        this.speed = 4;
        
    }
    
    this.change4 = function(){
        
        this.speed = 5;
        
    }
    
    this.change5 = function(){
        
        this.speed = 6;
        
    }
    
}



function Note(nX,nY,widthN,lengthN,keynum,colorN){
    
    this.x = nX;
    this.y = nY;
    this.w = widthN;
    this.l = lengthN;
    this.k = keynum;
    this.c = colorN;
    
    this.display = function(){
        fill(this.c);
        strokeWeight(0);
        rect(this.x,this.y,this.w,this.l);
        
    }
    
    this.animate = function(){

        if(keyIsDown(this.k) && this.l > -130){
            this.l = this.l - 2;
        }
        
        else{
            if(this.l < -80){
                this.l = this.l + 3;
            }
        }
    }
    
}
