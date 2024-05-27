//Cree tres variables con datos personales al azar y cuando cargue la página web, muestre un mensaje de bienvenida para el usuario. 
//Modifique el ejercicio anterior para que el usuario sea quien ingrese sus datos.  
//Modifique el ejercicio anterior para mostrar un mensaje (luego del mensaje del ejercicio 1), que le diga al usuario cuántos días ha vivido desde que nació.

//INGRESO DE DATOS PERSONALES
let nombre = prompt("Ingresa tu nombre y apellido", " ") ; // se ingresan 2 parametros siempre
let edad = prompt("Ingrese su edad");
let nacimientoUsuario = prompt("Ingrese su fecha de nacimiento, por favor en formato dd-mm-aaaa");

//CALCULO DIAS VIVIDOS
let nacimientoIngresado = new Date(nacimientoUsuario.split("-").reverse().join("-"));

let fechaActual = new Date();

let diasVividos = fechaActual - nacimientoIngresado;

let calcDiasVividos = Math.floor(diasVividos / 86400000);

//IMPRESION DE DATOS OBTENIDOS
alert("Hola " + nombre );
alert("Has vivido " +  calcDiasVividos + " dias");



