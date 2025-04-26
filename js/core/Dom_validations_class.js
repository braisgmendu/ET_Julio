class Dom_validations extends Dom{
    constructor(validaciones, entidad) {
        super();
        this.validaciones = validaciones;
        this.entidad = entidad;
        window.comprobarCampo = this.comprobarCampo.bind(this) // Asegura que comprobarCampo esté disponible globalmente
    }

    getAttributes() {
        let atributos;

        switch (this.entidad) {
            case 'analysis_preparation':
                atributos = estructura_analysis_preparation.attributes;
                break;
            case 'characteristic':
                atributos = estructura_characteristic.attributes;
                break;
            case 'project':
                atributos = estructura_project.attributes;
                break;
            default:
                console.error(`No se encontraron definiciones de validaciones para la entidad: ${this.entidad}`);
                return null;
        }

        if (!atributos) {
            console.warn(`No se encontraron definiciones para la entidad: ${this.entidad}, acción: ${action}`);
        }

        return atributos;
    }

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

    comprobarCampo(campo, action) {
        let mensajeError = true;
        const atributos = this.getAttributes(); //Definiciones de test para una determinada accion de una clase

        if (atributos[campo] ==null) {
            console.warn(`No se pueden comprobar validaciones porque no existen definiciones para la acción: ${action}`);
            return true; // Si no hay definiciones, asumimos que es válido
        }

        const validacionesCampo = atributos[campo]?.validation_rules;

        if (!validacionesCampo) {
            console.warn(`No hay validaciones definidas para el campo: ${campo} y acción: ${action}`);
            return true; // Si no hay validaciones, asumimos que es válido
        }

        let resultadoGlobal = false;
        

        for (let [tipoValidacion, [valor, mensaje]] of Object.entries(validacionesCampo[action] || {})) {
            let resultado = false;
    
            // Saltar validaciones para ciertos casos especiales
            if (
                (campo === "nuevo_file_analysis_preparation" ||
                 campo === "nuevo_file_project" ||
                 campo === "nuevo_file_characteristic") &&
                action === "EDIT" &&
                document.getElementById(campo) &&
                document.getElementById(campo)?.files?.length === 0
            ) {
                return true; // Considerar válido si no hay archivo
            }
            
            switch (tipoValidacion) {
                case 'min_size':
                    resultado = this.validaciones.min_size(campo, valor);
                    if (!resultado) {
                        this.mostrar_error_campo(campo, mensaje);
                        return mensaje;
                    }else{
                        resultadoGlobal = resultado; // Si pasa la validación, se considera válido
                    }
                    break;
    
                case 'max_size':
                    resultado = this.validaciones.max_size(campo, valor);
                    if (!resultado) {
                        this.mostrar_error_campo(campo, mensaje);
                        return mensaje;
                    }else{
                        resultadoGlobal = resultado; // Si pasa la validación, se considera válido
                    }
                    break;
    
                case 'reg_exp':
                    resultado = this.validaciones.reg_exp(campo, valor);
                    if (!resultado) {
                        this.mostrar_error_campo(campo, mensaje);
                        return mensaje;
                    }else{
                        resultadoGlobal = resultado; // Si pasa la validación, se considera válido
                    }
        
                    break;
    
                case 'valid_date':
                    resultado = this.validacionesespeciales(campo, valor);
                    if (!resultado) {
                        this.mostrar_error_campo(campo, mensaje);
                        return mensaje;
                    }else
                        resultadoGlobal = resultado; // Si pasa la validación, se considera válido
                    break;
                case 'no_file':
                    resultado = this.validaciones.no_file(campo, valor);
                    if (!resultado) {
                        this.mostrar_error_campo(campo, mensaje);
                        return mensaje;
                    }else
                        resultadoGlobal = resultado; // Si pasa la validación, se considera válido
                    break;
                case 'max_size_file':
                    const objfile = document.getElementById(campo)?.files[0];
                    if (objfile) {
                        resultado = this.validaciones.max_size_file(objfile, valor);
                        if (!resultado) {
                            this.mostrar_error_campo(campo, mensaje);
                            return mensaje;
                        }else
                            resultadoGlobal = resultado; // Si pasa la validación, se considera válido
                    } else {
                        console.warn(`El campo ${campo} no tiene un archivo asociado.`);
                    }
                    break;
                case 'file_type':
                    const objfileType = document.getElementById(campo)?.files[0];
                    if (objfileType) {
                        resultado = this.validaciones.file_type(objfileType, valor);
                        if (!resultado) {
                            this.mostrar_error_campo(campo, mensaje);
                            return mensaje;
                        }else
                            resultadoGlobal = resultado; // Si pasa la validación, se considera válido
                    } else {
                        console.warn(`El campo ${campo} no tiene un archivo asociado.`);
                    }
                    break;
                case 'format_name_file':
                    const objfileFormat = document.getElementById(campo)?.files[0];
                    if (objfileFormat) {
                        resultado = this.validaciones.format_name_file(objfileFormat, valor);
                        if (!resultado) {
                            this.mostrar_error_campo(campo, mensaje);
                            return mensaje;
                        }else
                            resultadoGlobal = resultado; // Si pasa la validación, se considera válido
                    } else {
                        console.warn(`El campo ${campo} no tiene un archivo asociado.`);
                    }
                    break;
    
                // Más casos según sea necesario
                default:
                    console.error(`Tipo de validación no soportado: ${tipoValidacion}`);
            }
        }

        return resultadoGlobal;
       
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
    
    check_special_tests(campo, valor) {
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