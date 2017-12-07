var buildArray = [];
var buildArray2 = [];
var buildArray3 = [];
var buildArray4 = [];
var treeArray = [];
var treeArray2 = [];
var treeArray3 = [];
var branchArray = [];
var branchArray2 = [];
var branchArray3 = [];
var xvel = 1;
var yvel = 0.6;
var xvel2 = 1;
var yvel2 = -0.6;
var xvel3 = -1;
var yvel3 = 0.6;
var yvel4 = 2;
var yvel5 = -0.5;

var xvelb = 0.5;
var yvelb = -0.3;

var xvelp = 0.1;
var yvelp = 0.06;
var xvelp2 = 0.1;
var yvelp2 = 0.06;
var xvelp3 = 0.1;
var yvelp3 = 0.06;

var xvelc = 0.05;
var xvelc2 = 0.05;



function setup(){
    
    canvas = createCanvas(800,800);
    
    canvas.position(250,0);
    
    noFill();
    strokeWeight(2);
    
    
    // clouds
    
    cloud1 = new clouds(50,700,70,70,100,700,90,90,150,700,55,55);
    cloud2 = new clouds(750,100,60,60,780,100,75,75,820,100,65,65);
    cloud3 = new clouds(10,650,50,50,40,650,60,60,70,650,55,55);


    
    // flats
    square1 = new side(400,400,400,640,200,520,200,280,65,170,230);
    square2 = new side(400,400,400,640,600,520,600,280,54,133,172);
    square3 = new side(400,400,200,280,400,160,600,280,95,170,230);
    
    block1 = new block(400,400,400,520,200,400,200,280, 400,400,400,400,200,280,200,280, 400,400,400,520,400,520,400,400);
    
    // buildings objects ( top side, left side, right side )
    build1 = new block(400,120,370,138,400,156,430,138, 370,138,400,156,400,196,370,178, 400,156,430,138,430,178,400,196);
    build2 = new block(350,130,320,148,350,166,380,148, 320,148,350,166,350,226,320,208, 350,166,380,148,380,208,350,226);
    
    // CITY BUILDINGS SIDE
    
    // building array
    for(var i = 0; i < 4; i++){
        
        buildArray[i] = new block((-i*50)+400,(i*10)+120,(-i*50)+370,(i*10)+138,(-i*50)+400,(i*10)+156,(-i*50)+430,(i*10)+138, (-i*50)+370,(i*10)+138,(-i*50)+400,(i*10)+156,(-i*50)+400,(i*30)+196,(-i*50)+370,(i*30)+178, (-i*50)+400,(i*10)+156,(-i*50)+430,(i*10)+138,(-i*50)+430,(i*30)+178,(-i*50)+400,(i*30)+196);
        
    }
    
    oneworld = new block(420,104,395,119,420,136,445,119, 395,119,420,136,420,268,390,250, 420,136,445,119,450,250,420,268);
    
    
    // building array 2 
    for(var j = 0; j < 4; j++){
        
        buildArray2[j] = new block((-j*50)+570,(j*20)+222,(-j*50)+540,(j*20)+240,(-j*50)+570,(j*20)+258,(-j*50)+600,(j*20)+240, (-j*50)+540,(j*20)+240,(-j*50)+570,(j*20)+258,(-j*50)+570,(j*30)+298,(-j*50)+540,(j*30)+280, (-j*50)+570,(j*20)+258,(-j*50)+600,(j*20)+240,(-j*50)+600,(j*30)+280,(-j*50)+570,(j*30)+298);
        
    }
    
    // building array 3
    for(var k = 0; k < 4; k++){
        
        buildArray3[k] = new block((-k*50)+510,(k*20)+186,(-k*50)+480,(k*20)+204,(-k*50)+510,(k*20)+222,(-k*50)+540,(k*20)+204, (-k*50)+480,(k*20)+204,(-k*50)+510,(k*20)+222,(-k*50)+510,(k*30)+262,(-k*50)+480,(k*30)+244, (-k*50)+510,(k*20)+222,(-k*50)+540,(k*20)+204,(-k*50)+540,(k*30)+244,(-k*50)+510,(k*30)+262);
        
    }
    
    // building array 4
    for(var l = 0; l < 4; l++){
        
        buildArray4[l] = new block((-l*50)+470,(l*20)+162,(-l*50)+440,(l*20)+180,(-l*50)+470,(l*20)+198,(-l*50)+500,(l*20)+180, (-l*50)+440,(l*20)+180,(-l*50)+470,(l*20)+198,(-l*50)+470,(l*30)+238,(-l*50)+440,(l*30)+220, (-l*50)+470,(l*20)+198,(-l*50)+500,(l*20)+180,(-l*50)+500,(l*30)+220,(-l*50)+470,(l*30)+238);
        
    }
    
    // cars
    cab1 = new car(220,280,20,15);
    cab2 = new car(255,300,20,15);
    cab3 = new car(560,250,20,15);
    cab4 = new car(590,308,20,15);
    cab5 = new car(375,610,20,15);
    
    
    
    // CENTRAL PARK SIDE
    
    // tree array
    for(var x = 0; x < 8; x++){
        
        branchArray[x] = new branch(205,(-x*30)+515,195,(-x*30)+521);
            
        treeArray[x] = new trees(180,(-x*30)+513,180,(-x*30)+529,190,(-x*30)+535,190,(-x*30)+519, 180,(-x*30)+513,190,(-x*30)+519,200,(-x*30)+513,190,(-x*30)+507, 190,(-x*30)+519,190,(-x*30)+535,200,(-x*30)+529,200,(-x*30)+513);
        
    }
    
    // tree array 2
    for(var y = 0; y < 7; y++){
        
        branchArray2[y] = new branch(220,(-y*30)+500,210,(-y*30)+506);
            
        treeArray2[y] = new trees(195,(-y*30)+496,195,(-y*30)+512,205,(-y*30)+518,205,(-y*30)+502, 195,(-y*30)+496,205,(-y*30)+502,215,(-y*30)+496,205,(-y*30)+490, 205,(-y*30)+504,205,(-y*30)+518,215,(-y*30)+512,215,(-y*30)+496);
        
    }
    
    // tree array 3
    for(var y = 0; y < 6; y++){
        
        branchArray3[y] = new branch(235,(-y*30)+485,225,(-y*30)+491);
            
        treeArray3[y] = new trees(210,(-y*30)+479,210,(-y*30)+495,220,(-y*30)+501,220,(-y*30)+485, 210,(-y*30)+479,220,(-y*30)+485,230,(-y*30)+479,220,(-y*30)+473, 220,(-y*30)+487,220,(-y*30)+501,230,(-y*30)+495,230,(-y*30)+479);
        
    }
    
    // the met
    met = new block(320,598,320,518,270,488,270,568, 270,488,320,518,350,500,300,470, 320,518,320,598,350,580,350,500, 192,187,139);
    
    // people
    human1 = new people(255,355,10,13);
    human2 = new people(295,405,10,13);
    human3 = new people(270,500,10,13);
    
    
    
    // WATER SIDE
    
    // statue
    base = new block(450,462,450,512,485,491,485,441, 485,441,450,462,430,450,465,429, 450,462,450,512,430,500,430,450, 208,189,144);
    
    body = new block(510,500,525,491,525,511,510,520, 510,500,525,491,475,461,460,470, 510,500,510,520,460,490,460,470, 155,255,222);
    
    arm = new block(545,503,550,500,550,508,545,511, 545,503,550,500,520,482,515,485, 545,503,545,511,515,493,515,485, 155,255,222);
    
    // bridge
    pillar1 = new block(590,392,610,380,610,405,590,417, 590,392,610,382,540,338,520,350, 590,392,590,417,520,375,520,350, 122,108,75);
    
    pillar2 = new block(650,356,670,344,670,369,650,381, 650,356,670,344,600,302,580,314, 650,356,650,381,580,339,580,314, 122,108,75);
    
    pillar3 = new block(590,563,610,551,610,576,590,588, 590,563,610,551,540,509,520,521, 590,563,590,588,520,546,520,521, 122,108,75);
    
    pillar4 = new block(650,527,670,515,670,540,650,552, 650,527,670,515,600,473,580,485, 650,527,650,552,580,510,580,485, 122,108,75);
    
    bridge = new block(570,310,610,286,610,528,570,552, 570,310,610,286,600,280,560,304, 570,310,570,552,560,546,560,304);
    
    // boats
    
    boat1 = new boat(420,540,435,531,435,546,420,555);
    
}


