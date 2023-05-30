const inputEl = document.querySelector(".input");
const yearEl = document.querySelector(".years");
const monthEl = document.querySelector(".months");
const dayEl = document.querySelector(".days");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click",calculateAge)

const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function calculateAge(){
    let today = new Date();
    let inputDateEl = new Date(inputEl.value);
    let resultMonth,resultDate,resultYear;

    let inputYear = inputDateEl.getFullYear();
    let inputMonth = inputDateEl.getMonth()+1;
    let inputDate = inputDateEl.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapYearCheck(currentYear);

    if(
        (inputYear > currentYear) ||
        ( inputMonth > currentMonth && inputYear == currentYear) || 
        (inputDate > currentDate && inputMonth == currentMonth && inputYear == currentYear))
    {
        alert("You are not born yet");
        displayResult("0","0","0");
        return;
    }

    resultYear = currentYear - inputYear;

    if(currentMonth >= inputMonth){
        resultMonth = currentMonth - inputMonth;
    }
    else{
        resultYear--;
        resultMonth = 12 + currentMonth - inputMonth;
    }

    if(currentDate >= inputDate){
        resultDate = currentDate - inputDate;
    }
    else{
        resultMonth--;
        let days = months[currentMonth];
        console.log(days);
        resultDate = days + currentDate - inputDate;
        console.log(resultDate);
        if(resultMonth < 0){
            resultMonth = 11;
            resultYear--;
        }
    }
    displayResult(resultDate,resultMonth,resultYear);
}

function displayResult(resultDate,resultMonth,resultYear){
    yearEl.innerHTML = resultYear;
    monthEl.innerHTML = resultMonth;
    dayEl.innerHTML = resultDate;
}

function leapYearCheck(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}