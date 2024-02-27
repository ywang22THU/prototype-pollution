class web {
    constructor(url){
        this.url = url;
    }
}

var thisWeb = new web(window.location.href);

function enject(){
    Object.prototype.enjected = true; 
}

function check(){
    var info = document.getElementById("status");
    if(thisWeb.enjected){
        info.innerHTML = "You have been hacked!";
        info.style.color = "red";
    }
}