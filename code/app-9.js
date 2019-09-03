var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var result = document.getElementById("result");
result.style.textAlign = "center";

var restartBtn = document.getElementById("restartBtn");
restartBtn.style.display = "none";
document.getElementById("buttonContainter").style.textAlign = "center";

var x = canvas.width/2;  //centro de la pantalla
var y = canvas.height-30;
//
var dx = 2;
var dy = -2;

var points = 0;

var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleDx = 7;
var rightPressed;
var leftPressed;


function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function keyDownHandler() {
    if(event.keyCode == 39) {
        rightPressed = true;
    } else if (event.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler() {
    if(event.keyCode == 39) {
        rightPressed = false;
    } else if (event.keyCode == 37) {
        leftPressed = false;
    }

}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function draw(){


    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBall();
    //

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if (y + dy < ballRadius || 
        (
         y + dy > canvas.height - paddleHeight - ballRadius &&
         x + dx > paddleX &&
         x + dx < paddleX + paddleWidth
        )
       ) {
        dy = -dy;
        points++;
        result.innerHTML = "Points: " + points;
    } else if (y + dy > canvas.height) {
        
        result.innerHTML = "you lose";
        restartBtn.style.display = "";
        return;
        //location.reload();
        
    }

    if (rightPressed && (paddleX + paddleWidth) < canvas.width) {
        paddleX += paddleDx;
    } else if (leftPressed && paddleX > 0 ) {
        paddleX -= paddleDx;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);

    
}

requestAnimationFrame(draw);


