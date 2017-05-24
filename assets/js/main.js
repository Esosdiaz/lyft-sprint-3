/*document.getElementById("btnStart").addEventListener("click",escondoElTerribleSection); 
function escondoElTerribleSection(){
var x = document.getElementById('tablero');
 if (x.style.display === 'none') {
     x.style.display = 'block';
 } else {
     x.style.display = 'none';
 }
};*/

/*Validaciones*/
var validarBecome = function(){  
var telefono = document.getElementById("inputForm").value;
if(telefono === ""){
alert("Por favor, ingrese su número de teléfono");
}
};

var validarStart = function(){  
var inputX = document.getElementById("xInput").value;
var inputY = document.getElementById("yInput").value;
if(inputX > 10 || inputX == "" || inputX < 1){
	alert("Por favor, ingrese su posición del 1 al 10");
} else if (inputY > 6 || inputY == "" || inputY < 1){
	alert("Por favor, ingrese su posición del 1 al 6");
}
};
document.getElementById("btnStart").addEventListener("click", validarStart);
document.getElementById("btnBecome").addEventListener("click", validarBecome);

/*desplegar section*/
function escondoElTerribleDiv(){
var x = document.getElementById('tablero');
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
}
};
document.getElementById("btnStart").addEventListener("click",escondoElTerribleDiv); 


