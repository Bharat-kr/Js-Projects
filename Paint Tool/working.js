//selecting all parts which needs functioning
const nav = document.querySelector("nav");
const stroke = document.querySelector("#stroke");
const background = document.querySelector("#background");
const endDrop = document.querySelector("#endDrop");
const outerWidth = document.querySelector(".width");
const width = document.querySelector("#width");
const shapeDrop = document.querySelector("#shapeDrop");
const strokeColor = document.querySelector(".strokeColor");
const bgColor = document.querySelector(".bgColor");
const strokeEnd = document.querySelector(".strokeEnd");
const strokeWidth = document.querySelector(".strokeWidth");
const colors = document.querySelectorAll(".color");
const endListItems = document.querySelectorAll(".endListItem");
const span = document.querySelector("span");
const widthSelector = document.querySelector("#widthSelector");
const shapesContainer = document.querySelector(".shapesContainer");
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");

stroke.addEventListener('click', () => strokeColor.classList.add("active"));
background.addEventListener('click', () => bgColor.classList.add("active"));
endDrop.addEventListener('click', () => strokeEnd.classList.add("active"));
outerWidth.addEventListener('click', () => strokeWidth.classList.add("active"));
shapeDrop.addEventListener('click', () => shapesContainer.classList.add("active"));


//changing stroke color function
function updateStrokeColor(e){
    strokeColor.classList.remove("active");
    stroke.style.backgroundColor = e.target.classList[0];
    ctx.strokeStyle = e.target.classList[0];
}

//function for changeing the background color of canvas
function updateBgColor(e){
    bgColor.classList.remove("active");
    background.style.backgroundColor = e.target.classList[0];
    canvas.style.backgroundColor = e.target.classList[0];
}

//function to change the end of stroke 
function updateStrokeEnd(e) {
    strokeEnd.classList.remove("active")
    span.innerText = e.target.innerText;
    console.log(e.target.innerText);
    ctx.lineCap = e.target.innerText;
}

//updating stroke size 
function updateSize(e) {
    width.style.width = "" + this.value + "px";
    width.style.height = "" + this.value + "px";
    ctx.lineWidth = this.value;
}
function updateSize2(e) {
    width.style.width = "" + this.value + "px";
    width.style.height = "" + this.value + "px";
    ctx.lineWidth = this.value;
    strokeWidth.classList.remove("active")
}

//function for drawing square
function drawSquare(e) {
    shapesContainer.classList.remove("active") //more work to be done 
    let x = prompt("Enter the x-coordinate of first corner of rectangle (between 0 to 820): ");
    let y = prompt("Enter the y-coordinate of first corner of rectangle (between 0 to 520): ");
    let width = prompt(`Enter the width between 0 to ${820-x}:`);
    while(true){
        if(width>820-x){
            width = prompt(`invalid! Please Enter the width between 0 to ${820-x}:`);
        }else{
            break;
        }
    }
    let height = prompt(`Enter the height between 0 to ${520-y}:`);
    while(true){
        if(height > 520-y){
            height = prompt(`invalid! Please Enter the height between 0 to ${520-y}:`);
        }else{
            break;
        }
    }
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
}

//function for drawing circle
function drawCircle(e) {
    shapesContainer.classList.remove("active")  //more work to be done 
    let x = prompt("Enter the x-coordinate of center of circle (between 0 to 820): ");
    let y = prompt("Enter the y-coordinate of center of circle (between 0 to 520): ");
    let min = Math.min(x, y);
    let r = prompt(`Enter the radius (between 0 to ${min}): `);
    while (true) {
        if(r>min){
            r = prompt(`invalid! Please Enter the radius (between 0 to ${min}): `);
        }else{
            break;
        }
    }
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}


//the functions made
for(var i=0;i<10;i++){
    if (i>=0 && i<5) {
        colors[i].addEventListener('click',updateStrokeColor);
    }else{
        colors[i].addEventListener('click',updateBgColor);
    }
}

for(var i=0;i<3;i++){
    endListItems[i].addEventListener('click',updateStrokeEnd);
}

widthSelector.addEventListener('change', updateSize2);
widthSelector.addEventListener('mousemove', updateSize);

square.addEventListener('click', drawSquare);
circle.addEventListener('click', drawCircle);