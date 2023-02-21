const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("input");
const messageEl = document.querySelector(".message");
const errorEl = document.querySelector(".error");


btnEl.addEventListener("click",displayMessage);

function displayMessage(){
    if(inputEl.value){
        messageEl.textContent = inputEl.value;
        inputEl.value = "";
    }else{
        errorEl.style.display = "block";
       setInterval(() => {
        errorEl.style.display = "none";
       }, 10000);
    }
    
}