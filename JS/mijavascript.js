alert(1);

// VARIABLES
var numero = 1;
var numero2 = 2;
var palabra = "hola mundo";
var isAuto = true;

var resp = palabra + numero2;
var resp2 = numero + " " + numero2 + " " + palabra + " " + isAuto;


console.log("Resultado : " + resp);
console.log("Resultado2 : " + resp2);

var titulo = document.getElementById("titulo_jumbo");

titulo.innerHTML = "TEXTO DESDE JAVASCRIPT";
document.getElementById("texto_jumbo").innerHTML = "Resultado2 : " + resp2;


function fnCambiarTexto() {
    titulo.innerHTML = "TITULO CAMBIADO POR JAVASCRIPT";
}

function fnCambiarEstilo() {
    titulo.style.fontSize = "45px";
}