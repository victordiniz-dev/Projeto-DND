function RolarDado(lados) {
    var numero = Math.floor(Math.random() * lados ) +1;
    if  (lados == 20)  {
        document.getElementById("resultadod20").innerText = "Resultado: " + numero;
    }
    if (lados == 6) {
        document.getElementById("resultadod6").innerText = "Resultado: " + numero;
    }
}   

f