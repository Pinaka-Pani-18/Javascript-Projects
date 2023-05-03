const titleEl = document.querySelector(".title");
const memeEl = document.querySelector(".meme");
const authorEl = document.querySelector(".author");
const generateMemeBtnEl = document.querySelector(".generateMemeBtn");

// Meme Api GitHub Link : https://github.com/D3vd/Meme_Api
async function generateMeme(){
    const response = await fetch("https://meme-api.com/gimme/wholesomememes");
    const data = await response.json()
    titleEl.innerHTML = data.title;
    memeEl.setAttribute("src",data.url);
    authorEl.innerHTML = `Meme Created By ${data.author}`
    console.log(data);
}

generateMemeBtnEl.addEventListener("click",generateMeme)

generateMeme();