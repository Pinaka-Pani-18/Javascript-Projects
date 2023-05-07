const containerEl = document.querySelectorAll('.container');

const playBtnEl = document.querySelector('.playBtn')

const insectBtnEls = document.querySelectorAll('.insectBtn');

const gameContainerEl = document.querySelector('.gameContainer')
const timeEl = document.querySelector('.time')
const scoreEl = document.querySelector('.score')
const messageEl = document.querySelector('.message')

let seconds = 0;
let score = 0;
let selectedInsect = {};

// When you click play button it will go up(disappear) and now insectList container will display on screen.
playBtnEl.addEventListener('click', () => {
    containerEl[0].classList.add('up');
})

// When click on any of the insect then it will note down source & alternative(alt) of the image and call the start game function & also createInsect function by 1000ms delay.
insectBtnEls.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selectedInsect = { src, alt };
        containerEl[1].classList.add('up');
        setTimeout(createInsect, 1000);
        startGame();
    })
})

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
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++;
}

// This function generate insects at random location by using getRandomLocation function.
function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;
    gameContainerEl.appendChild(insect)

    // When we click on any of the insects then it will call the catchInsect function.
    insect.addEventListener('click', catchInsect)

}

// It gives random location
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

// when we catch the insect it calls the increaseScore function and add caught class to remove that insect and also calls the addInsects function.
function catchInsect() {
    increaseScore();
    this.classList.add('caught')
    addInsects()
}

// It will call createInsect function 2 times with delay 1000ms and 1500ms.
function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

// Updates the score and it will display a message after reaching score greater than 20.
function increaseScore() {
    score++;
    if(score > 20) {
        messageEl.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
}