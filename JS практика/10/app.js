var Global = {
    //Переменные в едином глобальном объекте
    button: document.getElementsByTagName("button"),
    getValue: function (id) {
        var el = document.getElementById(id).value;
        return parseInt(el);
    },
    num1: this.getValue("num1"),
    num2: this.getValue("num2"),
    inResult: document.getElementById("result").innerHTML
};

    for(var i = 0; i < Global.button.length; i+=1) {
        Global.button[i].onclick = function () {

            switch (this.innerHTML) {
                case "+":
                    outResult = num1 + num2;
                    break;
                case "-":
                    outResult = num1 - num2;
                    break;
                case "*":
                    outResult = num1 * num2;
                    break;
                case "/":
                    outResult = num1 / num2;
                    break;
            }
            inResult = outResult;
        }
    }



