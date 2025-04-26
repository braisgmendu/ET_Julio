class project extends Entidad_Abstracta{

    constructor(){
        super();
        this.entidad = 'project';
        this.def_estructura = estructura_project;
        this.atributos = estructura_project.attributes_list;
        this.columnasamostrar = estructura_project.columnas_visibles_tabla;
        this.datosespecialestabla = estructura_project.columnas_modificadas_tabla;
        this.validations = new Dom_validations(new Validaciones_Atomicas, this.entidad);
        this.inicializar(this.entidad,this.def_estructura);
    }

    /*cargar_formulario_estatico(){
        this.action = '';

        let formulario = `
            <label id="label_id_project" class="label_id_project">ID del Proyecto:</label>
            <input type="text" id="id_project" name="id_project" ></input>
            <span id="div_error_id_project"><a id="error_id_project"></a></span>
            <br>

            <label id="label_name_project" class="label_name_project">Nombre del Proyecto:</label>
            <input type="text" id="name_project" name="name_project"></input>
            <span id="div_error_name_project"><a id="error_name_project"></a></span>
            <br>

            <label id="label_start_date_project" class="label_start_date_project">Fecha de Inicio:</label>
            <input type="text" id="start_date_project" name="start_date_project"></input>
            <span id="div_error_start_date_project"><a id="error_start_date_project"></a></span>
            <br>

            <label id="label_end_date_project" class="label_end_date_project">Fecha de Finalización:</label>
            <input type="text" id="end_date_project" name="end_date_project"></input>
            <span id="div_error_end_date_project"><a id="error_end_date_project"></a></span>
            <br>

            <label id="label_responsable_project" class="label_responsable_project">Responsable del Proyecto:</label>
            <input type="text" id="responsable_project" name="responsable_project"></input>
            <span id="div_error_responsable_project"><a id="error_responsable_project"></a></span>
            <br>

            <label id="label_organization_project" class="label_organization_project">Organización:</label>
            <input type="text" id="organization_project" name="organization_project"></input>
            <span id="div_error_organization_project"><a id="error_organization_project"></a></span>
            <br>

            <label id="label_description_project" class="label_description_project">Descripción:</label>
            <textarea rows="5" cols="33" id="description_project" name="description_project"></textarea>
            <span id="div_error_description_project"><a id="error_description_project"></a></span>
            <br>

            <label id="label_file_project" class="label_file_project">Archivo del Proyecto:</label>
            <input type="file" id="file_project" name="file_project"></input>
            <span id="div_error_file_project"><a id="error_file_project"></a></span>
            <a id="link_file_project" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/">
                <img src="./iconos/FILE.png" />
            </a>
            <br>

            <label id="label_nuevo_file_project" class="label_nuevo_file_project">Nuevo Archivo del Proyecto:</label>
            <input type="file" id="nuevo_file_project" name="nuevo_file_project"></input>
            <span id="div_error_nuevo_file_project"><a id="error_nuevo_file_project"></a></span>
            <br>

            <label id="label_code_project" class="label_code_project">Código del Proyecto:</label>
            <input type="text" id="code_project" name="code_project"></input>
            <span id="div_error_code_project"><a id="error_code_project"></a></span>
            <br>

            <label id="label_acronym_project" class="label_acronym_project">Acrónimo del Proyecto:</label>
            <input type="text" id="acronym_project" name="acronym_project"></input>
            <span id="div_error_acronym_project"><a id="error_acronym_project"></a></span>
            <br>

            <label id="label_id_sampling_methodology" class="label_id_sampling_methodology">ID de la Metodología de Muestreo:</label>
            <input type="text" id="id_sampling_methodology" name="id_sampling_methodology"></input>
            <span id="div_error_id_sampling_methodology"><a id="error_id_sampling_methodology"></a></span>
            <br>

            <button type="submit" id="submit_button">Guardar</button>
        `;

        // Inserta el formulario en el contenedor `IU_form`
        document.getElementById("IU_form").innerHTML = formulario;

    } */
    cargar_formulario_dinamico(action){
        super.createForm(action, this.def_estructura);
    }

    createForm_ADD() {
        this.cargar_formulario('ADD');
        
        document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_ADD';

        // Configuración específica de ADD

        this.validations.load_validations('ADD');
        this.colocarboton('ADD');
        
		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.validations.submit_test('ADD');");
        document.getElementById("IU_form").setAttribute('action', "javascript:validar.ADD();");

        document.getElementById("div_IU_form").style.display = 'block';
        setLang();
    }

    createForm_SEARCH() {
        this.cargar_formulario('SEARCH');
        
        document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_SEARCH';
        this.validations.load_validations('SEARCH');
        this.colocarboton('SEARCH');

        document.getElementById("IU_form").setAttribute('onsubmit', "return validar.validations.submit_test('SEARCH');");
        document.getElementById("IU_form").setAttribute('action', "javascript:validar.SEARCH();");

        document.getElementById("div_IU_form").style.display = 'block';
        setLang();
    }

    createForm_EDIT(parametros) {
        this.cargar_formulario('EDIT');
       

        this.load_data(parametros);
        document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_EDIT';
        document.getElementById('link_file_project').innerHTML = this.change_value_IU('file_project', parametros.file_project);
		document.getElementById('start_date_project').value = this.change_value_IU('start_date_project',parametros.start_date_project);
		document.getElementById('end_date_project').value = this.change_value_IU('end_date_project',parametros.start_date_project);



        this.validations.load_validations('EDIT');
        this.colocarboton('EDIT');

        document.getElementById("IU_form").setAttribute('onsubmit', "return validar.validations.submit_test('EDIT');");
        document.getElementById("IU_form").setAttribute('action', "javascript:validar.EDIT();");

        document.getElementById("div_IU_form").style.display = 'block';
        setLang();
    }

createForm_DELETE(parametros) {
    this.cargar_formulario('DELETE');


    
    document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_DELETE';


    this.load_data(parametros);
    document.getElementById('link_file_project').innerHTML = this.change_value_IU('file_project', parametros.file_project);
    document.getElementById('start_date_project').value = this.change_value_IU('start_date_project',parametros.start_date_project);
    document.getElementById('end_date_project').value = this.change_value_IU('end_date_project',parametros.start_date_project);


    this.colocarboton('DELETE');

    document.getElementById("IU_form").setAttribute('action', "javascript:validar.DELETE();");

    document.getElementById("div_IU_form").style.display = 'block';
    setLang();
    }

    createForm_SHOWCURRENT(parametros) {
        this.cargar_formulario('SHOWCURRENT');

        this.load_data(parametros);
        document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_SHOWCURRENT';

        // Configuración específica de SHOWCURRENT
       



        document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
        document.getElementById("IU_form").setAttribute('action', "");

        document.getElementById("div_IU_form").style.display = 'block';
        setLang();
    }
    change_value_IU(atributo, valoratributo){
        if (atributo === 'file_project'){
            if (valoratributo === ''){
                return "no hay fichero";
            }
            let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_project/";
            let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
            texto += `<img src="./iconos/FILE.png" alt="Fichero"/>${valoratributo}</a>`;
            return texto;
        }
        if (['start_date_project', 'end_date_project'].includes(atributo)){

			let fech = valoratributo.split('-');
            let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
            return fechaformateada;

		}

    }
}