function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password").value;
	var tipo = document.getElementsByTagName("select")[0].selectedIndex;

	if (nombre.length==0){
		var msnNombre = document.createElement("span");
		msnNombre.innerHTML = "Debes escribir tu nombre";
		document.getElementById("errorNombre").appendChild(msnNombre);
		return false;
	}

	if (apellido.length==0){
		var msnApellido = document.createElement("span");
		msnApellido.innerHTML = "Debes escribir tu apellido";
		document.getElementById("errorApellido").appendChild(msnApellido);
		return false;
	}

	if (correo.length==0){
		var msnCorreo = document.createElement("span");
		msnCorreo.innerHTML = "Debes escribir tu nombre";
		document.getElementById("errorCorreo").appendChild(msnCorreo);
		return false;
	}

	if (pass.length==0){
		var msnPass = document.createElement("span");
		msnPass.innerHTML = "Debes escribir tu nombre";
		document.getElementById("errorPass").appendChild(msnPass);
		return false;
	}
}