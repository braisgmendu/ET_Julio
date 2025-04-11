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
}