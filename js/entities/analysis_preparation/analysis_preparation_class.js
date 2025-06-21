/**
 * @class analysis_preparation
 * @extends Entidad_Abstracta
 * @description Clase entidad que extiende de Entidad_Abstracta. Maneja las validaciones y presentacion especifica de la entidad.
 */
class analysis_preparation extends Entidad_Abstracta{

    /**
     * @constructor
     * @description Constructor de la clase analysis_preparation
     */
    constructor(){
        super('analysis_preparation', estructura_analysis_preparation);
        
    }

    /*cargar_formularios_estatico(){
        this.action = '';
        let form = 
            `
            <label id="label_id_analysis_preparation" class="label_id_analysis_preparation" >ID:</label>
            <input type="text" id="id_analysis_preparation" name="id_analysis_preparation"></input>
            <span id="div_error_id_analysis_preparation"><a id="error_id_analysis_preparation"></a></span>
            <br>
            <label id="label_name_analysis_preparation" class="label_name_analysis_preparation" >Nombre:</label>
            <input type="text" id="name_analysis_preparation" name="name_analysis_preparation"></input>
            <span id="div_error_name_analysis_preparation"><a id="error_name_analysis_preparation"></a></span>
            <br>

            <label id="label_description_analysis_preparation" class="label_description_analysis_preparation" >Descripción:</label>
            <textarea rows="5" cols="33" id="description_analysis_preparation" name="description_analysis_preparation"></textarea>
            <span id="div_error_description_analysis_preparation"><a id="error_description_analysis_preparation"></a></span>
            <br>

            <label id="label_bib_analysis_preparation" class="label_bib_analysis_preparation" >Bibliografía:</label>
            <input type="text" id="bib_analysis_preparation" name="bib_analysis_preparation"></input>
            <span id="div_error_bib_analysis_preparation"><a id="error_bib_analysis_preparation"></a></span>
            <br>

            <label id="label_file_analysis_preparation" class="label_file_analysis_preparation" >Archivo:</label>
            <input type="file" id="file_analysis_preparation" name="file_analysis_preparation"></input>
            <span id="div_error_file_analysis_preparation"><a id="error_file_analysis_preparation"></a></span>
            <a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/">
                <img src="./iconos/FILE.png" />
            </a>
            <br>

            <label id="label_nuevo_file_analysis_preparation" class="label_nuevo_file_analysis_preparation">Nuevo Archivo:</label>
            <input type="file" id="nuevo_file_analysis_preparation" name="nuevo_file_analysis_preparation" ></input>
            <span id="div_error_nuevo_file_analysis_preparation"><a id="error_nuevo_file_analysis_preparation"></a></span>
            <br>
            <button type="submit" id="submit_button">Guardar</button> 
            `;
            //inserta el formulario en el contenedor 'IU_form'
            document.getElementById('IU_form').innerHTML = form;
            
    }*/
    
    /**
     * @method change_value_IU
     * @description Sobrescribe el método de la clase padre para transformar valores específicos de analysis_preparation.
     * Convierte el nombre del archivo en un enlace clickeable cuando el atributo es 'file_analysis_preparation'.
     * 
     * @param {string} atributo - Nombre del atributo
     * @param {any} valoratributo - Valor a transformar
     * @returns {any} Valor transformado o el valor original si no requiere transformación
     */
    change_value_IU(atributo, valoratributo){
        if (atributo == 'file_analysis_preparation'){
            if (valoratributo == ''){
                return "no hay fichero";
            }
            let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/";
            let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
            texto += `<img src="./assets/icons/FILE.png" alt="Fichero"/>${valoratributo}</a>`;
            return texto;
        } 
        
        // Para cualquier otro atributo, retorna el valor original
        return valoratributo;
    }

}