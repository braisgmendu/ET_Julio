/**
 * @class Entidad_Abstracta
 * @extends Dom
 * @description Clase abstracta base para todas las entidades del sistema.
 * Esta clase proporciona la funcionalidad base para la gestión de entidades, incluyendo:
 * - Gestión de formularios (creación, carga, validación)
 * - Operaciones CRUD (ADD, EDIT, DELETE, SEARCH)
 * - Manejo de tablas de datos
 * - Integración con validaciones y tests
 * - Gestión de archivos y datos especiales
 * 
 * @property {string} entidad - Nombre de la entidad
 * @property {object} def_estructura - Definición de la estructura de la entidad
 * @property {Array} datosespecialestabla - Array para datos especiales de la tabla
 * @property {Dom_validations} domValidations - Instancia de validaciones
 * @property {ExternalAccess} access_functions - Instancia para acceso externo
 * @property {test_IU} tests - Instancia para tests de la interfaz
 */
class Entidad_Abstracta extends Dom {
  /**
   * @constructor
   * @description Inicializa la entidad abstracta con sus componentes básicos.
   * Configura las validaciones, acceso externo y tests, además de inicializar
   * la visualización del workspace.
   * 
   * @param {string} entidad - Nombre de la entidad
   * @param {object} def_estructura - Definición de la estructura de la entidad
   */
  constructor(entidad, def_estructura) {
    super();
    
    this.entidad = entidad;
    this.def_estructura = def_estructura;
    if(eval(this.def_estructura.columnas_modificadas_tabla)){
      this.datosespecialestabla = this.def_estructura.columnas_modificadas_tabla;
    }
    else{
      this.datosespecialestabla = Array();
    }
    this.domValidations = new Dom_validations(new Validaciones_Atomicas(), entidad, this);
    this.access_functions = new ExternalAccess();
    this.tests = new test_IU(this.entidad, this);
    document.getElementById("workspace").style.display = "block";
    this.cerrar_test();
    this.SEARCH();
  }




  /**
   * @method createFormGenerico
   * @description Crea un formulario genérico para una acción específica.
   * Proceso:
   * 1. Carga el formulario
   * 2. Carga los datos si se proporcionan
   * 3. Configura las validaciones
   * 4. Añade el botón de acción
   * 5. Configura los eventos del formulario
   * 6. Aplica la visibilidad de columnas según configuración
   * @param {string} action - Acción a realizar (ADD, EDIT, DELETE, SEARCH)
   * @param {object} parametros - Parámetros opcionales para cargar en el formulario
   * 
   * @returns {void} - No retorna nada
   */
  createFormGenerico(action, parametros = null) {
    this.cargar_formulario(action);

    if (parametros) {
      this.load_data(parametros);

      const fileAttribute = "file_" + this.entidad;
      const linkElement = document.getElementById("link_" + fileAttribute);
      
      if (linkElement && parametros[fileAttribute]) {
        linkElement.innerHTML = this.change_value_IU(
            fileAttribute,
            parametros[fileAttribute]
        );
      }
    }

    document.getElementById("class_contenido_titulo_form").className =
      "text_contenido_titulo_form_" + this.entidad + "_" + action;

    this.domValidations.load_validations(action);
    this.colocarboton(action);

    document
      .getElementById("IU_form")
      .setAttribute(
        "onsubmit",
        "return validar.domValidations.submit_test('" + action + "');"
      );
    document
      .getElementById("IU_form")
      .setAttribute("action", "javascript:validar." + action + "();");
    document.getElementById("div_IU_form").style.display = "block";
    setLang();
  }

  /**
   * @method change_value_IU
   * @description Método para transformar valores antes de mostrarlos en la interfaz.
   * Puede ser sobrescrito por las clases hijas para implementar transformaciones específicas.
   * Por defecto retorna el valor original sin modificar.
   * 
   * @param {string} atributo - Nombre del atributo
   * @param {any} valor - Valor a transformar
   * @returns {any} Valor transformado (por defecto retorna el valor original)
   */
  change_value_IU(atributo, valor) {
    // Implementación por defecto: retorna el valor original
    // Las clases hijas pueden sobrescribir este método para transformaciones específicas
    return valor;
  }

  /**
   * @method cargar_formulario
   * @description Carga el formulario para una acción específica.
   * Intenta usar un método estático si existe, o crea un formulario dinámico.
   * 
   * @param {string} action - Acción para la que cargar el formulario
   * @returns {void} - No retorna nada
   */
  cargar_formulario(action) {
    if (eval(this.cargar_formularios_estatico)) {
      this.cargar_formularios_estatico();
    } else {
      this.cargar_formulario_dinamico(action, this.def_estructura);
    }
  }

