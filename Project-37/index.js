const colorPreviewEl = document.querySelector(".colorPreview");
const boxInputEls = document.querySelectorAll(".box input");
const colorCodeEl = document.querySelector("#colorCode");
const copyCodeBtnEl = document.querySelector(".copyCodeBtn");

// It generates RGB Color based on our input change
function generateRGBColor(){
    const R = boxInputEls[0].value;
    const G = boxInputEls[1].value;
    const B = boxInputEls[2].value;
    colorPreviewEl.style.backgroundColor = `rgb(${R},${G},${B})`;
    colorCodeEl.value = `rgb(${R},${G},${B})`
} 

// Whenever we change the input then it calls generateRGBColor function.
boxInputEls.forEach((e)=>{
    e.addEventListener("input",generateRGBColor)
})

// Checks that navigator API is present or not
copyCodeBtnEl.addEventListener("click",()=>{
    // If the navigator API is not present then it shows a alert message else it copies to our clipboard.
    if (!navigator.clipboard) {
        alert("Clipboard API is not available")
        return
    }
    else{
    const text = colorCodeEl.value;
    navigator.clipboard.writeText(text);
    copyCodeBtnEl.innerHTML = 'Copied to clipboard'
    setTimeout(() => {
        copyCodeBtnEl.innerHTML = "Copy Code"
        }, 2000);
    }
})

generateRGBColor();