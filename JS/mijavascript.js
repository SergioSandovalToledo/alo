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


/*
   Expresiones regulares:
       Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.
       https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
   Página para evaluar expresiones regulares: https://regex101.com/
   sintaxis:
       /patron/
   Banderas:
       i: ignore case. No diferencia entre mayusculas y minúsculas
       g: global. Busca de forma global, es decir, no se para después de la primera coincidencia
   Comodines:
       -Sustitución: Define un comodín dentro del patron. El símbolo es el "."
       -Listado de caracteres válidos: Entre corchetes se pone una lista de los caracteres válidos.
       [aeiou] Con esto cogeríamos todas las vocales
       -Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos un rango. [a-z] Todas las letras minúsculas.
       Tabla ASCII https://ascii.cl/es/
       -Mezcla entre rangos y listas:
           Podemos unir los dos anteriores en una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" y la letra "u"
       -Cadenas completas:
           Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por un pipe. (lorem|amet) es válida la palabra "lorem" y la palabra "amet"
   Delimitadores:
       ^ Antes de este símbolo no puede haber nada
       $ Después de este símbolo no puede haber nada
       ^hola$
   Cantidad:
       - llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles.
           {n} Se tiene que repetir n veces
           {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
           {n,} Se tiene que repetir como mínimo n veces y sin máximo
       ^[a-zA-Z]{1,3}@{1}$
       -asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.  .*@.*\..*
       -interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
           ^[ae]?$
       - operador +: lo que está antes del + tiene que estár una vez como mínimo
       A-[0-9]+
   Caracteres:
       \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de linea y retorno de carro. ^[a-zA-Z]+\s[a-zA-Z]+$
       \S: Coincide con todo menos caracteres de espacio ^\S{5}$
       \d: Coincide con un carácter de número. Equivalente a [0-9] ^\d{5}$
       \D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9] ^\D{5}$
       \w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_] ^\w+@$
       \W: Coincide con todo menos caracteres de palabra. ^\W+$
*/


/* fr.juilett@profesor.duoc.cl*/
//var texto= document.getElementById("titulo_jumbo").textContent;
//var RegEx= /Texto/i//con esto tiene ignore case
//var RegEx= /Texto/gi// para que busque todo lo que este en el texto ademas del ignore case
//var RegEx= /[a-z]/gi// para que busque todas las letras del texto
//var RegEx= /[aeiou123]/ //mejor usa los de arriba 
//var titulo = "uncorreo@lacosa.cl"
//var RegEx= /^[a-zA-Z0-9]$/ //con esto buscas desde la a-z minusculas A-Z Mayusculas 0-9 Numeros
//var RegEx= /^[a-zA-Z0-9]\@[a-zA-Z0-9]+\.[a-zA-Z0-9]/ ///[a-zA-Z0-9]/
//var nombre= "Francisco"
//var RegEx2= /^[a-zA-Z]{3,12}$/;//minimo y maximo
//para testear



//alert(RegEx.test(titulo));
//alert(RegEx2.test(nombre));
/*ar edad = 33333;
var RegEx3 = /^\d{5}$/
alert(RegEx3.test(edad));*/

