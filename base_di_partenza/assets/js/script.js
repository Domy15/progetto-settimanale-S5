const header = document.getElementById("header");

window.addEventListener("scroll", scroll);

function scroll() {
    if(window.scrollY > 700){
        header.classList.add("white");
    }else if (window.scrollY < 700){
        header.classList.remove("white");
    }
}