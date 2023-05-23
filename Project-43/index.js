const containerEl = document.querySelector(".container");

const refreshBtnEl = document.querySelector(".refreshBtn");

const totalColorBoxes = 10; //you can can give any number of coloBoxes to generate.

function generateColorPalette(){

    // Whenever this function executes the container starts with empty color boxes.
    containerEl.innerHTML = ""; 

    // This generates totalColorBoxes 
    for (let i = 0; i < totalColorBoxes; i++) {
       
        // Random hex color code will be generated
        let hexColorCode = Math.floor(Math.random() * 0xffffff).toString(16);
        hexColorCode = `#${hexColorCode}`;
        
        // created a colorContainer in which we have added colorBox and codeBox elements.
        const colorContainerEl = document.createElement("div");
        colorContainerEl.classList.add("colorContainer");
        colorContainerEl.innerHTML = `<div class="colorBox" style="background: ${hexColorCode}"></div>
                              <p class="codeBox">${hexColorCode}</p>`;

        // It adds onClick event to every colorContainer we have created.
        colorContainerEl.addEventListener("click", () => copyColor(colorContainerEl, hexColorCode));
        
        // we are adding all the created colorContainer to container
        containerEl.appendChild(colorContainerEl);
    }
}


function copyColor(colorContainerEl, hexColorCode){
    const colorBoxEl = colorContainerEl.querySelector(".codeBox");

    // It will copy the code to clipboard or else it shows alert message.
    try{
        navigator.clipboard.writeText(hexColorCode)
        colorBoxEl.innerText = "Copied";
        setTimeout(() => {
            colorBoxEl.innerText = hexColorCode
        }, 1000)

    }catch(e){
        alert("Failed to copy the color code!");
    }
}

// At load time it automatically calls the generateColorPalette function.
generateColorPalette();

// when we click on refresh button it calls the generateColorPalette function.
generateColorPalette();
refreshBtnEl.addEventListener("click", generateColorPalette);