function draw(){
    
    var from = color(189,233,249);
    var to = color(37,53,78);
    var c = map(mouseX,0,width,0,1);
    var intC = lerpColor(from,to,c);
    background(intC);
    
    //console.log(frameCount/10);
    
    fill(50);
    quad(400,400,400,640,200,520,200,280);
    quad(400,400,400,640,600,520,600,280);
    quad(400,400,200,280,400,160,600,280);
    
    quad(400,400,200,280,400,160,600,280);
    
    // traffic lines
    for(var g = 0; g < 10; g++){
        
        stroke(255);
        line((g*20)+210,(g*12)+274,(g*20)+220,(g*12)+280);
        
        stroke(0);
        
    }
    
    for(var g = 0; g < 9; g++){
        
        stroke(255);
        line((g*20)+265,(-g*12)+294,(g*20)+275,(-g*12)+288);
        
        stroke(0);
        
    }
    
    for(var g = 0; g < 9; g++){
        
        stroke(255);
        line((g*20)+375,(-g*12)+360,(g*20)+385,(-g*12)+354);
        
        stroke(0);
        
    }
    
    
    cab1.display();
    cab1.animate();
    
    cab2.display2();
    cab2.animate2();
    
    cab3.display3();
    cab3.animate3();
    
    //square2.display();
    //square2.animate2();
    
    for(var i = 0; i < buildArray.length; i++){
        buildArray[i].display();
    }
    
    // park
    var from4 = color(98,189,75);
    var to4 = color(67,127,46);
    var h = map(mouseX,0,width,0,1);
    var intH = lerpColor(from4,to4,h);
    fill(intH);
    quad(400,400,400,640,200,520,200,280);
    
    for(var l = 0; l < 1; l++){
        buildArray4[l].display();
    }
    
    oneworld.displayS();
    
    for(var l = 2; l < buildArray4.length; l++){
        buildArray4[l].display();
    }
    
    
    for(var x = 0; x < buildArray3.length; x++){
        buildArray3[x].display();
    }
    
    for(var j = 0; j < buildArray2.length; j++){
        buildArray2[j].display();
    }
    
    for(var x = 0; x < treeArray.length; x++){
        branchArray[x].display();
        treeArray[x].display();
    }
    
    for(var y = 0; y < treeArray2.length; y++){
        branchArray2[y].display();
        treeArray2[y].display();
    }
    
    for(var y = 1; y < treeArray3.length; y++){
        branchArray3[y].display();
        treeArray3[y].display();
    }
    
    //quad(202,285,202,295,210,299.8,210,289.8);
    
    // sun and moon
    var from2 = color(255,223,92);
    var to2 = color(247,247,162);
    var d = map(mouseX,0,width,0,1);
    var intD = lerpColor(from2,to2,c);
    strokeWeight(0);
    fill(intD);
    ellipse(width,0,90,90);
    
    
    strokeWeight(0);
    var a = 0.0;
    var inc = TWO_PI/25.0;
    for (var i = 0; i < 25; i++) {
        fill(247,247,162);
        ellipse(280+sin(a)*40.0,(i*8)+350,30,30);
        a = a + inc;
    }
    strokeWeight(2);
    
    fill(50);
    quad(360,376,390,394,390,634,360,616);
    
    for(var g = 0; g < 12; g++){
        
        stroke(255);
        line(375,(g*20)+388,375,(g*20)+398);
        
        stroke(0);
        
    }
    
    cab5.display5();
    cab5.animate5();
    
    human1.display();
    human1.animate();
    human2.display();
    human2.animate2();
    human3.display();
    human3.animate3();
    
    met.displayA();
    
    var from2 = color(236,253,255);
    var to2 = color(252,224,41);
    var g1 = map(mouseX,0,width,0,1);
    var intG = lerpColor(from2,to2,g1);
    fill(intG);
    quad(310,578,310,528,280,508,280,558);
    
    for(var p = 0; p < 4; p++){
        
        line(350,(p*20)+510,320,(p*20)+528);
        
    }
    //quad(350,580,350,500,300,470,300,550);
    //quad(320,598,320,518,270,488,270,568);
    
    
    var from3 = color(143,196,226);
    var to3 = color(1,57,114);
    var s1 = map(mouseX,0,width,0,1);
    var intS = lerpColor(from3,to3,s1);
    fill(intS);
    quad(400,400,400,640,600,520,600,280);
    
    boat1.display();
    boat1.animate();
    
    base.displayA();
    
    arm.displayA();
    
    fill(255,255,0);
    ellipse(548,506,10,10);
    
    body.displayA();
    
    //quad(460,470,475,461,475,481,460,490);
    //quad(510,500,525,491,525,511,510,520);
    
    //quad(515,485,520,482,520,490,515,493);
    //quad(545,503,550,500,550,508,545,511);
    
    pillar2.displayA();
    
    pillar4.displayA();
    
    bridge.displayA();
    
    fill(50);
    quad(580,304,600,292,600,534,580,546);
    
    for(var g = 0; g < 12; g++){
        
        stroke(255);
        line(590,(g*20)+298,590,(g*20)+308);
        
        stroke(0);
        
    }
    
    cab4.display4();
    cab4.animate4();
    
    pillar1.displayA();
    
    pillar3.displayA();
    
    
    line(570,310,600,386);
    line(600,411,570,470);
    line(570,470,600,557);
    
    line(610,286,660,350);
    line(660,375,610,434);
    line(610,434,660,521);
    
    
    
    cloud1.display();
    cloud1.animate();
    
    cloud2.display();
    cloud2.animate2();
    
    cloud3.display();
    cloud3.animate();
    
    //quad(560,304,600,280,600,522,560,546);
    //quad(570,310,610,286,610,528,570,552);
    
    //quad(520,350,540,338,540,363,520,375);
    //quad(580,314,600,302,600,327,580,339);
    
    //quad(590,392,610,380,610,405,590,417);
    //quad(650,356,670,344,670,369,650,381);
    
    //quad(520,521,540,509,540,534,520,546);
    //quad(580,485,600,473,600,498,580,510);

    //quad(590,563,610,551,610,576,590,588);
    //quad(650,527,670,515,670,540,650,552);
    
    
}


