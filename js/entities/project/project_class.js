/**
 * @class project
 * @extends Entidad_Abstracta
 * @description Clase para la gestión de proyectos.
 * Maneja las operaciones CRUD y validaciones específicas para esta entidad.
 */
class project extends Entidad_Abstracta{

    /**
     * @constructor
     * @description Constructor de la clase project
     */
    constructor(){
        super('project', estructura_project);
      
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
   /**
    * @method check_special_test_END_DATE_PROJECT
    * @description Verifica la fecha de finalización del proyecto
    * @returns {boolean} true si la fecha es válida, false en caso contrario
    */


    /**
     * @method change_value_IU
     * @description Sobrescribe el método de la clase padre para transformar valores específicos de project.
     * Convierte el nombre del archivo en un enlace clickeable y formatea las fechas cuando corresponda.
     * 
     * @param {string} atributo - Nombre del atributo
     * @param {any} valoratributo - Valor a transformar
     * @returns {any} Valor transformado o el valor original si no requiere transformación
     */
    change_value_IU(atributo, valoratributo) {
        if (atributo === "file_project") {
          if (!valoratributo) {
            return "no hay fichero";
          }
          let baseUrl =
            "http://193.147.87.202/ET2/filesuploaded/files_file_project/";
          let texto = `<a href="${baseUrl}${encodeURIComponent(
            valoratributo
          )}" target="_blank" style="text-decoration: none; color: inherit;">`;
          texto += `<img src="assets/icons/FILE.png" alt="Fichero" style="vertical-align: middle; margin-right: 5px;"/>${valoratributo}</a>`;
          return texto;
        }
        if (['start_date_project', 'end_date_project'].includes(atributo)){
            let fech = valoratributo.split('-');
            let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
            return fechaformateada;
        }
        
        // Para cualquier otro atributo, retorna el valor original
        return valoratributo;
    }

    check_special_START_DATE_PROJECT() {
        const start = document.getElementById('start_date_project').value;
        const end = document.getElementById('end_date_project').value;

        // 1. Comprobar formato
        if (!/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/.test(start)) return "start_date_project_format_KO";

        // 2. Comprobar fecha válida (mes y día)
        if (!this._fechaValida(start)) return "start_date_project_invalid_KO";

        // 3. Comprobar que la fecha de inicio es menor que la de fin (si existe la de fin y es válida)
        if (end && /^\d{2}\/\d{2}\/\d{4}$/.test(end) && this._fechaValida(end)) {
            if (!this._esMenor(start, end)) return "start_date_project_order_KO";
        }

        return true;
    }

    check_special_END_DATE_PROJECT() {
        const end = document.getElementById('end_date_project').value;
        const start = document.getElementById('start_date_project').value;

        // 1. Comprobar formato
        if (!/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/.test(end)) return "end_date_project_format_KO";

        // 2. Comprobar fecha válida (mes y día)
        if (!this._fechaValida(end)) return "end_date_project_invalid_KO";

        // 3. Comprobar que la fecha de inicio es menor que la de fin (si existe la de inicio y es válida)
        if (start && /^\d{2}\/\d{2}\/\d{4}$/.test(start) && this._fechaValida(start)) {
            if (!this._esMenor(start, end)) return "end_date_project_order_KO";
        }

        return true;
    }

    // Métodos auxiliares privados:
    _fechaValida(fecha) {
        // Extraer día, mes y año
        const [dia, mes, anio] = fecha.split('/').map(Number);

        //Comprobar mes válido
        if (mes < 1 || mes > 12) return false;

        // 4. Comprobar día válido según el mes y si es bisiesto
        const diasMes = [31, (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (dia < 1 || dia > diasMes[mes - 1]) return false;

        return true;
    }

    _esMenor(fecha1, fecha2) {
        // Convierte a objeto Date para comparar
        const [d1, m1, y1] = fecha1.split('/').map(Number);
        const [d2, m2, y2] = fecha2.split('/').map(Number);
        const f1 = new Date(y1, m1 - 1, d1);
        const f2 = new Date(y2, m2 - 1, d2);
        return f1 < f2;
    }

    /**
     * @method format_date
     * @description Formatea una fecha del formato YYYY-MM-DD al formato DD/MM/YYYY.
     * @param {string} date - La fecha en formato YYYY-MM-DD.
     * @returns {string} La fecha formateada como DD/MM/YYYY.
     */
    format_date(date) {
        if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            return date; // Devuelve el valor original si no es una fecha válida
        }
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    }

    /**
     * @method load_data
     * @description Sobreescribe el método load_data para formatear las fechas antes de cargarlas en el formulario.
     * @param {object} data - El objeto con los datos a cargar.
     */
    load_data(data) {
        if (data.start_date_project) {
            const dateOnly = data.start_date_project.split(' ')[0]; // Nos quedamos solo con la fecha
            data.start_date_project = this.format_date(dateOnly);
        }
        if (data.end_date_project) {
            const dateOnly = data.end_date_project.split(' ')[0]; // Nos quedamos solo con la fecha
            data.end_date_project = this.format_date(dateOnly);
        }

        // Llamamos al método original del padre para que cargue todos los datos
        super.load_data(data);
    }
}