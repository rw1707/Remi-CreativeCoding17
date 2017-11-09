var myData;
var yPos;
var airplane;

function preload(){
    
    myData = loadJSON("assets/us_airport_codes.json");
    airplane = loadImage("assets/plane.png");
    
}


function setup(){
    
    createCanvas(800,810);
    background(20);
    noStroke();
    
    var names = myData.states[0].names;
    //console.log(names);
    
    
    
    
    for(i = 0; i < myData.states.length; i++){
        
        //var airportname = myData.states[i].name;
        //text(airportname, random(0,width-50), random(550,height));
        
        var airportsnum = myData.states[i].airports.length;
        console.log(airportsnum + " - " + myData.states[i].name);
        
        fill(255-(i*5), 20, i*5);
        rect((i*10)+150,400,5,-((airportsnum*3)+10));
        
    }
    
    for(i = 0; i < myData.states.length; i++){
        
        var airportsnum = myData.states[i].airports.length;
        
        fill(255-(i*5), 20, i*5);
        rect((i*10)+150,400,5,((airportsnum*3)+10));
        
        
        
    }
    
    image(airplane,width*(1/3)+50,450,80*2.3,80);
    
}


function draw(){
    
    
    
}