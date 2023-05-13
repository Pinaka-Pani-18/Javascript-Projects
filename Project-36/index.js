const inputEl = document.querySelector("input");
const eyeEl = document.querySelector(".input i");
const checkListEl = document.querySelectorAll(".allChecks li");

// regex means regular expression and here, I have taken separate regex & index in a check array.
// You don't need to remember all these expressions and you can refer from below link.
// Regular expression checks were took from https://www.section.io/engineering-education/password-strength-checker-javascript/
// you can refer any other site also but I referred this website.
const checks = [
    { regex: /.{10,}/, index: 0 },       // At least of 10 characters
    { regex: /[A-Z]/, index: 1},         // At least upperCase
    { regex: /[a-z]/, index: 2 },        // At least one lowerCase
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    {regex: /[0-9]/, index: 4}           // At least one uppercase letter
]

inputEl.addEventListener("keyup", (event) => {
    checks.forEach(e => {

        // it checks if the password matches the check regex
        const valid = e.regex.test(event.target.value);
        const checkItem = checkListEl[e.index];

        // if regex is valid then it adds text decoration to line-through or else none.
        if (valid) {
            checkItem.style = "text-decoration: line-through";
        } else {
            checkItem.style = "text-decoration: none";
        }
    });
});

// when we click on eye icon It toggles between eye icon slash & eye icon and also input toggles between text and password based on the eye icon.
eyeEl.addEventListener("click", () => {
    eyeEl.className = `fa-solid fa-eye${inputEl.type === "password" ? "" : "-slash"}`;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
});