const prevEl = document.querySelector(".dec")
const nextEl = document.querySelector(".inc")
const resetEl = document.querySelector(".reset");
const buttons = document.querySelector(".btn")
let countEl = document.querySelector(".count");

let counts = 0;

prevEl.addEventListener("click",decrease);
nextEl.addEventListener("click",increase);
resetEl.addEventListener("click",reset);

function increase(){
    counts++;
    countEl.innerHTML = counts;
    if(counts>0){
        countEl.style.color = "green";
    }
    if(counts==0){
        countEl.style.color = "black";
    }
}
function decrease(){
    counts--;
    countEl.innerHTML = counts;
    if(counts<0){
        countEl.style.color = "red";
    }
    if(counts==0){
        countEl.style.color = "black";
    }
}
function reset(){
    counts=0;
    countEl.innerHTML = counts;
    countEl.style.color = "black";
}
