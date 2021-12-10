var razon_id = document.getElementById("razon");
var largo_id = document.getElementById("largo");
var valor_inicial_id = document.getElementById("value_inicial");
var type_sequence_id = document.getElementById("type_razón");
var type_problem_id = document.getElementById("type_problem");

let type_sequence, type_problem, problema;
function modulo() {
    inicio = parseInt(valor_inicial_id.value);
    razon = parseFloat(razon_id.value);
    largo = parseInt(largo_id.value);
    type_sequence = type_sequence_id.value;
    type_problem = type_problem_id.value;

    secuencia.push(inicio);
    tiempo.push(1);

    problema = {
        value: true,
        sequence: type_sequence,
        problem: type_problem,
    }
    if (type_sequence == "aritmética") {
        arimetica();
    } else {
        geometrica();
    }
    grafica();
    imprimir();
    console.log(secuencia);
    secuencia = [];
    tiempo = [];
}

var secuencia = [];
var tiempo = [];
var i = 0;
var razon, largo, razon1, razon2, inicio;

function geometrica() {
    if (problema.value == true && problema.problem == "lineal") {
        i = 1;
        let n = 0;
        while (i < largo) {
            var termino = secuencia[n] * razon;
            console.log(termino);
            // termino += secuencia[n];
            secuencia.push(termino);
            tiempo.push(i + 1);
            n++;
            i++;
        }
        i = 1;
    } else if (problema.value == true && problema.problem == "reverse") {
        secuencia.push(inicio);
        let n = 0;
        while (i < largo) {
            var termino = secuencia[0] / razon;
            secuencia.unshift(termino);
            tiempo.push(i + 1);
            console.log(termino);
            n++;
            i++;
        }
    } else {
        if (secuencia[0] == 1) {
            razon1 = secuencia[2] / secuencia[1];
            razon2 = secuencia[3] / secuencia[2];
            razon1 = parseFloat(razon1.toFixed(3));
            razon2 = parseFloat(razon2.toFixed(3));
            var txt = secuencia[2] + " / " + secuencia[1] + " = " + razon1
                + " y " + secuencia[3] + " / " + secuencia[2] + " = " + razon2 + " razón  = ";
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
        console.log(razon1 + " = " + razon2 + " " + razon);
    }
    dataset = {
        labels: tiempo,
        datasets: [
            {
                label: "pesos",
                fill: false,
                backgroundColor: "Scooter",
                borderColor: "#2648a8",
                data: secuencia
            }
        ]
    }
}



function arimetica() {
    if (problema.value == true && problema.problem == "lineal") {
        i = 1;
        let n = 0;
        while (i < largo) {
            var termino = secuencia[n] + razon;
            console.log(termino);
            // termino += secuencia[n];
            secuencia.push(termino);
            tiempo.push(i + 1);
            n++;
            i++;
        }
        i = 1;
    } else if (problema.value == true && problema.problem == "reverse") {
        secuencia.push(inicio);
        let n = 0;
        while (i < largo) {
            var termino = secuencia[0] - razon;
            secuencia.unshift(termino);
            tiempo.push(i + 1);
            console.log(termino);
            n++;
            i++;
        }
    } else { }
    dataset = {
        labels: tiempo,
        datasets: [
            {
                label: "pesos",
                fill: false,
                backgroundColor: "Scooter",
                borderColor: "#2648a8",
                data: secuencia
            }
        ]
    }
}

const ctx = document.getElementById('canva');
function grafica() {
    const myChart = new Chart(ctx, {
        type: 'line',
        data:
            dataset,
        options: {
            responsive: true,
            plugins: {
                legend: true,
                title: {
                    display: true,
                    text: 'La carrera'
                },
            },
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                x: {
                    // min: 0,
                    // max: 1000,
                    display: true,
                    title: {
                        display: true,
                        text: 'segundos',
                        type: 'linear'
                    }
                },
                y: {
                    // min: 0,
                    // max: 1000,
                    display: true,
                    title: {
                        display: true,
                        text: 'metros',
                        type: 'linear'
                    }
                }
            }
        }
    });
}

// imprime secuenica en el id resultado
function imprimir() {
    var resultado = document.getElementById("resultado");
    var txt = "";
    for (let i = 0; i < secuencia.length; i++) {
        txt += secuencia[i] + " ";
    }
    resultado.innerHTML = txt;
}


var tip = false, diferencia, pre_razon;
function hallar_razon(ti, tf, Pi, Pf) {
    if (ti < 0) {
        ti = Math.abs(ti);
    }
    // if (tip = false) {
    //     diferencia = tf - ti;
    // } else {
    //     diferencia = tf + tip;
    // }

    diferencia = Pf - Pi;
    razon = 1;
    pre_razon = (diferencia * razon) - ti;
    iteradora = diferencia * razon
    while (iteradora <= tf) {
        ++razon;
        iteradora = diferencia * razon
        pre_razon = (diferencia * razon) - ti;
        console.log(pre_razon);
    }
    return razon;
}




