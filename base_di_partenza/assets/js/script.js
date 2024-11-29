const header = document.querySelector("header");
const btnStart = document.getElementById("btnStart");

window.addEventListener("scroll", scroll);

function scroll() {
    if (window.scrollY > 700) {
        header.classList.add("white");
        btnStart.id = "green";
    } else if (window.scrollY < 700) {
        header.classList.remove("white");
        btnStart.id = "btnStart";
    }
}

function randomLetter() {
    const letters = document.querySelectorAll("g[stroke-linecap=butt]");
    let random = Math.floor(Math.random() * letters.length);
    let currentLetter = letters[random];
    return currentLetter;
}

function changeOpacity() {
    let letter = randomLetter();
    let opacity = parseInt(letter.getAttribute("opacity"));
    if (opacity === 0) {
        letter.setAttribute("opacity", 1);
    } else {
        letter.setAttribute("opacity", 0);
    }
}

function disappearLetter() {
    setInterval(function () {
        changeOpacity();
    }, 100);
}

window.onload = function () {
    disappearLetter();
}