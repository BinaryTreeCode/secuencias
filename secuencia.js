var type_sequence_id = document.getElementById("type_razón");
var razon_id = document.getElementById("razon");

var pre_valor_inicial = document.getElementById("value_inicial");
var valor_inicial_id2 = document.getElementById("value_inicial_problem");

var pre_largo = document.getElementById("largo");
var largo_id2 = document.getElementById("largo_problem");

var pre_type_problem = document.getElementById("type_problem");
var ype_problem_id2 = document.getElementById("type_problem_problem");

var Box = document.getElementById("check");

var pre_valor_inicial = pre_valor_inicial
var pre_largo = pre_largo;
var pre_type_problem = pre_type_problem;

Box.addEventListener ("change", function () {
    checkBox = Box.checked;
    if (checkBox == true) {
        pre_valor_inicial = valor_inicial_id2;
        pre_largo = largo_id2;
        pre_type_problem = ype_problem_id2;
    }
    else {
    }
});


let type_sequence, type_problem, problema;
function modulo() {
    inicio = parseInt(pre_valor_inicial.value);
    razon = parseFloat(razon_id.value);
    largo = parseInt(pre_largo.value);
    type_sequence = type_sequence_id.value;
    type_problem = pre_type_problem.value;

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
var resultado;
var btn_posición = document.getElementById("btn_posición");

btn_posición.addEventListener("click", function () { 
    resultado = document.getElementById("resultado_razon_posición");
    imprimir_razon()
});

var btn_array = document.getElementById("btn_array");
btn_array.addEventListener("click", function () {
    resultado = document.getElementById("resultado_razon_array");
    imprimir_razon()
});


function imprimir_razon() {
    var txt = "razon =" + razon;
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




