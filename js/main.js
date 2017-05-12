
var resultado=document.getElementById("clientes")

function mostrarData(nombre, apellido, email, direccion, fono, seleccion){
	var nombre = document.getElementById("nombre").value;

	/*function nombre(){
	var nombre = document.getElementById("nombre").value;
	if (nombre==="" || nombre===undefined || nombre.length===0)	{
	alert("Error, debe ingresar nombre");}

	else if (/[0-9]/.test(nombre)){
	alert("Error, debe ingresar solo letras");
}
}
nombre();*/

var apellido = document.getElementById("apellido").value;

/*function apellido(){
	var apellido = document.getElementById("apellido").value;
	if (apellido==="" || apellido===undefined || apellido.length===0)	{
	alert("Error, debe ingresar apellido");}

	else if (/[0-9]/.test(nombre)){
	alert("Error, debe ingresar solo letras");
}
}
apellido();*/

var email = document.getElementById("email").value;

/*function email(){
	var email = document.getElementById("email").value;
	if (email==="" || email===undefined || email.length===0) {
	alert("Error, debe ingresar email");}
}

email();*/

var direccion = document.getElementById("direccion").value;

/*function direccion(){
	var direccion = document.getElementById("direccion").value;
	if (direccion==="" || direccion===undefined || direccion.length===0)	{
	alert("Error, debe ingresar dirección");}
}

direccion();*/

var fono= document.getElementById("fono").value;

/*function fono(){
	var fono= document.getElementById("fono").value;
	if (fono==="" || fono===undefined || fono.length===0)	{
	alert("Error, debe ingresar teléfono");}
}

	else if (!/[0-9]/.test(fono)){
	alert("Error, debe ingresar solo números");
}

fono();*/

var seleccion=document.getElementsByTagName("select");

/*function opciones(){
	var seleccion=document.getElementsByTagName("select");
	for (var i=0; i<seleccion.length; i++){
		if(seleccion[i].value=="0"){
			alert("Debe elegir opción");
		}
	}
}
opciones();*/

var info=("Nombre: " + nombre + <br> + "Apellido: " + apellido + <br> + "Email: " + email+ "Dirección: "+ direccion+ <br>+ "Teléfono: "+ telefono+ <br>+ "Selección" + seleccion);
	resultado.innerHTML=(info);
}
mostrarData();

function opciones(){
	var seleccion=document.getElementsByTagName("select");
	for (var i=0; i<seleccion.length; i++){
		if(seleccion[i].value=="0"){
			alert("Debe elegir opción");
		}
	}
}
opciones();