function side(x1,y1,x2,y2,x3,y3,x4,y4,c1,c2,c3){

    this.display = function(){
        
        fill(c1,c2,c3);
        quad(x1,y1,x2,y2,x3,y3,x4,y4);
        
    }
    
    this.animate1 = function(){
        
        if(mouseIsPressed){
            
            x1--;
            x2--;
            x3--;
            x4--;
            
            y1++;
            y2++;
            y3++;
            y4++;
        }
        
        else if(x1 < 400 && y1 > 400){
            
            x1+=2;
            x2+=2;
            x3+=2;
            x4+=2;
            
            y1-=2;
            y2-=2;
            y3-=2;
            y4-=2;  
            
        }
        
    }
    
    this.animate2 = function(){
        
        if(mouseIsPressed){
            
            c1 = random(0,255);
            
            x1++;
            x2++;
            x3++;
            x4++;
        }
        
        else if(x1 > 400){
            
            x1-=2;
            x2-=2;
            x3-=2;
            x4-=2;
            
        }
        
    }
    
    this.animate3 = function(){
        
        if(mouseIsPressed){
            
            y1--;
            y2--;
            y3--;
            y4--;
        }
        
        else if(y1 < 400){
            
            y1+=2;
            y2+=2;
            y3+=2;
            y4+=2;
            
        }
        
    }
    
}


