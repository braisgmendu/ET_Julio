/**
 * @class Entidad_Abstracta
 * @extends Dom
 * @description Clase abstracta base para todas las entidades del sistema.
 * Proporciona funcionalidad común para la gestión de entidades, incluyendo validaciones y tests.
 */
class Entidad_Abstracta extends Dom {
  /**
   * @constructor
   * @param {string} entidad - Nombre de la entidad
   * @param {object} def_estructura - Definición de la estructura de la entidad
   */
  constructor(entidad, def_estructura) {
    super();
	if (eval(this.datosespecialestabla)){}
		else{
			this.datosespecialestabla = Array();
	}
	this.entidad = entidad;
	this.def_estructura = def_estructura; 
	this.domValidations = new Dom_validations(new Validaciones_Atomicas(), entidad);
	this.access_functions = new ExternalAccess();
	this.tests = new test_IU(this.entidad,this);
	document.getElementById("workspace").style.display = "block";
    this.cerrar_test();
    this.SEARCH();
  }

  /**
   * @method cerrar_test
   * @description Cierra la visualización de los tests
   */
  cerrar_test() {
    // ... existing code ...
  }

  /**
   * @method SEARCH
   * @description Realiza una búsqueda en la entidad
   */
  SEARCH() {
    // ... existing code ...
  }

  createFormGenerico(action, parametros = null) {
    this.cargar_formulario(action);

    if (parametros) {
      this.load_data(parametros);
      document.getElementById("link_file_" + this.entidad).innerHTML =
        this.change_value_IU(
          "file_" + this.entidad,
          parametros["file_" + this.entidad]
        );
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
  change_value_IU(atributo, valor) {
    return valor;
  }


  cargar_formulario(action) {
    if (eval(this.cargar_formularios_estatico)) {
      this.cargar_formularios_estatico();
    } else {
      this.createForm(action, this.def_estructura);
    }
  }
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

  cambiacolumnastabla(atributo) {
    document.querySelector("th[class='" + atributo + "']").style.display =
      "none";
  }
}
