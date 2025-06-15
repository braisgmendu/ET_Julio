/**
 * @fileoverview Módulo de gestión de idiomas del sistema.
 * Proporciona funcionalidades para cambiar y mantener el idioma de la interfaz,
 * incluyendo la gestión de cookies para persistencia del idioma seleccionado.
 */

/**
 * @function setLang
 * @description Establece el idioma de la interfaz y aplica las traducciones correspondientes.
 * Proceso:
 * 1. Determina el idioma a usar (parámetro, cookie o por defecto)
 * 2. Guarda la preferencia en una cookie
 * 3. Carga las traducciones correspondientes
 * 4. Aplica las traducciones a todos los elementos de la interfaz
 * 
 * @param {string} [lang=''] - Código del idioma a establecer (ES, EN). Si está vacío, usa la cookie o el valor por defecto
 */
function setLang(lang=''){

    if (lang=='') {
        if (getCookie('lang') != '') {
          lang = getCookie('lang');
        } else {    
            lang= 'ES';
        }

    }

    setCookie('lang', lang, 1);
    var traduccion;


    switch(lang) {
        case 'ES' : 
           traduccion=textos_ES;
        break;
        case 'EN' :
           traduccion=textos_EN;
        break;
        default:
           traduccion=textos_ES;
        break;
    }

       
   //**Se recorre el array de traducciones buscando coincidencias una por una*/
   for(var clave in traduccion) {

 		var elementos = document.getElementsByClassName(clave);
        var etiquetas =document.getElementsByTagName('label');
        var inputs = document.getElementsByTagName('input');
        var imgs = document.getElementsByTagName('img');
        var options = document.getElementsByTagName('option');

        for (var elem in elementos) {
            elementos[elem].innerHTML = traduccion[clave];
        }

        for (var i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].innerHTML = traduccion[clave];
            }
        }

        for (var i = 0; i < inputs.length; i++) {
            var list = inputs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    inputs[i].placeholder = traduccion[clave];
                    inputs[i].title = traduccion[clave];
                }            
            }
        }

        for (var i = 0; i < imgs.length; i++) {
            var list = imgs[i].classList;
            for (var j = 0; j < list.length; j++) {
                 if (list[j] == clave) {
                    imgs[i].alt = traduccion[clave]; // texto alternativo si no se ve la imagen
                    imgs[i].title = traduccion[clave]; // texto superpuesto a la imagen al pasar sobre ella
                }
            } 
        } 

        for (var i = 0; i < options.length; i++) { 
            if (options[i].className == clave) {
                options[i].label = traduccion[clave];
            }
        }
	}
}

/**
 * @function cambiarLang
 * @description Cambia el idioma de la interfaz y recarga la página.
 * Guarda la preferencia en una cookie con duración de 5 días.
 * 
 * @param {string} lang - Código del idioma al que cambiar (ES, EN)
 */
function cambiarLang(lang) {

    setCookie('lang',lang,5);
    window.location.reload(true);

}

/**
 * @function setCookie
 * @description Establece una cookie con los parámetros especificados.
 * Configura la cookie con opciones de seguridad (Secure, SameSite).
 * 
 * @param {string} name - Nombre de la cookie
 * @param {string} value - Valor de la cookie
 * @param {number} days - Número de días de duración de la cookie
 */
function setCookie(name, value, days) {

    var expires = "";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    document.cookie += "; Secure; SameSite=none; path=/";
}

/**
 * @function getCookie
 * @description Obtiene el valor de una cookie específica.
 * 
 * @param {string} name - Nombre de la cookie a obtener
 * @returns {string|null} Valor de la cookie o null si no existe
 */
function getCookie(name) {

    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }

    return null;

}

/**
 * @constant {Object} textos_ES
 * @description Objeto que contiene todas las traducciones en español.
 * Las claves son identificadores de elementos y los valores son las traducciones.
 */

/**
 * @constant {Object} textos_EN
 * @description Objeto que contiene todas las traducciones en inglés.
 * Las claves son identificadores de elementos y los valores son las traducciones.
 */