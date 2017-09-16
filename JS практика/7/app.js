
function animation() {
    var elem = document.getElementById("squere"),
        position = 0,
        id = setInterval(frame, 24);
    function frame() {
        if (position == 350) {
            clearInterval(id)
        } else {
            position +=1;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';
        }
    }
}