console.clear();

// 1 Checkbox

// function checkFunc () {
//     var cost = 500;
//     var dostavka = 35;
//     var check = document.getElementById('checkBox1');
//     if (check.checked) {
//         alert (cost + dostavka);
//     } else {
//         alert (cost);
//     }
// }

// 2 Radiobatton
function radio() {
    var cost = 500,
        pochta = 15,
        novayaPochta = 35,
        kyryer = 40,
        samovuvoz = 0,
        redcheck = document.getElementsByName('r1'),
        length = redcheck.length;
        for (var i = 0; i < length; i += 1) {
            if (redcheck[i].checked) {
                if (redcheck[i].value == 0) {
                    console.log(cost + kyryer);
                } else if (redcheck[i].value == 1) {
                    console.log(cost + novayaPochta);
                } else if (redcheck[i].value == 2) {
                    console.log(cost + pochta);
                } else {
                    console.log(cost + samovuvoz);
                }
            }
        }
}
