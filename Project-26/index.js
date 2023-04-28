// to get time for analog clock
const secondHandEl = document.querySelector('.second-hand');
const minuteHandEl = document.querySelector('.minute-hand');
const hourHandEl = document.querySelector('.hour-hand');

function getTimeForAnalog() {
    const date = new Date();

    const seconds = date.getSeconds();
    const secsToDegrees = 6 * seconds + 90;

    const mins = date.getMinutes();
    const minsToDegrees = mins*6 + 90;

    const hour = date.getHours();
    const hourToDegrees = 30 * hour + mins / 2 + 90 ;

    secondHandEl.style.transform = `rotate(${secsToDegrees}deg)`;
    minuteHandEl.style.transform = `rotate(${minsToDegrees}deg)`;
    hourHandEl.style.transform = `rotate(${hourToDegrees}deg)`;
}

setInterval(getTimeForAnalog, 1000);
getTimeForAnalog();


// to get date
const dateEl = document.querySelector(".date");

function getDate(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const date = new Date();
    const fullDate = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear(); 
    dateEl.innerHTML = fullDate
}

getDate();


// to get time for digital clock

const timeEl = document.querySelector(".time");
const ampmEl = document.querySelector(".ampm");

function getTimeForDigital() {
    const date = new Date();

    const seconds = date.getSeconds();
    const mins = date.getMinutes();
    const hour = date.getHours();

    h = hour > 12 ? ("0" + (hour-12)) : ("0" + hour);
    m = mins > 9 ? mins : ("0" + mins);
    s = seconds > 9 ? seconds : ("0" + seconds);
    
    const AmPm = hour > 11 ? "AM" : "PM";
    const fullTime = h + " : " + m + " : " + s ;

    timeEl.innerHTML = fullTime;
    ampmEl.innerHTML = AmPm

    
}

setInterval(getTimeForDigital, 1000);
getTimeForDigital();