function block(x11,y11,x21,y21,x31,y31,x41,y41, x12,y12,x22,y22,x32,y32,x42,y42, x13,y13,x23,y23,x33,y33,x43,y43, c1,c2,c3){

    // for building arrays
    this.display = function(){
        
        var from1 = color(200,200,200);
        var to1 = color(70,70,70);
        var x = map(mouseX,0,width,0,1);
        var intX = lerpColor(from1,to1,x);
        fill(intX);
        quad(x11,y11,x21,y21,x31,y31,x41,y41);
        quad(x12,y12,x22,y22,x32,y32,x42,y42);
        quad(x13,y13,x23,y23,x33,y33,x43,y43);
        
        var from = color(236,253,255);
        var to = color(252,224,41);
        var c = map(mouseX,0,width,0,1);
        var intC = lerpColor(from,to,c);
        fill(intC);
        quad(x12+5,y12+10,x22-5,y22+4,x32-5,y32-20,x42+5,y42-15);
        quad(x13+5,y13+4,x23-5,y23+10,x33-5,y33-20,x43+5,y43-25);
        
    }
    
    this.displayA = function(){
        
        fill(c1,c2,c3);
        quad(x11,y11,x21,y21,x31,y31,x41,y41);
        quad(x12,y12,x22,y22,x32,y32,x42,y42);
        quad(x13,y13,x23,y23,x33,y33,x43,y43);
        
    }
    
    this.displayS = function(){
        
        fill(163,213,223);
        quad(x11,y11,x21,y21,x31,y31,x41,y41);
        quad(x12,y12,x22,y22,x32,y32,x42,y42);
        quad(x13,y13,x23,y23,x33,y33,x43,y43);
        
        fill(194,240,249);
        triangle(x42,y42,x22-14,y22-3,x32,y32);
        triangle(x43,y43,x23-12,y23+14,x33,y33);
        
        fill(60);
        ellipse(x11,y21,30,20);
        ellipse(x11,y21-5,30,20);
        
        strokeWeight(4);
        line(x11,y21-5,x11,y21-45);
        strokeWeight(2);
        
        fill(map(mouseX,0,width,60,255));
        ellipse(x11,y21-40,5,5);
        
        var from = color(60,60,60);
        var to = color(255,50,50);
        var c = map(mouseX,0,width,0,1);
        var intC = lerpColor(from,to,c);
        fill(intC);
        ellipse(x11,y21-30,5,5);
        
    }
    
    this.animate = function(){
        
        if(mouseIsPressed){
            
            x11--;
            x21--;
            x31--;
            x41--;
            
            //x12--;
            x22--;
            x32--;
            //x42--;
            
            //x13--;
            //x23--;
            x33--;
            x43--;
            
            y11+=0.6;
            y21+=0.6;
            y31+=0.6;
            y41+=0.6;
            
            y22+=0.6;
            y32+=0.6;
            
            y33+=0.6;
            y43+=0.6;
            
        }
        
        else if(x11 < 400 && y11 > 400){
            
            x11+=2;
            x21+=2;
            x31+=2;
            x41+=2;
            
            //x12+=2;
            x22+=2;
            x32+=2;
            //x42+=2;
            
            //x13+=2;
            //x23+=2;
            x33+=2;
            x43+=2;
            
            y11-=1.2;
            y21-=1.2;
            y31-=1.2;
            y41-=1.2; 
            
            y22-=1.2;
            y32-=1.2;
            
            y33-=1.2;
            y43-=1.2; 
            
        }
        
    }
    
    
}


