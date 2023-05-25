const listItemsEl = document.querySelector(".listItems");
const itemsEl = listItemsEl.querySelectorAll(".item");

itemsEl.forEach(item => {

    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });

    item.addEventListener("dragend", () =>item.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");

    let siblings = [...listItemsEl.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    listItemsEl.insertBefore(draggingItem, nextSibling);
}

listItemsEl.addEventListener("dragover", initSortableList);
listItemsEl.addEventListener("dragenter", e => e.preventDefault());