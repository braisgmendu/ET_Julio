class Dom{
    constructor(){

    }


    createForm(action, def_html) {
		const form = document.getElementById('IU_form');
		form.innerHTML = ''; // Limpiar formulario previo
	
		if (!def_html || typeof def_html !== 'object') {
			console.error('def_html está vacío o no es un objeto válido');
			return;
		}
	
		for (const [key, def] of Object.entries(def_html)) {
			const div = document.createElement('div');
			const campo = document.createElement(def.tipo);
	
			// Configurar atributos del campo
			for (let attr in def.attributes) {
				campo.setAttribute(attr, def.atributos[attr]);
			}
	
			// Crear etiqueta, si corresponde
			if (def.tipo !== 'hidden') {
				const label = document.createElement('label');
				label.setAttribute('id', 'label_' + def.atributos.id);
				label.setAttribute('name', 'label_' + def.atributos.name);
				label.setAttribute('for', def.atributos.id);
				label.textContent = def.etiqueta;
				div.appendChild(label);
			}
	
			// Crear opciones si es un campo select
			if (def.tipo === 'select' && Array.isArray(def.opciones)) {
				def.opciones.forEach((opcion, index) => {
					const option = document.createElement('option');
					option.value = opcion;
			
					// Usar el nombre de la opción correspondiente si existe
					if (def.nombre_options && def.nombre_options[index]) {
						option.className = def.nombre_options[index];
					} else {
						option.textContent = opcion; // Fallback en caso de que no haya nombre
					}
			
					campo.appendChild(option);
				});
			}
	
			// Crear y agregar elementos de error
			const errorSpan = document.createElement('span');
			errorSpan.id = def.div_error || '';
			const errorA = document.createElement('a');
			errorA.id = def.error || '';
			errorSpan.appendChild(errorA);
	
			// Agregar campo y errores al contenedor
			div.appendChild(campo);
			div.appendChild(errorSpan);
	
			// Agregar link, si corresponde
			if (def.link) {
				const link = document.createElement('a');
				link.id = def.link.id;
				link.href = def.link.href;
				const img = document.createElement('img');
				img.src = def.link.src;
				link.appendChild(img);
				div.appendChild(link);
			}
	
			// Agregar el div al formulario
			form.appendChild(div);
		}
	}


	construirSelect(){

		document.getElementById("seleccioncolumnas").innerHTML = '';
		
		let optionselect = '';
		for (let atributo of this.atributos){
			optionselect = document.createElement('option');
			optionselect.className = atributo;
			optionselect.innerHTML = atributo;
			optionselect.setAttribute("onclick","validar.modificarcolumnasamostrar('"+atributo+"');");
			if (this.columnasamostrar.includes(atributo)){
				optionselect.selected = true;
			}
			document.getElementById("seleccioncolumnas").append(optionselect);
		}
		setLang();
	}
	
	hacertabla() {
		// Títulos
		document.getElementById("text_title_page").className = "text_titulo_page_" + this.entidad;
		document.getElementById('title_page').style.display = 'block';
	
		if (this.datos == "") {
			document.getElementById("id_tabla_datos").style.display = 'block';
			document.getElementById('titulostablacabecera').innerHTML = '';
			document.getElementById('muestradatostabla').innerHTML = '';
			document.getElementById('muestradatostabla').className = 'RECORDSET_VACIO';
		} else {
			let textolineatitulos = '<tr>';
	
			for (let atributo of this.atributos) {
				textolineatitulos += '<th class="' + atributo + '">' + atributo + '</th>';
			}
	
			textolineatitulos += '<th colspan="3"></th>';
			textolineatitulos += '</tr>';
	
			let cabecera = document.getElementById("titulostablacabecera");
			cabecera.innerHTML = textolineatitulos;
	
			// Filas
			let textolineadatos = '';
	
			for (let i = 0; i < this.datos.length; i++) {
				textolineadatos += '<tr class="tabla-fila">';
	
				for (let clave in this.datos[i]) {
					if (this.datosespecialestabla.includes(clave)) {
						let valorcolumna = this.change_value_IU(clave, this.datos[i][clave]);
						textolineadatos += '<td class="tabla-td-' + clave + '">' + valorcolumna + '</td>';
					} else {
						// Limpieza de código no deseado incrustado HTML y script
						let san = (obj) => {
							let value = obj?.toString() || '';
							return value.replace(/[&<>"'`]/g, function (match) {
								switch (match) {
									case '&': return '&amp;';
									case '<': return '&lt;';
									case '>': return '&gt;';
									case '"': return '&quot;';
									case "'": return '&#039;';
									case '`': return '&#x60;';
								}
							});
						}
						let valorE = san(this.datos[i][clave]);
						textolineadatos += '<td class="tabla-td-' + clave + '">' + valorE + '</td>';
					}
				}
	
				// Crear los td para cada botón de llamada a función de formulario de acción (EDIT, DELETE O SHOWCURRENT)
				let lineaedit = this.crearboton(this.entidad, 'EDIT', JSON.stringify(this.datos[i]));
				let lineadelete = this.crearboton(this.entidad, 'DELETE', JSON.stringify(this.datos[i]));
				let lineashowcurrent = this.crearboton(this.entidad, 'SHOWCURRENT', JSON.stringify(this.datos[i]));
	
				textolineadatos += lineaedit + lineadelete + lineashowcurrent;
				textolineadatos += '</tr>';
			}
	
			let cuerpo = document.getElementById('muestradatostabla');
			cuerpo.innerHTML = textolineadatos;
		}
	
		setLang();
	}
	
	modificarcolumnasamostrar(atributo){


		let nuevascolumnas = Array();
		if (this.columnasamostrar.includes(atributo)){
			// borrar ese atributo
			for (let i=0;i<this.columnasamostrar.length;i++){
				if (this.columnasamostrar[i] == atributo){}
				else{
					nuevascolumnas.push(this.columnasamostrar[i]);
				}
			}
			this.columnasamostrar = nuevascolumnas;
		}
		else{
			// añadir
			this.columnasamostrar.push(atributo);
		}
	
	
		this.crearTablaDatos();
	}
	
	mostrarocultarcolumnas(){
	
		for (let columna of this.atributos){
			if (this.columnasamostrar.includes(columna)){}
			else{
				//document.querySelector("th[class='"+columna+" tabla-th-"+columna+"']").style.display = 'none';
				document.querySelector("th[class='"+columna+"']").style.display = 'none';
				let arraytds = document.querySelectorAll("td[class='tabla-td-"+columna+"']");
				for (let i=0;i<arraytds.length;i++){
					arraytds[i].style.display = 'none';
				}
			}
		}
	
	
	}
	
    mostrar_error_campo(id, codigoerror){
        document.getElementById('div_error_'+id).style.display = 'inline';
        document.getElementById('div_error_'+id).innerHTML = codigoerror;
        document.getElementById('div_error_'+id).className = codigoerror;
        document.getElementById(id).className = 'errorcampo';
        document.getElementById('submit_button').focus();
        setLang();
    }
    
    
    

    mostrar_exito_campo(id){
        document.getElementById('div_error_'+id).style.display = 'none';
        document.getElementById('div_error_'+id).innerHTML = '';
        document.getElementById(id).className = 'exitocampo';
    }

	crearboton(entidad, accion, parametros){
        let columna = document.createElement('td');
        let opcion = document.createElement('img');
        opcion.src = "./iconos/"+accion+'.png';
        let textoonclick = "validar.createForm_"+accion+"("+parametros+");"
        opcion.setAttribute('onclick',textoonclick);
        columna.appendChild(opcion);
        return columna.outerHTML;
    
	}

	cerrar_formulario(){

        document.getElementById("IU_form").innerHTML = '';
        document.getElementById("IU_form").setAttribute('onsubmit',"");
        document.getElementById("IU_form").setAttribute('action',"");
        document.getElementById("div_IU_form").style.display = 'none';

    }

    cerrar_test(){

        document.getElementById('div_IU_test').style.display = 'none'; //Para ocultarlo
        //Para limpiarlo
        document.getElementById('resultadodeftest').innerHTML = '';
        document.getElementById('tablaresultadostest').innerHTML = '';
        document.getElementById('resultadodefpruebas').innerHTML = '';
        document.getElementById('tablaresultadosprueba').innerHTML = '';
        document.getElementById('resultadotest').innerHTML = '';
        document.getElementById('salidaresultadosprueba').innerHTML = '';

    }

    cerrar_tabla(){

        document.getElementById("titulostablacabecera").innerHTML = '';
        document.getElementById("muestradatostabla").innerHTML = '';
        document.getElementById("id_tabla_datos").style.display = 'none';
        document.getElementById("title_page").style.display = 'none';
        document.getElementById("workspace").style.display = 'none';

        this.ocultar_boton_test();
        this.cerrar_test();

    }

    ocultar_boton_test(){
        document.getElementById('botonTEST').style.display = 'none';
    }

    mostrar_boton_test(){
        document.getElementById('botonTEST').style.display = 'inline';
    }

    abrirModalError(errorMsg) {
        document.getElementById('error_action_modal').style.display = 'block';
        document.getElementById('modal_action_overlay').style.display = 'block';
        document.getElementById('error_action_msg').className = errorMsg;
        setLang();
    }

    cerrarModalError(){
        document.getElementById('error_action_modal').style.display = 'none';
        document.getElementById('modal_action_overlay').style.display = 'none';
        //document.getElementById('error_action_msg').removeAttribute('class');
    }
    // Mostrar el modal
    mostrarModal() {
    const modal = document.getElementById('modalResultados');
    modal.style.display = 'block'; // Mostrar el modal
}

// Cerrar el modal
    cerrarModal() {
        const modal = document.getElementById('modalResultados');
        modal.style.display = 'none'; // Ocultar el modal
    }

}