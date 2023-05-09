const imgEl = document.querySelector("img");

const filtersEl = document.querySelectorAll("input");

const anglesEl = document.querySelectorAll("li");

const fileEl = document.querySelector(".file");
const chooseBtnEl = document.querySelector(".chooseBtn");
const saveBtnEl = document.querySelector(".saveBtn");
const resetBtnEl = document.querySelector(".resetBtn");

let saturation = "100", blur = "0", brightness = "100", contrast = "100";
let rotate = 0, flipH = 1, flipV = 1;

// when this function execute all changes will be set to initial values.
const loadEl = () =>{
    filtersEl[0].value = "100";
    filtersEl[1].value = "0";
    filtersEl[2].value = "100";
    filtersEl[3].value = "100";
}

// It generates result of the image as preview
const generateResult = () => {
    imgEl.style.filter = `saturate(${saturation}%) blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%)`;
    imgEl.style.transform = `rotate(${rotate}deg) scale(${flipH}, ${flipV})`;
}

// This will change the image rotation or flip when we click on any of the rotation or flip. 
anglesEl.forEach(element => {
    element.addEventListener("click", () => {
        if(element.id === "vertical") {
            flipV = flipV === 1 ? -1 : 1;
        } else if(element.id === "horizontal") {
            flipH = flipH === 1 ? -1 : 1;
        } else if(element.id === "left") {
            rotate = rotate - 90;
        } else {
            rotate = rotate + 90;
        }
        // It calls the generateResult function for every click on the rotation or flip flop
        generateResult();
    });
});

// This will change the image filters when we give input on any of the filters. 
filtersEl.forEach(element => {
    element.addEventListener("input", () => {
        if(element.id === "saturation") {
            saturation = filtersEl[0].value;
        } else if(element.id === "blur") {
             blur = filtersEl[1].value;
        } else if(element.id === "brightness") {
            brightness = filtersEl[2].value;
        } else {
            contrast = filtersEl[3].value;
        }
        // It calls the generateResult function for every click on the rotation or flip flop
    generateResult();
    });
});

// It resets the all values to initial conditions
resetBtnEl.addEventListener("click", () => {
    saturation = "100", blur = "0", brightness = "100", contrast = "100";
    rotate = 0, flipH = 1, flipV = 1;
    generateResult();
    loadEl();
})

// This function adds image to the project when we choose a image.
fileEl.addEventListener("change", ()=>{
        let file = fileEl.files[0];
        console.log(fileEl)
        if(!file) return;
        imgEl.src = URL.createObjectURL(file);
        imgEl.addEventListener("load", () => {
            resetBtnEl.click();
        });
})

chooseBtnEl.addEventListener("click",()=>{
    fileEl.click();
})

// when we click on save button it Saves our resultant image as ResultImage.jpg
saveBtnEl.addEventListener("click",()=>{
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = imgEl.naturalWidth;
        canvas.height = imgEl.naturalHeight;
        
        ctx.filter = `saturate(${saturation}%) blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%)`;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        if(rotate !== 0) {
            ctx.rotate(rotate * Math.PI / 180);
        }
        ctx.scale(flipH, flipV);
        ctx.drawImage(imgEl, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        
        const link = document.createElement("a");
        link.download = "ResultImage.jpg";
        link.href = canvas.toDataURL();
        link.click();
})

// It calls loadEl function at the beginning i.e when the website is opened
loadEl();