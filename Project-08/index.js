const taskEl = document.getElementById("task");
const listsEl = document.querySelector(".lists");


function clicked(){
    if(taskEl.value===""){
        alert("Task should not be empty")
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskEl.value;
        listsEl.appendChild(li);
        taskEl.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

listsEl.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",listsEl.innerHTML);
}

function getData(){
    listsEl.innerHTML = localStorage.getItem("data");
}

getData();