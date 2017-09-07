size(500, 400);
int ASS = 99;
background(255,129,129);

noStroke();
fill(0,0,0);
triangle(250,50,400,350,100,350);

stroke(255,255,255);
strokeWeight(3);
fill(195,250,134);
ellipse(250, 200, 100, 100);

//Draw a complex shape
beginShape();
vertex(130,90);
vertex(160,155);
vertex(140,230);
vertex(100,200);
vertex(80,120);
endShape(CLOSE);