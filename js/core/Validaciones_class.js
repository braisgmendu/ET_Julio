/**
 * @class Validaciones_Atomicas
 * @description Clase que contiene las validaciones atómicas para los campos del formulario.
 * Proporciona métodos para validar tamaños, expresiones regulares, tipos de archivo y formatos.
 */
class Validaciones_Atomicas{
    /*los métodos estándar en la clase validacionesatomicas son min_size(), max_size(). exprreg(),
     max_size_file(), type_file(), format_name_file(). */
    /**
     * @constructor
     * @description Constructor de la clase Validaciones_Atomicas
     */
    constructor(){

    }

    /**
     * @method min_size
     * @description Valida que el tamaño del campo sea mayor o igual al parámetro especificado
     * @param {string} id - ID del campo a validar
     * @param {number} parametro - Tamaño mínimo permitido
     * @returns {boolean} true si el tamaño es válido, false en caso contrario
     */
    min_size(id, parametro){
        const valor = document.getElementById(id)?.value; // Verificar que el campo existe
        if (!valor) {
            console.warn(`El campo con id "${id}" no existe o no tiene valor.`);
            return false;
        }
        if (valor.length < parametro){
            return false;
        }
        else{
            return true;
        }
    }

    /**
     * @method max_size
     * @description Valida que el tamaño del campo sea menor o igual al parámetro especificado
     * @param {string} campo - ID del campo a validar
     * @param {number} param - Tamaño máximo permitido
     * @returns {boolean} true si el tamaño es válido, false en caso contrario
     */
    max_size(campo, param) {
        const elemento = document.getElementById(campo);
        if (!elemento) return true;
        
        let valor = elemento.value ? elemento.value.trim() : '';
        return valor.length <= param;
    }

    /**
     * @method reg_exp
     * @description Valida que el campo cumpla con la expresión regular especificada
     * @param {string} campo - ID del campo a validar
     * @param {string} param - Expresión regular a validar
     * @returns {boolean} true si el campo cumple con la expresión regular, false en caso contrario
     */
    reg_exp(campo, param) {
        const elemento = document.getElementById(campo);
        if (!elemento) return true;
        
        let valor = elemento.value ? elemento.value.trim() : '';
        if (!valor) return true; // Permitir campos vacíos en búsqueda
        
        const regex = new RegExp(param);
        return regex.test(valor);
    }
    /**
     * @method max_size_file
     * @description Valida que el tamaño del archivo sea menor o igual al parámetro especificado
     * @param {File} objfile - Archivo a validar
     * @param {number} maxsize - Tamaño máximo permitido en bytes
     * @returns {boolean} true si el tamaño es válido, false en caso contrario
     */
    max_size_file(objfile, maxsize){
        if (!objfile || !objfile.size) return true; // Permitir si no hay archivo
        if (objfile.size > maxsize){
            return false;
        }
        return true;
    }

    /**
     * @method file_type
     * @description Valida que el tipo de archivo esté en la lista de tipos permitidos
     * @param {File} objfile - Archivo a validar
     * @param {Array<string>} array_tipos - Lista de tipos MIME permitidos
     * @returns {boolean} true si el tipo es válido, false en caso contrario
     */
    file_type(objfile, array_tipos){
        if (!objfile || !objfile.type) return true; // Permitir si no hay archivo
        if (!(array_tipos.includes(objfile.type))){
            return false;
        }
        return true;
    }

    /**
     * @method format_name_file
     * @description Valida que el nombre del archivo cumpla con la expresión regular especificada
     * @param {File} objfile - Archivo a validar
     * @param {string} exprreg - Expresión regular para validar el nombre
     * @returns {boolean} true si el formato es válido, false en caso contrario
     */
    format_name_file(objfile, exprreg){
        if (!objfile || !objfile.name) return true; // Permitir si no hay archivo
        let expresionregular = new RegExp(exprreg, 'i'); // Añadir flag 'i' para case-insensitive
        let valor = objfile.name;
        return expresionregular.test(valor);
    }

    /**
     * @method min_size_name_file
     * @description Valida que el tamaño del nombre del archivo sea mayor o igual al parámetro especificado
     * @param {File} objfile - Archivo a validar
     * @param {number} param - Tamaño mínimo permitido
     * @returns {boolean} true si el tamaño es válido, false en caso contrario
     */
    min_size_name_file(objfile,param){
        if (!objfile || !objfile.name) return true; // Permitir si no hay archivo
        let valor = objfile.name;
        if (valor.length < param){
            return false;
        }
        return true;
    }
    /**
     * @method max_size_name_file
     * @description Valida que el tamaño del nombre del archivo sea menor o igual al parámetro especificado
     * @param {File} objfile - Archivo a validar
     * @param {number} param - Tamaño máximo permitido
     * @returns {boolean} true si el tamaño es válido, false en caso contrario
     */
    max_size_name_file(objfile, param) {
        if (!objfile || !objfile.name) return true; // Permitir si no hay archivo
        let valor = objfile.name;
        return valor.length <= param;
    }
    /**
     * @method no_file
     * @description Valida que no se haya seleccionado ningún archivo
     * @param {File} objfile - Archivo a validar
     * @returns {boolean} true si no hay archivo, false si hay un archivo
     */
    no_file(objfile){
        if (!objfile || objfile.size === 0){
            return false;
        }
        return true;
    }
}