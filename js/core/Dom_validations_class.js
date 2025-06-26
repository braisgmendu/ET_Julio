/**
 * @class Dom_validations
 * @extends Dom
 * @description Clase que maneja las validaciones del DOM, extendiendo la funcionalidad de la clase Dom.
 * Esta clase implementa un sistema completo de validación de formularios que incluye:
 * - Validaciones atómicas (tamaño mínimo/máximo, expresiones regulares)
 * - Validaciones de archivos (tipo, tamaño, formato de nombre)
 * - Validaciones especiales por campo
 * - Validaciones específicas por acción (ADD, EDIT, SEARCH, DELETE)
 * 
 * @property {Validaciones_Atomicas} validaciones - Instancia de la clase de validaciones atómicas
 * @property {string} entidad - Nombre de la entidad que se está validando
 */
class Dom_validations extends Dom{
    /**
     * @constructor
     * @description Inicializa la clase de validaciones con las dependencias necesarias.
     * Configura el contexto de validación para una entidad específica y asegura que
     * el método comprobarCampo esté disponible globalmente.
     * 
     * @param {Validaciones_Atomicas} validaciones - Instancia de la clase de validaciones atómicas
     * @param {string} entidad - Nombre de la entidad a validar
     */
    constructor(validaciones, entidad, entidadObj) {
        super();
        this.validaciones = validaciones;
        this.entidad = entidad;
        this.entidadObj = entidadObj;
        window.comprobarCampo = this.comprobarCampo.bind(this) // Asegura que comprobarCampo esté disponible globalmente
    }

    /**
     * @method getAttributes
     * @description Obtiene la estructura de atributos definida para la entidad actual.
     * Evalúa dinámicamente la estructura de la entidad para obtener sus atributos
     * y reglas de validación.
     * 
     * @returns {Object} Objeto con la definición de atributos de la entidad
     */
    getAttributes() {
        let atributos;

        atributos = eval('estructura_'+this.entidad+'.attributes'); 
        return atributos;
    }
    

    /**
     * @method load_validations
     * @description Carga y configura las validaciones para todos los campos del formulario.
     * Asigna eventos de validación apropiados según el tipo de campo:
     * - 'onblur' para inputs normales
     * - 'onchange' para otros elementos
     * 
     * @param {string} action - Acción para la que cargar las validaciones (ADD, EDIT, SEARCH, DELETE)
     * @returns {void} - No retorna nada
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
     * @description Realiza la validación completa de un campo específico.
     * El proceso de validación incluye:
     * 1. Verificación de existencia de definiciones para el campo
     * 2. Validación especial genérica
     * 3. Manejo específico para campos de archivo
     * 4. Validaciones según la acción (SEARCH, ADD, EDIT)
     * 
     * Tipos de validaciones soportadas:
     * - min_size: Tamaño mínimo
     * - max_size: Tamaño máximo
     * - reg_exp: Expresión regular
     * - valid_date: Validación de fecha
     * - no_file: Verificación de archivo
     * - max_size_file: Tamaño máximo de archivo
     * - file_type: Tipo de archivo
     * - format_name_file: Formato del nombre de archivo
     * - min_size_name_file: Tamaño mínimo del nombre de archivo
     * - max_size_name_file: Tamaño máximo del nombre de archivo
     * 
     * @param {string} campo - ID del campo a validar
     * @param {string} action - Acción que se está realizando (ADD, EDIT, SEARCH, DELETE)
     * @returns {boolean|string} true si el campo es válido, mensaje de error en caso contrario
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
         // Si es SEARCH y no hay valor, permitir la búsqueda
         if (action === 'SEARCH' && !valor) {
            return true;
        }
        // 2. Validación especial genérica
        const resultadoEspecial = this.check_special_tests(campo,valor);
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

    /**
     * @method submit_test
     * @description Realiza una validación completa de todos los campos del formulario.
     * Proceso:
     * 1. Obtiene todos los atributos con reglas de validación
     * 2. Filtra los atributos que tienen reglas para la acción específica
     * 3. Valida cada campo
     * 4. Recopila y reporta errores
     * 
     * @param {string} action - Acción para la que validar (ADD, EDIT, SEARCH, DELETE)
     * @returns {boolean} true si todos los campos son válidos, false si hay errores
     */
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

    /**
     * @method check_special_tests
     * @description Verifica y ejecuta validaciones especiales para un atributo específico.
     * Las validaciones especiales son métodos dinámicos que siguen el patrón
     * 'check_especial_tests_[nombre_atributo]'.
     * 
     * @param {string} atributo - Nombre del atributo a validar
     * @returns {boolean|string} true si no hay validaciones especiales o si pasan, mensaje de error en caso contrario
     */
    check_special_tests(atributo,value) {
        const atributo_upper = atributo.toUpperCase();
        const methodName = `check_special_${atributo_upper}`;
        if (this.entidadObj && typeof this.entidadObj[methodName] === 'function') {
            return this.entidadObj[methodName](value);
        }
        return true;
    }

   
}