

/*Validaciones*/
var validarBecome = function(){ //funcion que valida el numero de teléfono
var telefono = document.getElementById("inputForm").value; //se asigna el valor del input dentro de una variable
if(telefono === ""){ // si el input está vacío, 
alert("Por favor, ingrese su número de teléfono"); //entonces envía una alerta
}
};

var validarStart = function(){  
var inputX = document.getElementById("xInput").value; //se asigna el valor del input dentro de la variable inputX
var inputY = document.getElementById("yInput").value; //se asigna el valor del input dentro de la variable inputY
if(inputX > 10 || inputX == "" || inputX < 1){ //si el inputX está vacío, o es menor a 1 o mayor a 10
	alert("Por favor, ingrese su posición del 1 al 10"); //envía una alerta para correccion
} else if (inputY > 6 || inputY == "" || inputY < 1){ //si el inputY está vacío, o es menor a 1 o mayor a 6
	alert("Por favor, ingrese su posición del 1 al 6"); //envía una alerta para su correccion
}
};
document.getElementById("btnStart").addEventListener("click", validarStart); //pasar la funcion al evento click del boton validarStart
document.getElementById("btnBecome").addEventListener("click", validarBecome); //pasar la funcion al evento click del boton validarBecome

/*desplegar section: esto funciona, pero jamás logré hacerlo funcionar visualmente :(
function escondoElTerribleDiv(){
var x = document.getElementById('tablero');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
}
alert("divitis");
};
document.getElementById("btnStart").addEventListener("click",escondoElTerribleDiv); */


