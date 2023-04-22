const submitBtnEl = document.querySelector(".submitBtn");
const okBtnEl = document.querySelector(".okBtn");
const popUpEl = document.querySelector(".pop-up");

submitBtnEl.addEventListener("click",()=>{
    popUpEl.classList.add("pop-up-open");
})

okBtnEl.addEventListener("click",()=>{
    popUpEl.classList.remove("pop-up-open");
})