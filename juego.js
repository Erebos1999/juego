function generar() {
    var matrizfila = new Array();
    let text = ""
    text += "<p>"
    for (let i = 0; i <= 6; i++) {

        text += ' ' + '<input type="number" class="text-center shadow" readonly id="' + i + '" style="width : 100px">' + ' '
    }
    text += "</p>";

    document.getElementById("demo").innerHTML = text

}

function tirar(x) {
    var mayor = 0
    for (let i = 0; i <= 6; i++) {
        document.getElementById(i + "").value = Math.floor(Math.random() * 10)
    }
    for (let j = 0; j <= 6; j++) {
        var cont = 0
        for (let k = 0; k <= 6; k++) {
            if (document.getElementById(j + "").value == document.getElementById(k + "").value) {
                cont += 1
            }

        }
        if (cont > mayor) {
            mayor = cont
            var valor = document.getElementById(j + "").value
        }
    }
    if (mayor == x) {
        document.getElementById("rest").innerHTML = "Felicidades Ganaste tu apuesta se multiplico * " + x + " a " + +(document.getElementById("apuesta").value * x) + " $"
    } else {
        document.getElementById("rest").innerHTML = "Lo lamento el maximo de numeros repetidos fue el numero " + valor + " se repitio " + mayor + " veces"
    }
    // window.alert("el numero " + valor + " se repitio " + mayor + " veces")
}