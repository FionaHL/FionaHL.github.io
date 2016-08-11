//window.alert("Hey, you're about to access Fiona Loomis's GWC portfolio, would you still like to?....JK you have to.");

function normalpic(x){
    x.style.height="50";
    x.style.width="50";
}

function makepicbigger(x){
    x.style.height = "200px";
    x.style.width = "200px";
    /*var image = document.getElementById("image");
    if (image.src.match("")){
        image.src = 60%*/
    }
    
function changeimage(){
    
    var image = document.getElementById("image");
    if (image.src.match("obamicon_screenshot.jpg")){
        image.src = "obama_invert.jpg";
    }
    else {
        image.src = "obamicon_screenshot.jpg";
    }
        
//image.src = "obama_invert.jpg";
}