function validateForm(valor){
	 /*Escribe tú código aquí */
	var datosForm=[];

	var nombre = document.getElementById("name").value;
	datosForm.push(nombre);

	var apellido = document.getElementById("lastname").value;
	datosForm.push(apellido);

	var correo = document.getElementById("input-email").value;
	datosForm.push(correo);

	var pass = document.getElementById("input-password").value;
	datosForm.push(pass);

	var tipo = document.getElementsByTagName("select")[0].selectedIndex;
	datosForm.push(tipo);
	
	console.log(datosForm);

	datosForm.forEach(function(valor){
		if (datosForm.length == 0){
		var dato = document.createElement("span");
		dato.innerHTML = "Debes escribir tu nombre";
		document.getElementById("error").appendChild(dato);
		}
	});
}

/*function validarFormulario(evObject) {
evObject.preventDefault();
	var todoCorrecto = true;
	var formulario = document.form;

		for (var i=0; i<formulario.length; i++) {        
        	if(formulario[i].type =='text') {
                if (formulario[i].value == null || 
                	formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
                    alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
                               todoCorrecto=false;
                }
            }
        }
if (todoCorrecto ==true) {formulario.submit();}
}
*/