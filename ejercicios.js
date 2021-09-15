//alert

function bienvenida (){
    var nombre= window.prompt ("¿Cómo te llamas?");
    console.log (nombre)  
}
bienvenida();

function tuApellido (){
    var apellido= window.prompt ("¿Cual es tu apellido?");
    console.log (apellido)
}
tuApellido();

function saludoC (){
    var saludo= 
    alert("Hola" + nombre + " " + apellido) 
}
saludo();

