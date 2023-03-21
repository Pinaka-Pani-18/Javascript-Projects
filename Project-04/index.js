const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const buttons = document.querySelector(".btn");
const imageEl = document.querySelector(".images")

let pictures = ["1","2","3","4","5","6"];

let count = 0;

leftBtn.addEventListener("click",left);
rightBtn.addEventListener("click",right);

function right(){
    count++;
    if(count>pictures.length-1){
        count=0;
    }
    imageEl.style.background = `url("imgs/${pictures[count]}.png")`;
}
function left(){
    count--;
    if(count<0){
        count = pictures.length-1;
    }
    imageEl.style.background = `url("imgs/${pictures[count]}.png")`;
}