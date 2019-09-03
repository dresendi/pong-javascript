var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//NEW CODE
var x = canvas.width/2;  //centro de la pantalla
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var ballRadius = 10;


function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    // do stuff here
    //new code
    drawBall();

    x += dx;
    y += dy;
    requestAnimationFrame(draw);

    
}

requestAnimationFrame(draw);