function car(x,y,l1,l2){
    
    this.display = function(){
        
        fill(255,255,0);
        quad(x-15,y,x-3,y-10,x+23,y+5,x+11,y+16);
        ellipse(x,y,l1,l2);
        
        
        fill(255);
        ellipse(x+20,y+5,5,5);
        ellipse(x+10,y+14,5,5);
        
    }
    
    this.display2 = function(){
        
        fill(255,90,60);
        quad(x-15,y,x+12,y-18,x+25,y-8,x,y+12);
        ellipse(x,y,l1,l2);
        
        
        fill(255);
        ellipse(x+12,y-15,5,5);
        ellipse(x+20,y-8,5,5);
        
    }
    
    this.display3 = function(){
        
        fill(80,235,90);
        quad(x-25,y+10,x+3,y-10,x+20,y,x-10,y+20);
        ellipse(x,y,l1,l2);
        
        
        fill(255);
        ellipse(x-20,y+8,5,5);
        ellipse(x-10,y+15,5,5);
        
    }
    
    this.display4 = function(){
        
        fill(255,255,0);
        quad(x-10,y-5,x+5,y-15,x+10,y+18,x-6,y+25);
        ellipse(x,y,l1-5,l2+5);
        
        
        fill(255);
        ellipse(x+8,y+15,5,5);
        ellipse(x-3,y+20,5,5);
        
    }
    
    this.display5 = function(){
        
        fill(159,137,210);
        quad(x-8,y-25,x+12,y-15,x+10,y+18,x-10,y+8);
        ellipse(x,y,l1-5,l2+5);
        
        
        fill(255);
        ellipse(x+7,y-15,5,5);
        ellipse(x-5,y-20,5,5);
        
    }
    
    this.animate = function(){
        
        x = x + xvel;
        y = y + yvel;
        
        if(x > 500 ){
            x = 220;
            y = 280;
            
            //xvel = xvel * -1;
            //yvel = yvel * -1;
        }
        /*
        else if(x < 220 ){
            xvel = xvel * -1;
            yvel = yvel * -1;
        }*/
    }
    
    this.animate2 = function(){
        
        x = x + xvel2;
        y = y + yvel2;
        
        if(x > 430){
            
            x = 255;
            y = 300;
            
        }
        
    }
    
    this.animate3 = function(){
        
        x = x + xvel3;
        y = y + yvel3;
        
        if(x < 300){
            
            x = 560;
            y = 250;
            
        }
        
    }
    
    this.animate4 = function(){
        
        y = y + yvel4;
        
        if(y > 500){
            
            x = 590;
            y = 308;
            
        }
        
    }
    
    this.animate5 = function(){
        
        y = y + yvel5;
        
        if(y < 410){
            
            x = 375;
            y = 610;
            
        }
        
    }
    
}


