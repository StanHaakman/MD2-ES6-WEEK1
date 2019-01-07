const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

createSquare(70, 90, 150, 150, "#00FF00");
createSquare(20, 40, 50, 50, "#FF00FF");

function createSquare(xPos, yPos, width, height, squareColor) {
    ctx.beginPath();
    ctx.rect(xPos, yPos, width, height);
    ctx.fillStyle = squareColor;
    ctx.fill();
    ctx.closePath();
}



ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();