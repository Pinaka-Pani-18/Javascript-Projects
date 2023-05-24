const containerEl = document.querySelector(".container");
const iEl = document.querySelector("i");

// whenever we double click on the container it displays heart at the click position.
containerEl.addEventListener("dblclick", (e) => {

    let x = e.pageX - e.target.offsetLeft - 15;
    let y = e.pageY - e.target.offsetTop - 15;

    iEl.style.left = `${x}px`;
    iEl.style.top = `${y}px`;

    // adding active class
    iEl.classList.add("active");

    // removing active class after 1.5sec
    setTimeout(() => {
        iEl.classList.remove("active");
    }, 1500);

});