const htmlCodeEl = document.querySelector("#html");
const cssCodeEl = document.querySelector("#css");
const jsCodeEl = document.querySelector("#js");
const outputEl = document.querySelector("#output");

function run() {

    // Storing the data in Local Storage
    localStorage.setItem('htmlCodeEl', htmlCodeEl.value);
    localStorage.setItem('cssCodeEl', cssCodeEl.value);
    localStorage.setItem('jsCodeEl', jsCodeEl.value);

    // executing & Evaluating HTML, CSS & JS code
    outputEl.contentDocument.body.innerHTML = `<style>${localStorage.cssCodeEl}</style>` + localStorage.htmlCodeEl;
    outputEl.contentWindow.eval(localStorage.jsCodeEl);
}

// If user type anything in the respective code element then it automatically runs and it will show in the output
htmlCodeEl.addEventListener("keyup",()=>{run()})
cssCodeEl.addEventListener("keyup",()=>{run()})
jsCodeEl.addEventListener("keyup",()=>{run()})

// Accessing data stored in Local Storage.
htmlCodeEl.value = localStorage.htmlCodeEl;
cssCodeEl.value = localStorage.cssCodeEl;
jsCodeEl.value = localStorage.jsCodeEl;