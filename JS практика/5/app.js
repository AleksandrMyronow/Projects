function borderFunc () {
    var rtr = document.getElementById('rtr').value,
        rbr = document.getElementById('rbr').value,
        rbl = document.getElementById('rbl').value,
        rtl = document.getElementById('rtl').value,
        ttr = document.getElementById('ttr'),
        tbr = document.getElementById('tbr'),
        tbl = document.getElementById('tbl'),
        ttl = document.getElementById('ttl');

    var figure = document.getElementById('paint');

    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    ttl.value = rtl;

    figure.style.borderRadius = rtr + 'px ' + rbr + 'px ' + rbl + 'px ' + rtl + 'px ';

}