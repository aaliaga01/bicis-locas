function validateForm(){
	 /*Escribe tú código aquí */
	var datosForm=[];

	var nombre = document.getElementById("name").value;
	var alfab=/^[a-zA-Z]*$/;

	if( nombre == null || nombre.length == 0){

  		var miDiv = document.createElement("div");//crea id
		miDiv.setAttribute("id", "error");//crea nombre id

		var miSpan = document.createElement("span");//crea span
		miSpan.innerHTML = "Campo Obligatorio";

		var papa= document.getElementById("name").parentNode;//llama al elemento padre
		papa.appendChild(miDiv);//le asigna div creado como hijo
		miDiv.appendChild(miSpan);//le asigna span como hijo a div

	} else if (alfab.test(nombre)){
		datosForm.push(nombre)}
	else {
	datosForm.push(nombre);
	}

	var apellido = document.getElementById("lastname").value;
	datosForm.push(apellido);

	var correo = document.getElementById("input-email").value;
	datosForm.push(correo);

	var pass = document.getElementById("input-password").value;
	datosForm.push(pass);

	var tipo = document.getElementsByTagName("select")[0].selectedIndex;
	datosForm.push(tipo);
	
	console.log(datosForm);

	datosForm.forEach(function(value){
		
		if (datosForm[1] == ""){
		var miDiv = document.createElement("div");//crea id
		miDiv.setAttribute("id", "error");//crea nombre id

		var miSpan = document.createElement("span");//crea span
		miSpan.innerHTML = "Debes ingresar un valor";

		var papa= document.getElementById("lastname").parentNode;//llama al elemento padre
		papa.appendChild(miDiv);//le asigna div creado como hijo
		miDiv.appendChild(miSpan);//le asigna span como hijo a div
		}

		if (datosForm[2] == ""){
		var miDiv = document.createElement("div");//crea id
		miDiv.setAttribute("id", "error");//crea nombre id

		var miSpan = document.createElement("span");//crea span
		miSpan.innerHTML = "Debes ingresar un valor";

		var papa= document.getElementById("input-email").parentNode;//llama al elemento padre
		papa.appendChild(miDiv);//le asigna div creado como hijo
		miDiv.appendChild(miSpan);//le asigna span como hijo a div
		}

		if (datosForm[3] == ""){
		var miDiv = document.createElement("div");//crea id
		miDiv.setAttribute("id", "error");//crea nombre id

		var miSpan = document.createElement("span");//crea span
		miSpan.innerHTML = "Debes ingresar un valor";

		var papa= document.getElementById("input-password").parentNode;//llama al elemento padre
		papa.appendChild(miDiv);//le asigna div creado como hijo
		miDiv.appendChild(miSpan);//le asigna span como hijo a div
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