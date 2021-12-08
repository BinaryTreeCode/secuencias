var razon_id = document.getElementById("razon");
var largo_id = document.getElementById("largo");
var problema = false;
var secuencia = [54, 36, 24, 16];
var i = 0;

var razon, largo, razon1, razon2;
function operacion() {

    razon = parseInt(razon_id.value);;
    largo = parseInt(largo_id.value);
    i = 1;
    if (problema == true) {
        while (i < largo) {
            secuencia.push(razon * i);
            i++;
        }
    } else {
        if (secuencia[0] == 1) {
            razon1 = secuencia[2] / secuencia[1];
            razon2 = secuencia[3] / secuencia[2];
            razon1 = parseFloat(razon1.toFixed(3));
            razon2 = parseFloat(razon2.toFixed(3));
            var txt = secuencia[2] + " / " + secuencia[1] + " = " + razon1
                    + " y " + secuencia[3] + " / " + secuencia[2] + " = " + razon2 + " razón  = " ;
        } else {
            razon1 = secuencia[1] / secuencia[0];
            razon2 = secuencia[2] / secuencia[1];
            razon1 = parseFloat(razon1.toFixed(3));
            razon2 = parseFloat(razon2.toFixed(3));
            var txt = secuencia[1] + " / " + secuencia[0] + " = " + razon1 + 
            " y " + secuencia[2] + " / " + secuencia[1] + " = " + razon2 + " razón  = ";
        }
        if (razon1 == razon2) {
            razon = razon1;
            console.log(txt + razon);
        }
        else {
            razon = false;
            console.log("No es una secuencia geometrica");
        }
    }
    console.log(razon1 + " = " + razon2 + " " + razon);
}

