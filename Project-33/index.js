const containerEl = document.querySelectorAll(".container");

const playBtnEl = document.querySelector(".playBtn");

const fruitBtnEls = document.querySelectorAll(".fruitBtn");

const gameContainerEl = document.querySelector(".gameContainer");
const timeEl = document.querySelector(".time");
const scoreEl = document.querySelector(".score");
const messageEl = document.querySelector(".message");

let seconds = 0;
let score = 0;
let selectedFruit = {};

// When you click play button it will go up(disappear) and now fruitList container will display on screen.
playBtnEl.addEventListener("click", () => {
  containerEl[0].classList.add("up");
});

// When click on any of the fruit then it will note down source & alternative(alt) of the image and call the start game function & also createFruit function by 1000ms delay.
fruitBtnEls.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selectedFruit = { src, alt };
    containerEl[1].classList.add("up");
    setTimeout(createFruit, 1000);
    startGame();
  });
});

// start game function will call the increase time function for every 1000ms.
function startGame() {
  setInterval(increaseTime, 1000);
}

// Updates the time.
function increaseTime() {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  m = min < 10 ? `0${min}` : min;
  s = sec < 10 ? `0${sec}` : sec;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

// This function generate fruits at random location by using getRandomLocation function.
function createFruit() {
  const fruit = document.createElement("div");
  fruit.classList.add("fruit");
  const { x, y } = getRandomLocation();
  fruit.style.top = `${y}px`;
  fruit.style.left = `${x}px`;
  fruit.innerHTML = `<img src="${selectedFruit.src}" alt="${
    selectedFruit.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />`;
  gameContainerEl.appendChild(fruit);

  // When we click on any of the fruits then it will call the catchFruit function.
  fruit.addEventListener("click", catchFruit);
}

// It gives random location
function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

// when we catch the fruit it calls the increaseScore function and add caught class to remove that fruit and also calls the addFruits function.
function catchFruit() {
  increaseScore();
  this.classList.add("caught");
  addFruits();
}

// It will call createFruit function 2 times with delay 1000ms and 1500ms.
function addFruits() {
  setTimeout(createFruit, 1000);
  setTimeout(createFruit, 1500);
}

// Updates the score and it will display a message after reaching score greater than 20.
function increaseScore() {
  score++;
  if (score > 20) {
    messageEl.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
