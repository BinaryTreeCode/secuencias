var razon_id = document.getElementById("razon");
var largo_id = document.getElementById("largo");
var problema = false;
var secuencia = [2,4, 8];
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
            razon2 = secuencia[1] / secuencia[2];
            razon = parseInt(razon2.toFixed(3));
        } else {
            razon1 = secuencia[0] / secuencia[1];
            razon2 = secuencia[1] / secuencia[2];
            razon1 = parseInt(razon1.toFixed(3));
            razon2 = parseInt(razon2.toFixed(3));
            if (razon1 == razon2) {
                console.log(secuencia[2] + " / " + secuencia[3] + " = " + razon2);
                razon = razon1;
            }
            else {
                razon = false;
                console.log("No es una secuencia geometrica");
            }
        }
    }
    console.log(razon1 + " = " + razon2 + " " + razon);
    razon = 1;
}


