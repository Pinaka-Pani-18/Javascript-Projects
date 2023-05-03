const outputEl = document.querySelector(".text");
const valEl = document.querySelectorAll(".val");
const ClearEl = document.querySelector(".AC");
const deleteEl = document.querySelector(".DEL");
const equalEl = document.querySelector(".equal");

// It adds every value and display at the output
valEl.forEach((val)=>{
    val.addEventListener("click",()=>{
        outputEl.value += val.value ;
    })
})

// It clears all the digits in the output
ClearEl.addEventListener("click",()=>{
    outputEl.value = "";
})

// It deletes the last digit in the output
deleteEl.addEventListener("click",()=>{
    outputEl.value = outputEl.value.slice(0,-1);
})

// If there is no error, it evaluates the output value or else it shows syntax error as a alert message.
equalEl.addEventListener("click",()=>{
    try{
        outputEl.value = eval(outputEl.value);
    }catch(e){
        alert(e);
    }
})