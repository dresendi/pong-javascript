var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw(){
    // do stuff here

    requestAnimationFrame(draw);

    
}

requestAnimationFrame(draw);