  /**
   * @method crearTablaDatos
   * @description Crea y configura la tabla de datos.
   * Proceso:
   * 1. Muestra la tabla
   * 2. Construye la estructura de la tabla
   * 3. Configura el selector de columnas
   * 4. Aplica la visibilidad de columnas según configuración
   * @returns {void} - No retorna nada
   */
  crearTablaDatos() {
    document.getElementById("id_tabla_datos").style.display = "block";

    //construir tabla
    this.hacertabla();
    //construir select
    this.construirSelect();

    //ocultar segun columnasamostrar
    if (this.datos != "") {
      this.mostrarocultarcolumnas();
    }
  }

    /**
   * @method SEARCH
   * @description Realiza una búsqueda en la entidad y actualiza la visualización
   * de los resultados en la tabla de datos.
   * Proceso:
   * 1. Envía la solicitud al backend
   * 2. Maneja la respuesta
   * 3. Actualiza la interfaz según el resultado
   * 
   * @returns {Promise} - Promesa que se resuelve cuando la operación se completa
   */
    async SEARCH() {
      await this.access_functions
        .back_request("IU_form", this.entidad, "SEARCH")
        .then((respuesta) => {
          //limpiar el formulario
  
          this.cargar_formulario("SEARCH");
          //quito los class de la muestra de filas
          document.getElementById("muestradatostabla").removeAttribute("class");
          //poner el div del formulario no visible
          document.getElementById("div_IU_form").style.display = "none";
          this.datos = respuesta["resource"];
          this.atributos = Object.keys(respuesta["criteriosbusqueda"]);
          this.crearTablaDatos();
  
          setLang();
  
        });
  
  
    }
  /**
   * @method ADD
   * @description Realiza la operación de añadir un nuevo registro.
   * Proceso:
   * 1. Envía la solicitud al backend
   * 2. Maneja la respuesta
   * 3. Actualiza la interfaz según el resultado
   * 
   * @returns {Promise} Promesa que se resuelve cuando la operación se completa
   */
  async ADD() {
    await this.access_functions
      .back_request("IU_form", this.entidad, "ADD")
      .then((respuesta) => {
        if (respuesta["ok"]) {
          //limpiar el formulario
          this.cargar_formulario("ADD");

          //poner el div del formulario no visible
          document.getElementById("div_IU_form").style.display = "none";

          this.SEARCH();
        } else {
          // mostrar mensaje error action
          // alert('error : '+respuesta['code']);

          // Usando modal
          this.abrirModalError(respuesta["code"]);
        }
      });
  }

  /**
   * @method DELETE
   * @description Realiza la operación de eliminar un registro.
   * Proceso:
   * 1. Envía la solicitud al backend
   * 2. Maneja la respuesta
   * 3. Actualiza la interfaz según el resultado
   * 
   * @returns {Promise} Promesa que se resuelve cuando la operación se completa
   */
  async DELETE() {
    await this.access_functions
      .back_request("IU_form", this.entidad, "DELETE")
      .then((respuesta) => {
        if (respuesta["ok"]) {
          //limpiar el formulario
          this.cargar_formulario("DELETE");

          //poner el div del formulario no visible
          document.getElementById("div_IU_form").style.display = "none";

          this.SEARCH();
        } else {
          // mostrar mensaje error action
          // alert('error : '+respuesta['code']);

          // Usando modal
          this.abrirModalError(respuesta["code"]);
        }
      });
  }

  /**
   * @method EDIT
   * @description Realiza la operación de editar un registro existente.
   * Proceso:
   * 1. Envía la solicitud al backend
   * 2. Maneja la respuesta
   * 3. Actualiza la interfaz según el resultado
   * 
   * @returns {Promise} Promesa que se resuelve cuando la operación se completa
   */
  async EDIT() {
    await this.access_functions
      .back_request("IU_form", this.entidad, "EDIT")
      .then((respuesta) => {
        if (respuesta["ok"]) {
          //limpiar el formulario
          this.cargar_formulario("EDIT");

          //poner el div del formulario no visible
          document.getElementById("div_IU_form").style.display = "none";

          this.SEARCH();
        } else {
          // mostrar mensaje error action
          // alert('error : '+respuesta['code']);

          // Usando modal
          this.abrirModalError(respuesta["code"]);
        }
      });
  }

  
}
