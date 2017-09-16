const colorPicker = document.getElementById('colorPicker');
const redInput = document.getElementById('rangeRed');
const greenInput = document.getElementById('rangeGreen');
const blueInput = document.getElementById('rangeBlue');

// Функция принимает 3 аргумента (цвета) по схеме RGB (red, green, blue)
function rangeFunction(red, green, blue) {
  console.log(red, green, blue)
    colorPicker.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Вовесили события на 3 рейндж поля
redInput.addEventListener('change', (e) => {
  rangeFunction(e.currentTarget.value, greenInput.value, blueInput.value);
});
greenInput.addEventListener('change', (e) => {
  rangeFunction(redInput.value, e.currentTarget.value, blueInput.value);
});
blueInput.addEventListener('change', (e) => {
  rangeFunction(redInput.value, greenInput.value, e.currentTarget.value);
});
