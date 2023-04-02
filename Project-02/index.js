const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

var colors = ["green","blue","red","orange","yellow","violet"];

bodyEl.style.background = "pink";

btnEl.addEventListener("click",addColor);

let count=0;

function addColor(){
    console.log("clicked");
    // var color = parseInt(Math.random()*colors.length);
    bodyEl.style.background = colors[count%colors.length];
    // bodyEl.style.background = colors[color];
    count++;
}