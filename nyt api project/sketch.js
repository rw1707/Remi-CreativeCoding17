var myData;
var url;

var baseUrl;
var key;
var query;

var news;

var termArray = [];
var t = 0;


function setup(){
    
    createCanvas(700,500);
    //background(200);
    /*
    termArray[0] = "basketball";
    termArray[1] = "football";
    termArray[2] = "baseball";
    
    baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    key = "3e0c114cbd724baca24a519bebb957fd";
    query = termArray[t];
    
    url = baseUrl + "?api-key=" + key + "&q=" + query;
    */
    //loadJSON(url, dataResponse);
    
    setInterval(queryResponse, 3000);
    
}


function queryResponse(){
    
    termArray[0] = "basketball";
    termArray[1] = "football";
    termArray[2] = "baseball";
    
    baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    key = "3e0c114cbd724baca24a519bebb957fd";
    query = termArray[t];
    
    url = baseUrl + "?api-key=" + key + "&q=" + query;
    
    if(t < 2){
        t++;
    }
    
    else if(t > 1){
        t = 0;
    }
    
    loadJSON(url, dataResponse);
    
}


function dataResponse(data){
    
    news = data;
    
    console.log(data.response.docs[0].headline.main);
    
    background(240);
    
    if(news){
        
        for(i = 2; i < news.response.docs.length; i++){
            
            var tX = width/2;
            var tY = 100;
            
            fill(0);
            textSize(14);
            textAlign(CENTER);
            textStyle(NORMAL);
            text(news.response.docs[i].headline.main,tX,tY + (i*40));
        }
        
        fill(255);
        strokeWeight(0);
        rect(width/2 - 130, 60,260,40);
        fill(0);
        textSize(30);
        textAlign(CENTER);
        textStyle(BOLD);
        text(news.response.docs[0].headline.main + " News",width/2,90);
        
    }
    
}


function draw(){

    
    
}

