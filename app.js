/*
// Variables

//La vieja forma = scope global (se pueden usar en cualquier parte del programa)
// var numerosEnteros;

//Las nuevas formas de declarar variables (ES6)
//let miSegundaVariable;   // = scope local (solo puede ser llamada dentro de la funcion donde fue creada) , fuera de esa funcion no existe 

//const otraFormaDeVariable; // scope mixto (global y local segun donde se declare)

// Suma
var primerNumero = 15000;
var segundoNumero = 545646;
var resultado = primerNumero * segundoNumero;
console.log("Tu resultado es: " + resultado);

// Nombre
var primerNombre = "Ezequiel";
var segundoNombre = "Agustín";
var nombreCompleto = primerNombre + " " + segundoNombre;
console.log(nombreCompleto);

// Tipos de datos
/*
Numericos: INT (enteros) = 1 o FLOAT (flotantes) = 1.5,
Texto: Strings (Alfanumericas) = "Esto es un texto", "152546",
*/

// Operadores Aritmeticos
/*
+ = suma
- = resta
/ = division
* = multiplicación
/// Operadores extendidos
% = resto
%% = modulo
 aca cierro comentario/  

// Funcion Math
var numeroExperimental = 10;
console.log(Math.pow(numeroExperimental, 3));
console.log(Math.round(1.77777777777));
console.log(Math.round(Math.random()*1000));

// Numeros aleatorios limitados
function numeroAleatorioVectorizado(min, max){
    console.log(Math.round((Math.random() * (max - min) + min)))
}

numeroAleatorioVectorizado(10, 100);
*/

function tercerBoton(){ //Creo la funcion 3er boton
    window.prompt('Como es tu nombre?');
    let nombre = (tercerBoton)
    window.confirm(nombre);
}
