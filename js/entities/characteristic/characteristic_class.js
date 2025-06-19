/**
 * @class characteristic
 * @extends Entidad_Abstracta
 * @description Clase para la gestión de características.
 * Maneja las operaciones CRUD y validaciones específicas para esta entidad.
 */
class characteristic extends Entidad_Abstracta {
  /**
   * @constructor
   * @description Constructor de la clase characteristic
   */
  constructor() {
    super("characteristic", estructura_characteristic);
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
    
  
    /**
     * @method change_value_IU
     * @description Sobrescribe el método de la clase padre para transformar valores específicos de characteristic.
     * Convierte el nombre del archivo en un enlace clickeable cuando el atributo es 'file_characteristic'.
     * 
     * @param {string} atributo - Nombre del atributo
     * @param {any} valoratributo - Valor a transformar
     * @returns {any} Valor transformado o el valor original si no requiere transformación
     */
    change_value_IU(atributo, valoratributo){
      if (atributo === 'file_characteristic'){
        if (valoratributo === ''){
          return "no hay fichero";
        }
        let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/";
        let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
        texto += `<img src="./assets/icons/FILE.png" alt="Fichero"/>${valoratributo}</a>`;
        return texto;
      }
      
      // Para cualquier otro atributo, retorna el valor original
      return valoratributo;
    }
  
}
