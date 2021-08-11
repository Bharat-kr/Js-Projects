const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const style = getComputedStyle(canvas);

canvas.width = 820;
canvas.height = 520;

ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 14;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return; //stop the fn when they are not moused
    // console.log(e);

    ctx.beginPath();
    //start from
    ctx.moveTo(lastX , lastY);
    //go to
    ctx.lineTo(e.offsetX , e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;

}

canvas.addEventListener('mousedown',(e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',() => isDrawing = false);
canvas.addEventListener('mouseout',() => isDrawing = false);