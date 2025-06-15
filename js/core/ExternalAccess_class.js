/**
 * @class ExternalAccess
 * @description Clase que maneja las comunicaciones con el backend del sistema.
 * Proporciona métodos para realizar peticiones HTTP al servidor, específicamente
 * para operaciones CRUD y otras interacciones con el backend.
 */
class ExternalAccess {
    /**
     * @constructor
     * @description Inicializa la clase ExternalAccess
     */
    constructor(){

    }

    /**
     * @method back_request
     * @description Realiza una petición POST al backend del sistema.
     * Proceso:
     * 1. Prepara los datos del formulario o crea un FormData vacío
     * 2. Añade el controlador y la acción
     * 3. Añade datos extra si se proporcionan
     * 4. Realiza la petición AJAX
     * 
     * @param {string} formulario - ID del formulario o cadena vacía
     * @param {string} controlador - Nombre del controlador en el backend
     * @param {string} action - Acción a realizar
     * @param {object} datosextra - Datos adicionales opcionales
     * @returns {Promise} Promesa que se resuelve con la respuesta del servidor
     */
    back_request(formulario, controlador, action, datosextra=null){
    
        var datos;
        
        if (formulario === ''){
            datos = new FormData();
        }
        else{
            formulario = document.getElementById(formulario);
            datos = new FormData(formulario);
        }
    
        datos.append('controlador', controlador);
        datos.append('action', action);
    
        if (datosextra!=null){
            for(var clave in datosextra){
                datos.append(clave, datosextra[clave]);
            }
        }
        
        return new Promise(function(resolve) { 
            $.ajax({
                type :"POST",
                url : "http://193.147.87.202/ET2/index.php",
                data : datos,
                processData : false,
                contentType : false,
            })
            .done(res => {
                resolve(res);
            })
            .fail(res => {
                alert('error : '+res.status);
            })
    
        });
        
        
    }
}