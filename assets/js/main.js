/*document.getElementById("btnStart").addEventListener("click",escondoElTerribleSection); 
function escondoElTerribleSection(){
var x = document.getElementById('tablero');
 if (x.style.display === 'none') {
     x.style.display = 'block';
 } else {
     x.style.display = 'none';
 }
};*/

document.getElementById("btnBecome").addEventListener("click", validar);
var validar = function(){
 var telefono = document.getElementById("inputForm").value;
 if(telefono == ""){
 	alert("Por favor, ingrese su número de teléfono");
 }
}


