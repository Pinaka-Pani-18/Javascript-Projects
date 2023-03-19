const btnEl = document.querySelector(".btn");
const jokeEl = document.querySelector(".joke");

var URL = "https://v2.jokeapi.dev/joke/Any?type=single&amount=1";

btnEl.addEventListener("click",getMethod);

async function getMethod(){
        const data = await fetch(URL).then((e)=>
            e.json());
        if(data){
            console.log(data);
            jokeEl.innerHTML = data.joke;
        }
    }