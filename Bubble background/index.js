for(var i=1;i<=25;i++){
    var bubbleid="#bub"+i+"";
    var item=document.querySelector(bubbleid);
    var size=""+Math.round(Math.random()*150+1)+"px";
    console.log(size);
    item.style.width=size;
    item.style.height=size;
    item.style.top=""+Math.random()*100+"vh";
    item.style.left=""+Math.random()*100+"vw";
}
for(var i=1;i<=25;i++){
    var bubbleid="#secBub"+i+"";
    var item=document.querySelector(bubbleid);
    var size=""+Math.round(Math.random()*150+1)+"px";
    console.log(size);
    item.style.width=size;
    item.style.height=size;
    item.style.top=""+Math.random()*100+"vh";
    item.style.left=""+Math.random()*100+"vw";
}
function resize() {
    for(var i=1;i<=25;i++){
        var bubbleid="#bub"+i+"";
        var item=document.querySelector(bubbleid);
        var size=""+Math.round(Math.random()*150+1)+"px";
        console.log(size);
        item.style.width=size;
        item.style.height=size;
        item.style.top=""+Math.random()*100+"vh";
        item.style.left=""+Math.random()*100+"vw";
        item.style.display = "block";
    }
}
function resize2() {
    for(var i=1;i<=25;i++){
        var secBubbleid="#secBub"+i+"";
        var item=document.querySelector(secBubbleid);
        var size=""+Math.round(Math.random()*150+1)+"px";
        console.log(size);
        item.style.width=size;
        item.style.height=size;
        item.style.top=""+Math.random()*100+"vh";
        item.style.left=""+Math.random()*100+"vw";
        item.style.display = "block";
    }
}
setInterval(resize,12000);
setInterval(resize2,24000);

var bubbles=document.querySelectorAll(".bub");

for(var i=1;i<51;i++){
    bubbles[i].addEventListener("click",function(){
        this.style.display = "none";
    });
}