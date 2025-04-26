class characteristic extends Entidad_Abstracta {
  constructor() {
    super();
    this.entidad = "characteristic";
    this.def_estructura = estructura_characteristic;
    this.atributos = estructura_characteristic.attributes_list;
    this.columnasamostrar = estructura_characteristic.columnas_visibles_tabla;
    this.datosespecialestabla =
      estructura_characteristic.columnas_modificadas_tabla;
      this.validations = new Dom_validations(new Validaciones_Atomicas, this.entidad);
    this.inicializar(this.entidad, this.def_estructura);
  }

  /* cargar_formulario_estatico() {
        this.action = '';
		//corregir el html, usar el formato de project para tipo de datos y categoria
        let form = `
		<label id="label_id_characteristic" "class="label_id_characteristic">ID Characteristic</label>
  	  	<input type="text" id="id_characteristic" name="id_characteristic"></input>
    	<span id="div_error_id_characteristic"><a id="error_id_characteristic"></a></span>
    	<br>

    	<label id="label_name_characteristic" class="label_name_characteristic">Name Characteristic</label>
    	<input type="text" id="name_characteristic" name="name_characteristic"></input>
    	<span id="div_error_name_characteristic"><a id="error_name_characteristic"></a></span>
    	<br>

    	<label  id="label_description_characteristic" class="label_description_characteristic">Description Characteristic</label>
    	<input type="text" id="description_characteristic" name="description_characteristic"></input>
    	<span id="div_error_description_characteristic"><a id="error_description_characteristic"></a></span>
    	<br>

		<label id="label_data_type_characteristic" name="label_data_type_characteristic">Tipo de Dato</label>
        <select id='data_type_characteristic' name='data_type_characteristic' required>
            <option value='number'>Number</option>
            <option value='text'>Text</option>
            <option value='set'>Set</option>
        </select>
        <span id="div_error_data_type_characteristic"><a id="error_data_type_characteristic"></a></span>
        <br>

        <label id="label_category_characteristic" name="label_category_characteristic">Categoría</label>
        <select id='category_characteristic' name='category_characteristic' required>
            <option value='soil_site'>Soil Site</option>
            <option value='soil_chem'>Soil Chem</option>
            <option value='soil_bio'>Soil Bio</option>
        </select>
        <span id="div_error_category_characteristic"><a id="error_category_characteristic"></a></span>
        <br>

    	<label class="label_bibref_characteristic">Bibliografía Characteristic</label>
    	<input type="text" id="bibref_characteristic" name="bibref_characteristic"></input>
    	<span id="div_error_bibref_characteristic"><a id="error_bibref_characteristic"></a></span>
    	<br>

    	<label id="label_file_characteristic" class="label_file_characteristic">Archivo</label>
    	<input type="text" id="file_characteristic" name="file_characteristic" readonly="true"></input>
    	<span id="div_error_file_characteristic"><a id="error_file_characteristic"></a></span>
    	<a id="link_file_characteristic" href="http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/"><img src="./iconos/FILE.png" /></a>
    	<label id="label_nuevo_file_characteristic" class="label_nuevo_file_characteristic">Nuevo Archivo</label>
    	<input type="file" id="nuevo_file_characteristic" name="nuevo_file_characteristic"></input>
    	<span id="div_error_nuevo_file_characteristic"><a id="error_nuevo_file_characteristic"></a></span>
    	<br>
		`;


        document.getElementById("IU_form").innerHTML = form;
    } 
    cargar_formulario_dinamico(){
        super.createForm('', this.def_estructura);
    }
    change_value_IU(atributo, valoratributo) {
    if (atributo === "file_characteristic") {
      if (valoratributo === "") {
        return "no hay fichero";
      }
      let baseUrl =
        "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/";
      let texto = `<a href="${baseUrl}${encodeURIComponent(
        valoratributo
      )}" target="_blank">`;
      texto += `<img src="./iconos/FILE.png" alt="Fichero"/>${valoratributo}</a>`;
      return texto;
    }
  }*/
    cargar_formulario_dinamico(action){
      this.createForm(action, this.def_estructura);
    }
  
    createForm_ADD() {
      this.cargar_formulario('ADD');
      
      document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_ADD';
      /*document.getElementById("label_nuevo_file_characteristic").style.display = 'block';
      document.getElementById("nuevo_file_characteristic").style.display = 'block';
      document.getElementById("label_id_characteristic").style.display = 'none';
      document.getElementById("id_characteristic").style.display = 'none';
      document.getElementById("label_file_characteristic").style.display = 'none';
      document.getElementById("file_characteristic").style.display = 'none';
      document.getElementById("link_file_characteristic").style.display = 'none';
      */
      this.validations.load_validations('ADD');
      this.colocarboton('ADD');
          
      document.getElementById("IU_form").setAttribute('onsubmit',"return validar.validations.submit_test('ADD');");
      document.getElementById("IU_form").setAttribute('action',"javascript:validar.ADD();");
  
      document.getElementById("div_IU_form").style.display = 'block';
      setLang();
    }
  
    // Métodos similares para SEARCH, EDIT, DELETE, SHOWCURRENT
    createForm_SEARCH() {
      this.cargar_formulario('EDIT');
      
      document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_SEARCH';
  
      /*document.getElementById("label_nuevo_file_characteristic").style.display = 'none';
      document.getElementById("nuevo_file_characteristic").style.display = 'none';
      document.getElementById("link_file_characteristic").style.display = 'none';
  */
      this.validations.load_validations('SEARCH');
      this.colocarboton('SEARCH');
  
      document.getElementById("IU_form").setAttribute('onsubmit',"return validar.validations.submit_test('SEARCH');");
      document.getElementById("IU_form").setAttribute('action',"javascript:validar.SEARCH();");
  
      document.getElementById("div_IU_form").style.display = 'block';
      setLang();
    }
  
    createForm_EDIT(parametros) {
      this.cargar_formulario('EDIT');
     
  
      this.action = 'EDIT';
      this.load_data(parametros);
      document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_EDIT';
      /*document.getElementById("id_characteristic").setAttribute('readonly',true);
      document.getElementById("label_nuevo_file_characteristic").style.display = 'block';
      document.getElementById("nuevo_file_characteristic").style.display = 'block';
      document.getElementById('nuevo_file_characteristic').removeAttribute('required');
  
      document.getElementById('file_characteristic').setAttribute('readonly',true);
      document.getElementById('link_file_characteristic').innerHTML = this.cambiardatosespecialestabla('file_characteristic', parametros.file_characteristic);
  */
      this.validations.load_validations('EDIT');
      this.colocarboton('EDIT');
  
      document.getElementById("IU_form").setAttribute('onsubmit',"return validar.validations.submit_test('EDIT');");
      document.getElementById("IU_form").setAttribute('action',"javascript:validar.EDIT();");
  
      document.getElementById("div_IU_form").style.display = 'block';
      setLang();
    }
  
    createForm_DELETE(parametros) {
      this.cargar_formulario('DELETE');

      document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_DELETE';
    
      // Llenar el formulario con los datos proporcionados
      this.load_data(parametros);
      document.getElementById('link_file_characteristic').innerHTML = this.cambiardatosespecialestabla('file_characteristic', parametros.file_characteristic);
    
      // Desactivar el formulario para evitar modificaciones
      //this.manejoAtrib.ponerNoActivo();
      this.colocarboton('DELETE');
    
      document.getElementById("IU_form").setAttribute('action', "javascript:validar.DELETE();");
      document.getElementById("div_IU_form").style.display = 'block';
    
      setLang();
    }
    
    createForm_SHOWCURRENT(parametros) {
      this.cargar_formulario('SHOWCURRENT');
      document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_SHOWCURRENT';
    
      // Ocultar elementos no necesarios
      /*document.getElementById("label_nuevo_file_characteristic").style.display = 'none';
      document.getElementById("nuevo_file_characteristic").style.display = 'none';
      document.getElementById("link_file_characteristic").style.display = 'none';
    */
      // Llenar el formulario con los datos proporcionados
      this.load_data(parametros);
      //document.getElementById('link_file_characteristic').innerHTML = this.cambiardatosespecialestabla('file_characteristic', parametros.file_characteristic);
    
      // Desactivar el formulario para evitar modificaciones
      //this.manejoAtrib.ponerNoActivo();
      document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
      document.getElementById("IU_form").setAttribute('action', "");
    
      document.getElementById("div_IU_form").style.display = 'block';
    
      setLang();
    }
    
  
    change_value_IU(atributo, valoratributo){
      if (atributo === 'file_characteristic'){
        if (valoratributo === ''){
          return "no hay fichero";
        }
        let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/";
        let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
        texto += `<img src="./iconos/FILE.png" alt="Fichero"/>${valoratributo}</a>`;
        return texto;
      }
      }
  
}
