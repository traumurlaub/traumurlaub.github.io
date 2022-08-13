const now = new Date();

const target_date = new Date(2072, 6, 8).getTime(); // 8 июля

let years, months, days, hours, minutes, seconds;

const $years = document.getElementById("y");
const $months = document.getElementById("mo");
const $days = document.getElementById("d");
const $hours = document.getElementById("h");
const $minutes = document.getElementById("m");
const $seconds = document.getElementById("s");

function update() {
    const current_date = new Date().getTime();
    let secondsLeft = (target_date - current_date) / 1000;

    years = parseInt(secondsLeft / 31536000);
    secondsLeft = secondsLeft % 31536000;

    months = parseInt(secondsLeft / 2678400);
    secondsLeft = secondsLeft % 2678400;

    days = parseInt(secondsLeft / 86400);
    secondsLeft = secondsLeft % 86400;

    hours = parseInt(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    minutes = parseInt(secondsLeft / 60);
    seconds = parseInt(secondsLeft % 60);

    $years.innerHTML = pad(years, 2);
    $months.innerHTML = pad(years, 2);
    $days.innerHTML = pad(days, 2);
    $hours.innerHTML = pad(hours, 2);
    $minutes.innerHTML = pad(minutes, 2);
    $seconds.innerHTML = pad(seconds, 2);
}


update();

setInterval(update, 1000);

function pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}
