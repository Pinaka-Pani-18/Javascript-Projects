const questions = document.querySelectorAll(".question");


questions.forEach((question)=>{
    const btn = question.querySelector(".questionBtn");
    btn.addEventListener("click",()=>{
        question.classList.toggle("showText")
    })
})