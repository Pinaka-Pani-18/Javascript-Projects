const celsiusEl = document.querySelector(".celsius");
const fahrenheitEl = document.querySelector(".fahrenheit");

celsiusEl.addEventListener("input",()=>{
    const result = ( parseFloat(celsiusEl.value) * 9/5 ) + 32;
    fahrenheitEl.value = parseFloat(result.toFixed(2));
})

fahrenheitEl.addEventListener("input",()=>{
    const result = ( parseFloat(fahrenheitEl.value) - 32) * 5/9;
    celsiusEl.value = parseFloat( result.toFixed(2));
})