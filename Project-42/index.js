const inputEl = document.querySelector("input");
const searchEl = document.querySelector(".inputContainer i");
const imageBoxEl = document.querySelectorAll(".imageBox");

// when we press ENTER button or when we click search button this function will start executing.
function handleSearch(event){
    if(event.key==="Enter" || event==="search"){
        const inputValue = inputEl.value;
        const value = inputValue.toLowerCase();

        // if the entered value is equal to dataset name then it shows (i.e block) or else it display none.
        imageBoxEl.forEach((image)=>{
            if(value===image.dataset.name){
                image.style.display = "block"
            }else{
                image.style.display = "none"
            }
        })
    }
}

// when we click on the search button it call the handleSearch function.
searchEl.addEventListener("click",()=>{
    handleSearch("search");
})


inputEl.addEventListener("keyup",()=>{
    if(inputEl.value!="") 
        return;

    // if there is empty value then it shows all the images.
    imageBoxEl.forEach((image)=>{
        image.style.display = "block"
    })
})

// when we press the ENTER button then it calls the handleSearch function.
inputEl.addEventListener("keyup",handleSearch)