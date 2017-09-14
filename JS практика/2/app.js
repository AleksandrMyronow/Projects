// function selectFunction() {
//     var select = document.getElementById('mySelect').selectedIndex;
//     var options  = document.getElementById('mySelect').options;
//     //alert('You choose ' + options[select].text);
// }

function rangeFunction() {
    var colorPicker = document.getElementById('colorPicker'),
        redColor = document.getElementById('rangeRed').value,
        greenColor = document.getElementById('rangeGreen').value,
        blueColor = document.getElementById('rangeBlue').value,
        // Как можно смешать три  цвета по типу как в строке ниже но чтобы работало?)
        newColor = [redColor, greenColor, blueColor];
        // RGB = [newColor[0].replace(/"/g), newColor[1].replace(/"/g), newColor[2].replace(/"/g)];
    colorPicker.style.backgroundColor = "green";
}