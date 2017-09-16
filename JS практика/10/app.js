var Global = {
    //Переменные в едином глобальном объекте
    num1 : parseInt(document.getElementById("num1").value),
    num2 : parseInt(document.getElementById("num2").value),
    result : document.getElementById("result"),

    //Плюсуем
    plus: function () {
        var plus = num1 + num2;
        result.innerHTML = plus;
    },
    //Минусуем
    minus: function () {
        var minus = num1 - num2;
        result.innerHTML = minus;
    },
    //Умножаем
    myltiply: function () {
        var myltiply = num1 * num2;
        result.innerHTML = myltiply;
    },
    //Делим
    divid: function () {
        var devide = num1 / num2;
        result.innerHTML = devide;
    }
};


