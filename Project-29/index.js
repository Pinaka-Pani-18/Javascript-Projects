const refreshBtnEl = document.querySelector(".refreshBtn");

const gradientColorBoxEl = document.querySelector(".gradientColorBox");

const selectMenuEl = document.querySelector("select");

const colorInputsEl = document.querySelectorAll(".colors input");

const textareaEl = document.querySelector("textarea");

const copyBtnEl = document.querySelector(".copyBtn");


// Code will copy to the user clipboard
const copyCode = () => {
navigator.clipboard.writeText(textareaEl.value);
        copyBtnEl.innerText = "Code Copied";
        setTimeout(() =>{
            copyBtnEl.innerText = "Copy Code"
        }, 2000);
}

// it create and returns a random color in hexadecimal code.
const getRandomColor = () => {
    const randomHexColor = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHexColor}`;
}

// If isRandom is true generates a random color or else its generates custom color what user as given.
const generateGradient = (isRandom) => {
    if(isRandom) {
        colorInputsEl[0].value = getRandomColor();
        colorInputsEl[1].value = getRandomColor();
    }

    const gradient = `linear-gradient(${selectMenuEl.value}, ${colorInputsEl[0].value}, ${colorInputsEl[1].value})`;
    gradientColorBoxEl.style.background = gradient;
    textareaEl.value = `background: ${gradient};`;
}

// it automatically updates if you change the input of colors 
colorInputsEl.forEach( input =>  input.addEventListener("input", () => generateGradient(false)) );
// when we click on refresh button it creates random colors
refreshBtnEl.addEventListener("click", () => generateGradient(true));
// it automatically updates if you change any option from the selections
selectMenuEl.addEventListener("change", () => generateGradient(false));
// when we click on copy code button it copies the code to the user clipboard
copyBtnEl.addEventListener("click", copyCode);
