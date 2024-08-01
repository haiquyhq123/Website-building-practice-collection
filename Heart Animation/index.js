let bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove",(event)=>{
    const spanEl = document.createElement("span")
    let xpos = event.offsetX;
    let ypos = event.offsetY;
    let size =Math.random()*100+1;
    spanEl.style.top = ypos + "px";
    spanEl.style.left = xpos + "px";
    spanEl.style.width = size+"px";
    spanEl.style.height =size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000)
    
})