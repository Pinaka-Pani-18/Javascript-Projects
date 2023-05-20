const listEl = document.querySelector(".list");
const liEls = listEl.querySelectorAll(".list li");
const iconsEls = document.querySelectorAll(".icon i");

let isDragging = false;

// It adds active class to the li tag to standout from the other li tags.
liEls.forEach(tab => {
    tab.addEventListener("click", () => {
        listEl.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});


const handleIcons = (scrollVal) => {
    let maxScrollableWidth = listEl.scrollWidth - listEl.clientWidth;
    // If the scrollVal is less than or equal to 0 then left icon will disappear else appear.
    iconsEls[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    // This is to disappear the right icon when it reaches to the right most end.
    iconsEls[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

// when we click on the left icon(l) it moves left side by -250 other wise to right side by 250. 
iconsEls.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollWidth = listEl.scrollLeft =  listEl.scrollLeft + (icon.id === "l" ? -250 : 250);
        handleIcons(scrollWidth);
    });
});

// Whenever we drag the list then it automatically moves to that side.
listEl.addEventListener("mousemove", (e) => {
    if(!isDragging) return;
    listEl.classList.add("dragging");
    listEl.scrollLeft = listEl.scrollLeft - e.movementX;
    handleIcons(listEl.scrollLeft)
});

// Whenever we stop dragging the list then it automatically stops.
document.addEventListener("mouseup", () => {
    isDragging = false;
    listEl.classList.remove("dragging");
});

listEl.addEventListener("mousedown", () => isDragging = true);
