"use strict";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const positionObject = {
    xPos : canvas.width / 2,
    yPos : canvas.height - 30
};

const positionMove = {
    dx : 2,
    dy : -2
};

function initContext() {
    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
};

function drawBall() {
    ctx.beginPath();
    ctx.arc(
        positionObject.xPos,
        positionObject.yPos,
        10,
        0,
        Math.PI*2
    );

    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function moveBall() {
    positionObject.xPos += positionMove.dx;
    positionObject.yPos += positionMove.dy;
}

function draw() {

    initContext();
    drawBall();
    moveBall()

}

setInterval(draw, 10);