function boat(x1,y1,x2,y2,x3,y3,x4,y4){
    
    this.display = function(){
        
        fill(250);
        quad(x1,y1,x2,y2,x3,y3,x4,y4);
        quad(x1+5,y1+1,x2-3,y2+5,x3-3,y3-1,x4+5,y4-4);
        
    }
    
    this.animate = function(){
        
        x1 = x1 + xvelb;
        x2 = x2 + xvelb;
        x3 = x3 + xvelb;
        x4 = x4 + xvelb;
        
        y1 = y1 + yvelb;
        y2 = y2 + yvelb;
        y3 = y3 + yvelb;
        y4 = y4 + yvelb;
        
        if(x2 > 600){
            
            x1 = 400;
            x2 = 415;
            x3 = 415;
            x4 = 400;
            
            y1 = 552;
            y2 = 543;
            y3 = 558;
            y4 = 567;
            
            
        }
        
        
        
    }
    
}


function people(x,y,l1,l2){

    quad(240,304,300,340,300,580,240,544);
    
    this.display = function(){
        
        fill(120);
        ellipse(x,y,l1,l2);
        
    }
    
    this.animate = function(){
        
        x = x + xvelp;
        y = y + yvelp;
        
        if(x < 250 || x > 300){
            
            xvelp = xvelp *-1;
            
        }
        
        if(y < 350 || y > 534){
            
            yvelp = yvelp * -1;
            
        }
        
    }
    
    this.animate2 = function(){
        
        x = x + xvelp2;
        y = y + yvelp2;
        
        if(x < 250 || x > 300){
            
            xvelp2 = xvelp2 *-1;
            
        }
        
        if(y < 350 || y > 534){
            
            yvelp2 = yvelp2 * -1;
            
        }
        
    }
    
    this.animate3 = function(){
        
        x = x + xvelp3;
        y = y + yvelp3;
        
        if(x < 250 || x > 300){
            
            xvelp3 = xvelp3 *-1;
            
        }
        
        if(y < 350 || y > 534){
            
            yvelp3 = yvelp3 * -1;
            
        }
        
    }


}


function trees(x11,y11,x21,y21,x31,y31,x41,y41, x12,y12,x22,y22,x32,y32,x42,y42, x13,y13,x23,y23,x33,y33,x43,y43){
    
    this.display = function(){
        
        strokeWeight(2);
        stroke(51,90,32);
        
        var from = color(73,131,58);
        var to = color(37,78,22);
        var c = map(mouseX,0,width,0,1);
        var intC = lerpColor(from,to,c);
        fill(intC);
        quad(x11,y11,x21,y21,x31,y31,x41,y41);
        quad(x12,y12,x22,y22,x32,y32,x42,y42);
        quad(x13,y13,x23,y23,x33,y33,x43,y43);
        
        strokeWeight(2);
        stroke(0);
        
    }
    
}


function branch(x1,y1,x2,y2){
    
    this.display = function(){
        
        strokeWeight(5);
        
        var from = color(145,122,69);
        var to = color(71,64,30);
        var c = map(mouseX,0,width,0,1);
        var intC = lerpColor(from,to,c);
        stroke(intC);
        line(x1,y1,x2,y2);
        
        strokeWeight(2);
        stroke(0);
        
    }
    
    
}


function clouds(x1,y1,l1,l2,x2,y2,l21,l22,x3,y3,l31,l32){
    
    this.display = function(){
        
        strokeWeight(0);
        fill(255,240);
        ellipse(x1,y1,l1,l2);
        ellipse(x2,y2,l21,l22);
        ellipse(x3,y3,l31,l32);
        
        strokeWeight(2);
        
    }
    
    this.animate = function(){
        
        x1 = x1 + xvelc;
        x2 = x2 + xvelc;
        x3 = x3 + xvelc;
        
        if (x3 > 850){
            
            xvelc = xvelc * -1;
            
        }
        
        if (x3 < -50){
            
            xvelc = xvelc * -1;
        }
        
    }
    
    this.animate2 = function(){
        
        x1 = x1 - xvelc2;
        x2 = x2 - xvelc2;
        x3 = x3 - xvelc2;
        
        if(x1 < -50){
            
            xvelc2 = xvelc2 * -1;
            
        }
        
        if(x1 > 850){
            
            xvelc2 = xvelc2 * -1;
        }
        
    }
    
    
}