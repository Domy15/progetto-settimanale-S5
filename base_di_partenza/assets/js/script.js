const header = document.querySelector("header");
const btnStart = document.getElementById("btnStart");

window.addEventListener("scroll", scroll);

function scroll() {
    if(window.scrollY > 700){
        header.classList.add("white");
        btnStart.id = "green";
    }else if (window.scrollY < 700){
        header.classList.remove("white");
        btnStart.id = "btnStart";
    }
}