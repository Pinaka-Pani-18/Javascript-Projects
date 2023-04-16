const containerEl = document.querySelector(".container");
const searchInputEl = containerEl.querySelector("input");
const volumeEl = containerEl.querySelector(".word i");
const infoTextEl = containerEl.querySelector(".info-text");
const synonymsEl = containerEl.querySelector(".synonyms .list");
const removeIcon = containerEl.querySelector(".search span");
let audio;

searchInputEl.addEventListener("keyup", e => {
    let word = e.target.value;
    if (e.key == "Enter" && word) {
        fetchApi(word);
    }
});

function fetchApi(word) {
    containerEl.classList.remove("active");
    infoTextEl.style.color = "black";
    infoTextEl.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    // Link to get this api : https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        fetch(url).then(response => response.json()).then(data => {

            if (data.title) {
                infoTextEl.innerHTML = `Unable to find the meaning of the word <span>"${word}"</span>. Please, Search for another word.`;
            } else {
                containerEl.classList.add("active");
                let definitions = data[0].meanings[0].definitions[0],
                    phonetics = `${data[0].meanings[0].partOfSpeech}  /${data[0].phonetics[0].text}/`;
                document.querySelector(".word p").innerText = `Word : ${data[0].word}`;
                document.querySelector(".word span").innerText = phonetics;
                document.querySelector(".meaning span").innerText = definitions.definition;
                document.querySelector(".source span").innerHTML = `<a href="${data[0].sourceUrls[0]}" target="_blank">${data[0].sourceUrls[0]}</a>`;
                audio = new Audio(data[0].phonetics[0].audio);
                if (data[0].meanings[0].synonyms[0] === undefined) {
                    synonymsEl.innerHTML = "NA";
                } else {
                    synonymsEl.innerHTML = "";
                    for (let i = 0; i < 5; i++) {
                        let tag = `<span>${data[0].meanings[0].synonyms[i]},</span>`;
                        synonymsEl.insertAdjacentHTML("beforeend", tag);
                    }
                }
            }
        })
    } catch {
        infoTextEl.innerHTML = `Unable to find the meaning of the word <span>"${word}"</span>. Please, Search for another word.`;
    }
}

//For volume button
volumeEl.addEventListener("click", () => {
    volumeEl.style.color = "red";
    audio.play();
    setTimeout(() => {
        volumeEl.style.color = "gray";
    }, 800);
});

//for remove icon which is available in input field
removeIcon.addEventListener("click", () => {
    searchInputEl.value = "";
    searchInputEl.focus();
    containerEl.classList.remove("active");
    infoTextEl.style.color = "black";
    infoTextEl.innerHTML = "Type a word & click 'ENTER' to get the results.";
});