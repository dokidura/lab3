const menuBTN = document.querySelector(".menuBTN")
const after = document.querySelector(".after")

function hide() {
    after.classList.toggle("hidden");
}

menuBTN.addEventListener("click", hide)