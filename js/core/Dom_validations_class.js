/**
 * @class Dom_validations
 * @extends Dom
 * @description Clase que maneja las validaciones del DOM, extendiendo la funcionalidad de la clase Dom.
 * Gestiona la validación de campos del formulario según las reglas definidas para cada acción.
 */
class Dom_validations extends Dom{
    /**
     * @constructor
     * @param {Validaciones_Atomicas} validaciones - Instancia de la clase de validaciones atómicas
     * @param {string} entidad - Nombre de la entidad a validar
     */
    constructor(validaciones, entidad) {
        super();
        this.validaciones = validaciones;
        this.entidad = entidad;
        window.comprobarCampo = this.comprobarCampo.bind(this) // Asegura que comprobarCampo esté disponible globalmente
    }

    getAttributes() {
        let atributos;

        atributos = eval('estructura_'+this.entidad+'.attributes'); 
        return atributos;
    }
    

    /**
     * @method load_validations
     * @description Carga las validaciones definidas para una acción específica
     * @param {string} action - Acción para la que cargar las validaciones (ADD, EDIT, SEARCH, DELETE)
     */
    load_validations(action) {
        const elementos = document.forms['IU_form'].elements;
        for (let elemento of elementos) {
            const tipoElemento = document.getElementById(elemento.id).type;
            const etiqueta = document.getElementById(elemento.id).tagName;
            const evento = (etiqueta === 'INPUT' && tipoElemento !== 'file') ? 'onblur' : 'onchange';
            const funcionValidacion = () => {
                this.comprobarCampo(elemento.id, action);
            };
            document.getElementById(elemento.id).addEventListener(evento, funcionValidacion);
        }
    }

    /**
     * @method comprobarCampo
     * @description Valida un campo según las reglas definidas para la acción especificada
     * @param {string} campo - ID del campo a validar
     * @param {string} action - Acción que se está realizando (ADD, EDIT, SEARCH, DELETE)
     * @returns {boolean} true si el campo es válido, false en caso contrario
     */
    comprobarCampo(campo, action) {
        const atributos = this.getAttributes();
        
        if (!atributos[campo]) {
            console.warn(`No se pueden comprobar validaciones porque no existen definiciones para la acción: ${action}`);
            return true;
        }

        // Obtener elemento DOM
        const elemento = document.getElementById(campo);
        if (!elemento) return true;

        // Determinar valor del campo
        let valor;
        if (elemento instanceof HTMLInputElement && elemento.type === 'file') {
            valor = elemento.files.length > 0 ? elemento.files[0] : null;
        } else {
            valor = elemento.value ? elemento.value.trim() : '';
        }

        const validacionesCampo = atributos[campo]?.validation_rules;
        if (!validacionesCampo) {
            console.warn(`No hay validaciones definidas para el campo: ${campo} y acción: ${action}`);
            return true;
        }

        // 2. Validación especial genérica
        const resultadoEspecial = this.check_special_tests(campo);
        if (resultadoEspecial !== true) {
            this.mostrar_error_campo(campo, resultadoEspecial || `Error especial en el campo: ${campo}`);
            return resultadoEspecial;
        }

        // 3. Manejo genérico de campos de archivo en EDIT
        const esCampoArchivo = elemento instanceof HTMLInputElement && elemento.type === 'file';
        if (esCampoArchivo && action === 'EDIT' && !valor) {
            return true;
        }

        const reglasAccion = validacionesCampo[action] || {};
        
        // Si es SEARCH y no hay valor, permitir la búsqueda
        if (action === 'SEARCH' && !valor) {
            return true;
        }

        // Si es SEARCH y hay valor, validar según las reglas
        if (action === 'SEARCH' && valor) {
            for (const [tipoValidacion, config] of Object.entries(reglasAccion)) {
                let resultado = false;
                let valorValidacion, mensaje;

                if (Array.isArray(config)) {
                    [valorValidacion, mensaje] = config;
                } else {
                    mensaje = config;
                }

                try {
                    switch (tipoValidacion) {
                        case 'max_size':
                            resultado = this.validaciones.max_size(campo, valorValidacion);
                            break;
                        case 'reg_exp':
                            resultado = this.validaciones.reg_exp(campo, valorValidacion);
                            break;
                    }
                } catch (error) {
                    console.error(`Error en validación ${tipoValidacion} para ${campo}:`, error);
                    continue;
                }

                if (resultado === false) {
                    this.mostrar_error_campo(campo, mensaje || `Error en validación ${tipoValidacion}`);
                    return mensaje || `Error en campo ${campo}`;
                }
            }
            
        }

        // Para otras acciones (ADD, EDIT)
        for (const [tipoValidacion, config] of Object.entries(reglasAccion)) {
            let resultado = false;
            let valorValidacion, mensaje;

            if (Array.isArray(config)) {
                [valorValidacion, mensaje] = config;
            } else {
                mensaje = config;
            }

            try {
                switch (tipoValidacion) {
                    case 'min_size':
                        resultado = this.validaciones.min_size(campo, valorValidacion);
                        break;
                    case 'max_size':
                        resultado = this.validaciones.max_size(campo, valorValidacion);
                        break;
                    case 'reg_exp':
                        resultado = this.validaciones.reg_exp(campo, valorValidacion);
                        break;
                    case 'valid_date':
                        resultado = this.validacionesespeciales(campo, valorValidacion);
                        break;
                    case 'no_file':
                        resultado = this.validaciones.no_file(valor);
                        break;
                    case 'max_size_file':
                        if (valor) {
                            resultado = this.validaciones.max_size_file(valor, valorValidacion);
                        }
                        break;
                    case 'file_type':
                        if (valor) {
                            resultado = this.validaciones.file_type(valor, valorValidacion);
                        }
                        break;
                    case 'format_name_file':
                        if (valor) {
                            resultado = this.validaciones.format_name_file(valor, valorValidacion);
                        }
                        break;
                    case 'min_size_name_file':
                        if (valor) {
                            resultado = this.validaciones.min_size_name_file(valor, valorValidacion);
                        }
                        break;
                    case 'max_size_name_file':
                        if (valor) {
                            resultado = this.validaciones.max_size_name_file(valor, valorValidacion);
                        }
                        break;
                    default:
                        console.error(`Tipo de validación no soportado: ${tipoValidacion}`);
                        continue;
                }
            } catch (error) {
                console.error(`Error en validación ${tipoValidacion} para ${campo}:`, error);
                continue;
            }

            if (resultado === false) {
                this.mostrar_error_campo(campo, mensaje || `Error en validación ${tipoValidacion}`);
                return mensaje || `Error en campo ${campo}`;
            }
        }

        return true;
    }

