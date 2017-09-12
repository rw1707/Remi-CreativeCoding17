size(600,700);
background(202,250,234);
noStroke();

//Background
fill(129,183,178);
rect(0,510,600,190);

fill(150,206,188);
rect(0,325,600,185);

fill(175,234,215);
rect(0,145,600,180);

//Torso
fill(126,18,50);
beginShape();
vertex(50,700);
vertex(100,600);
vertex(250,550);
vertex(420,550);
vertex(560,580);
vertex(800,700);
endShape(CLOSE);

fill(180,127,137);
beginShape();
vertex(50,700);
vertex(100,600);
vertex(250,550);
vertex(110,700);
endShape(CLOSE);

fill(111,27,42);
beginShape();
vertex(560,580);
vertex(800,700);
vertex(500,700);
endShape(CLOSE);


//Neck
fill(222,196,132);
beginShape();
vertex(225,450);
vertex(420,400);
vertex(420,550);
vertex(250,550);
endShape(CLOSE);

fill(255,227,167);
beginShape();
vertex(225,450);
vertex(300,450);
vertex(285,550);
vertex(250,550);
endShape(CLOSE);

//Face Base
fill(209,197,148);
beginShape();
vertex(450,200);
vertex(450,350);
vertex(430,405);
vertex(395,450);
vertex(355,485);
vertex(330,495);
vertex(300,500);
vertex(270,495);
vertex(245,485);
vertex(205,450);
vertex(170,405);
vertex(150,350);
vertex(150,200);
endShape(CLOSE);


//Ears
fill(255,227,167);
beginShape();
vertex(450,280);
vertex(480,280);
vertex(480,320);
vertex(450,350);
endShape(CLOSE);

triangle(150,350,135,290,150,275);


//Nose
fill(222,196,132);
triangle(320,355,290,350,305,300);

fill(118,101,53);
triangle(320,355,290,350,300,360);

fill(185,166,111);
triangle(290,350,300,360,275,355);

fill(255,249,224);
beginShape();
vertex(290,350);
vertex(275,355);
vertex(295,305);
vertex(305,300);
endShape(CLOSE);


//Face Parts
fill(255,227,167);
beginShape();
vertex(285,200);
vertex(270,280);
vertex(420,240);
vertex(400,200);
endShape(CLOSE);

fill(255,240,198);
beginShape();
vertex(285,200);
vertex(270,280);
vertex(150,250);
vertex(150,200);
endShape(CLOSE);

fill(250,250,240);
triangle(270,280,150,250,150,270);

fill(250,237,184);
beginShape();
vertex(270,280);
vertex(305,271);
vertex(305,300);
vertex(295,305);
endShape(CLOSE);

fill(255,240,198);
beginShape();
vertex(150,270);
vertex(170,405);
vertex(245,485);
vertex(275,355);
vertex(295,305);
vertex(270,280);
endShape(CLOSE);

fill(242,227,164);
triangle(210,300,260,300,235,315);

fill(255,245,200);
triangle(170,405,245,485,275,355);

fill(250,238,177);
beginShape();
vertex(305,271);
vertex(305,300);
vertex(450,300);
vertex(420,240);
endShape(CLOSE);

fill(245,231,175);
beginShape();
vertex(355,390);
vertex(430,405);
vertex(420,335);
vertex(440,315);
vertex(450,300);
vertex(305,300);
vertex(320,355);
endShape(CLOSE);

fill(224,207,138);
triangle(330,300,385,300,360,312);

fill(247,234,182);
beginShape();
vertex(300,360);
vertex(275,355);
vertex(262,410);
vertex(300,410);
endShape(CLOSE);

fill(232,220,162);
beginShape();
vertex(300,360);
vertex(300,410);
vertex(346,410);
vertex(355,390);
vertex(320,355);
endShape(CLOSE);

fill(242,227,164);
triangle(290,410,346,410,310,490);

fill(255,235,155);
beginShape();
vertex(290,410);
vertex(310,490);
vertex(270,495);
vertex(245,485);
vertex(262,410);
endShape(CLOSE);

fill(222,211,170);
beginShape();
vertex(310,490);
vertex(355,390);
vertex(440,360);
vertex(380,450);
endShape(CLOSE);

//Face Shadows
fill(173,167,141);
triangle(450,350,420,335,430,405);
fill(165,157,120);
triangle(420,335,450,350,440,315);

fill(198,190,150);
beginShape();
vertex(420,335);
vertex(355,485);
vertex(395,450);
vertex(430,405);
endShape(CLOSE);

beginShape();
vertex(355,485);
vertex(330,495);
vertex(340,470);
vertex(370,450);
endShape(CLOSE);

fill(193,187,160);
beginShape();
vertex(340,470);
vertex(330,495);
vertex(300,500);
vertex(270,495);
endShape(CLOSE);


//Mouth
fill(224,172,158);
triangle(330,410,300,410,315,405);
triangle(300,410,270,410,285,405);

fill(211,171,158);
beginShape();
vertex(330,410);
vertex(270,410);
vertex(280,417);
vertex(320,417);
endShape(CLOSE);


//Hair
fill(90,87,80);
triangle(150,200,125,125,400,100);

fill(100,99,91);
triangle(125,125,135,100,190,119);

fill(62,59,49);
triangle(150,200,400,100,450,200);

triangle(150,275,150,200,160,200);

fill(64,53,24);
triangle(400,200,450,200,450,350);


//Eyes and brows - Right
stroke(180,180,180);
triangle(320,272,370,270,390,280);

fill(255,255,255);
beginShape();
vertex(330,300);
vertex(340,288);
vertex(370,285);
vertex(385,300);
endShape(CLOSE);

fill(82,66,21);
beginShape();
vertex(345,288);
vertex(365,285);
vertex(370,300);
vertex(345,300);
endShape(CLOSE);

fill(193,193,193);
triangle(345,300,345,288,365,285);

//Eyes and brows - Left
fill(64,53,24);
triangle(270,280,210,265,200,275);

fill(255,255,255);
beginShape();
vertex(210,300);
vertex(220,285);
vertex(245,288);
vertex(260,300);
endShape(CLOSE);

fill(82,66,21);
beginShape();
vertex(225,286);
vertex(240,287);
vertex(243,300);
vertex(222,300);
endShape(CLOSE);

fill(193,193,193);
triangle(222,300,225,286,240,287);