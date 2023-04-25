const rollButtonEl = document.querySelector(".rollButton");

const diceEl = document.querySelector(".dice");

const rollHistoryEl = document.querySelector(".rollHistory")

let count = 1;

rollButtonEl.addEventListener("click",()=>{
    diceEl.classList.add("dice-rolling");
    setTimeout(() => {
    diceEl.classList.remove("dice-rolling");
    rollDice();
    }, 1000);
})

function rollDice(){
    const rollResult = Math.ceil(Math.random()*6);
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    const liEl = document.createElement("li");
    liEl.innerHTML = `Roll ${count}: <span>${diceFace}</span>`;
    rollHistoryEl.appendChild(liEl);
    count++;
}

function getDiceFace(rollResult){
    switch(rollResult){
        case 1:
            return "&#9856";
        case 2:
            return "&#9857";
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
    }
}