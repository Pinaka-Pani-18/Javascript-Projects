var containerEl = document.querySelector(".container");

document.addEventListener("mousemove", (event) => {
    try {
        var x = event.pageX ;
        var y = event.pageY;
      } catch (error) {
        alert(error);
      }
      containerEl.style.left = x - 120 + "px";
      containerEl.style.top = y - 120 + "px";
});
