const itemEls = document.querySelectorAll(".item");

itemEls.forEach((event,index) => {
    event.addEventListener("click",()=>{
        
        // remove previous active class and adding active class to user clicked icon.
        document.querySelector(".active").classList.remove("active")
        event.classList.add("active");
      
        // moving dot to the place of active class icon
		const dotEl = document.querySelector(".dot");
        dotEl.style.left = `${index*100 + 80}px`
    })
});