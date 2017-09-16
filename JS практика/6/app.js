var btn = document.getElementById("myBtn"),
    modal = document.getElementById("myModal"),
    span = document.getElementsByClassName("close");

btn.onclick = function() {
    modal.style.display = "block"
}

modal.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}