    submit_test(action) {
        const atributos = this.getAttributes();
    
        if (!atributos) {
            console.error(`No se encontraron atributos para validaciones.`);
            return false; // No se puede proceder sin definiciones
        }
    
        // Filtrar atributos que tienen reglas de validación para la acción específica
        const atributosFiltrados = Object.keys(atributos).filter(campo => {
            const reglas = atributos[campo]?.validation_rules;
            return reglas && reglas[action]; // Validar solo si hay reglas para la acción
        });
    
        const errores = atributosFiltrados.map(campo => {
            const resultado = this.comprobarCampo(campo, action);
            if (resultado != true) {
                console.error(`Error en el campo "${campo}": ${resultado}`);
            }
            return resultado; // Devolver el mensaje de error o true
        });
    
        // Comprobar si todos los campos pasaron (todos deben devolver `true`)
        const hayErrores = errores.some(resultado => resultado !== true);
    
        return !hayErrores; // Retornar `false` si hubo errores, `true` si todo está correcto
    }

    check_special_tests(atributo) {
        const methodName = `check_especial_tests_${atributo}`;

        if (typeof this[methodName] === 'function') {
            return this[methodName]();
        }else {
            //console.warn(`No hay un método especial definido para el campo: ${atributo}`);
            return true; // Si no hay método, asumimos que es válido
        }
    }

    /*
    check_special_tests(campo) {
        if (campo == 'start_date_project') {
            let fecha = document.getElementById(campo).value;
            let fechaf = fecha.split("/");
            let day = parseInt(fechaf[0], 10);
            let month = parseInt(fechaf[1], 10);
            let year = parseInt(fechaf[2], 10);
    
            // Comprobar que el mes no sea mayor de 12 ni el día mayor de 31
            if (month < 1 || month > 12 || day < 1 || day > 31) {
                return false;
            }
    
            let date = new Date(year, month, 0); // Último día del mes
            if (day > date.getDate()) {
                return false;
            }
            return true;
        }
    
        if (campo == 'end_date_project') {
            let fecha = document.getElementById(campo).value;
            let fechaf = fecha.split("/");
            let day = parseInt(fechaf[0], 10);
            let month = parseInt(fechaf[1], 10);
            let year = parseInt(fechaf[2], 10);
    
            // Comprobar que el mes no sea mayor de 12 ni el día mayor de 31
            if (month < 1 || month > 12 || day < 1 || day > 31) {
                return false;
            }
    
            let date = new Date(year, month, 0); // Último día del mes
            if (day > date.getDate()) {
                return false;
            }
    
            if (!document.getElementById('start_date_project')) {
                return false;
            }
    
            let fechaStart = document.getElementById('start_date_project').value;
            let fechafStart = fechaStart.split("/");
            let dayStart = parseInt(fechafStart[0], 10);
            let monthStart = parseInt(fechafStart[1], 10);
            let yearStart = parseInt(fechafStart[2], 10);
    
            if (yearStart > year) {
                return false;
            }
            if (yearStart == year && monthStart > month) {
                return false;
            }
            if (yearStart == year && monthStart == month && dayStart > day) {
                return false;
            }
            return true;
        }
    }

    /*validacionesespeciales2(atributo, tipoValidacion) {
        if (['start_date_project', 'end_date_project'].includes(atributo)) {
            if (tipoValidacion === 'fechavalida') {
                let fecha = document.getElementById(atributo).value;
                let fechaf = fecha.split("/");
                let day = fechaf[0];
                let month = fechaf[1];
                let year = fechaf[2];
                let date = new Date(year,month,'0'); //
                
                if((month - 0)<= 0 || (month -0)> 12){
                    return false;
                }
                
                if((day-0)>(date.getDate()-0)){
                    return false;
                }
                
                return true;
            }
            return false;
        }   
    }*/
    
}