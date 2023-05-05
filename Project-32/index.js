const smallGlassesEl = document.querySelectorAll('.small-glass')
const remainingEl = document.querySelector('.remaining')
const litersEl = document.querySelector('.liters')
const percentageEl = document.querySelector('.percentage')

// It will operates the percentage and remaining water in the big glass
function updateBigGlass() {
    const totalGlasses = smallGlassesEl.length;
    const fullGlassesEl = document.querySelectorAll('.small-glass.full').length;

    if(fullGlassesEl === 0) {
        percentageEl.style.visibility = 'hidden'
        percentageEl.style.height = 0
    } else {
        percentageEl.style.visibility = 'visible'
        percentageEl.style.height = `${fullGlassesEl / totalGlasses * 350}px`
        percentageEl.innerText = `${fullGlassesEl / totalGlasses * 100}%`
    }

    if(fullGlassesEl === totalGlasses) {
        remainingEl.style.visibility = 'hidden'
        remainingEl.style.height = 0
    } else {
        remainingEl.style.visibility = 'visible'
        litersEl.innerText = `${4 - (500 * fullGlassesEl / 1000)}L`
    }
}

// It will call the updateBigGlass function for every click on the small glasses
smallGlassesEl.forEach((glass, id) => {
    glass.addEventListener('click', () => {
        if (id===7 && smallGlassesEl[id].classList.contains("full")){
            id--;
        }
        else if(smallGlassesEl[id].classList.contains('full') && !smallGlassesEl[id].nextElementSibling.classList.contains('full'))
        {
            id--;
        }

    smallGlassesEl.forEach((glass, id2) => {
        if(id2 <= id) {
            glass.classList.add('full')
        } else {
            glass.classList.remove('full')
        }
    })
    updateBigGlass();
    })
})

updateBigGlass();
