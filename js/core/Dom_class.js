/**
 * @class Dom
 * @description Clase principal que maneja la manipulación del DOM y la interfaz de usuario.
 * Esta clase es responsable de crear y gestionar formularios, tablas, modales y otros elementos
 * de la interfaz. Proporciona funcionalidades para la creación dinámica de formularios basados
 * en estructuras de datos, manejo de tablas de datos, gestión de errores y visualización de
 * resultados de tests.
 */
class Dom {
	
  /**
   * @constructor
   * @description Inicializa la clase Dom con las referencias básicas al formulario y configuración
   * de columnas para tests. Establece las columnas disponibles y visibles por defecto para
   * la visualización de resultados de tests.
   */
  constructor() {

	  this.form = document.getElementById("IU_form");
      this.columnas_test_disponibles = [
        'NumDefTest', 'NumPrueba', 'campo', 'Prueba', 'Accion', 
        'valor', 'Respuesta Test', 'Respuesta esperada', 'Resultado'
    ];
    this.columnas_test_visibles = [
      'NumPrueba', 'valor', 'Respuesta Test','Respuesta esperada', 'Resultado'
    ]; // Columnas visibles por defecto
  }
   /**
   * @method createForm
   * @description Crea un formulario dinámico basado en la estructura proporcionada y la acción solicitada.
   * El método maneja diferentes tipos de formularios (ADD, EDIT, SEARCH, DELETE, SHOWCURRENT) y
   * aplica lógica específica para cada tipo. Limpia el formulario existente y crea nuevos campos
   * según la estructura de la entidad.
   * @param {string} action - La acción a realizar (ADD, EDIT, SEARCH, DELETE, SHOWCURRENT)
   * @param {object} estructura - La estructura de la entidad que define los campos del formulario
   */
  createForm(action, estructura) {
    if (!estructura || typeof estructura !== "object") {
      console.error("Estructura inválida");
      return;
    }

    // Limpiar formulario previo
    this.form.innerHTML = "";

    const atributos = estructura.attributes;
    const lista_atributos = estructura.attributes_list;

    // Decidir lógica según la acción
    const actionHandlers = {
      ADD: this.handleAddField.bind(this),
      EDIT: this.handleEditField.bind(this),
      SEARCH: this.handleSearchField.bind(this),
	  DELETE :this.handleDeleteField.bind(this),
	  SHOWCURRENT :this.handleDeleteField.bind(this),
    };

    const handleField = actionHandlers[action.toUpperCase()];
    if (!handleField) {
      console.error("Acción no soportada");
      return;
    }

    // Crear campos según la lógica específica de la acción
    for (const nombreAtributo of lista_atributos) {
      const def = atributos[nombreAtributo];
      if (!def) continue;

      const field = handleField(nombreAtributo, def);
      if (field) {
        this.form.appendChild(field);
      }
    }
  }

  /**
   * @method handleAddField
   * @description Maneja la creación de campos específicos para formularios de adición.
   * Excluye campos autoincrementales y campos de archivo.
   * @param {string} nombreAtributo - Nombre del atributo a crear
   * @param {object} def - Definición del campo
   * @returns {HTMLElement|null} El elemento del campo creado o null si debe ser excluido
   */
  handleAddField(nombreAtributo, def) {
    if (def.is_autoincrement || nombreAtributo.startsWith("file_")) {
      return null; // Excluir estos campos en ADD
    }
    return this.createField(nombreAtributo, def); // Crear campo normalmente
  }

  /**
   * @method handleEditField
   * @description Maneja la creación de campos específicos para formularios de edición.
   * Marca como readonly los campos que son clave primaria o campos de archivo.
   * @param {string} nombreAtributo - Nombre del atributo a crear
   * @param {object} def - Definición del campo
   * @returns {HTMLElement} El elemento del campo creado
   */
  handleEditField(nombreAtributo, def) {
    if (def.is_pk || nombreAtributo.startsWith("file_")) {
      return this.createField(nombreAtributo, def, true); // Campo readonly
    }
    return this.createField(nombreAtributo, def); // Crear campo normalmente
  }

  handleSearchField(nombreAtributo, def) {
    if (nombreAtributo.startsWith("nuevo_file_")) {
		return null; // Excluir estos campos en SEARCH
	}
	
    
    return this.createField(nombreAtributo, def); // Campos sin restricciones específicas
  }
  handleDeleteField(nombreAtributo, def) {
	if (nombreAtributo.startsWith("nuevo_file_")) {
	  return null; // Excluir estos campos en DELETE
	}
	return this.createField(nombreAtributo, def,true); // Campos sin restricciones específicas
  }

  /**
   * @method createField
   * @description Crea un campo de formulario genérico con todos sus elementos asociados.
   * Maneja diferentes tipos de campos (input, select, etc.) y crea los elementos de error
   * correspondientes.
   * @param {string} nombreAtributo - Nombre del atributo
   * @param {object} def - Definición del campo
   * @param {boolean} isReadOnly - Indica si el campo debe ser de solo lectura
   * @returns {HTMLElement} El contenedor div con todos los elementos del campo
   */
  createField(nombreAtributo, def, isReadOnly = false) {
    const div = document.createElement("div");
    const campo = document.createElement(def.html.tag);

    // Setear tipo si aplica
    if (def.html.type) {
      campo.setAttribute("type", def.html.type);
    }

    // Asignar atributos comunes
    campo.setAttribute("id", nombreAtributo);
    campo.setAttribute("name", nombreAtributo);

    if (isReadOnly) {
      campo.setAttribute("readonly", "readonly");
    }

    // Manejar opciones para select
    if (def.html.tag === "select" && def.html.options) {
      def.html.options.forEach(optionValue => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        campo.appendChild(option);
      });
    }

    // Si no es oculto, crear label
    if (def.html.type !== "hidden") {
      const label = document.createElement("label");
      label.setAttribute("for", nombreAtributo);
      label.textContent = nombreAtributo;
      div.appendChild(label);
    }
	if(nombreAtributo.startsWith("file_")){
		const link = document.createElement("a");
		link.setAttribute("id", "link_" + nombreAtributo);
		link.setAttribute("href", "http://193.147.87.202/ET2/filesuploaded/files_" + nombreAtributo + "/");
		const img = document.createElement("img");
		img.setAttribute("src", "assets/icons/FILE.png");
		link.appendChild(img);
		div.appendChild(link);
	}

    // Crear y agregar elementos de error
    const errorSpan = document.createElement("span");
    errorSpan.id = "div_error_" + nombreAtributo;
    const errorA = document.createElement("a");
    errorA.id = "error_" + nombreAtributo;
    errorSpan.appendChild(errorA);

    // Agregar campo y errores al contenedor
    div.appendChild(campo);
    div.appendChild(errorSpan);

    return div;
  }
/**
 * @method colocarboton
 * @description Crea un botón para el formulario. El botón se crea en el contenedor de botones del formulario.
 * @param {string} action - La acción a realizar (ADD, EDIT, SEARCH, DELETE, SHOWCURRENT)
 */
  colocarboton(action) {
    let divboton = document.createElement("div");
    divboton.id = "div_boton";

    document.getElementById("IU_form").appendChild(divboton);
    let boton = document.createElement("button");
    boton.id = "submit_button";
    boton.type = "submit";
    boton.className = "boton";
    let img = document.createElement("img");
    img.className = "img--boton";
    img.src = `assets/icons/${action}.png`;
    boton.appendChild(img);
    divboton.appendChild(boton);
  }
  /**
   * @method load_data
   * @description Carga los datos del formulario.
   * @param {object} contenido - Los datos a cargar en el formulario
   * @returns {void} - No retorna nada
   */
  load_data(contenido) {
    const elementosFormulario = document.forms["IU_form"].elements;

    for (let elemento of elementosFormulario) {
      const esArchivo = document.getElementById(elemento.id).type === "file";
      if (!esArchivo) {
        document.getElementById(elemento.id).value =
          contenido[elemento.id] || "";
      }
    }
  }
/**
 * @method construirSelect
 * @description Construye un select con las columnas disponibles para la tabla.
 * @returns {void} - No retorna nada
 */
  construirSelect() {
    document.getElementById("seleccioncolumnas").innerHTML = "";

    let optionselect = "";
    for (let atributo of this.atributos) {
      optionselect = document.createElement("option");
      optionselect.className = atributo;
      optionselect.innerHTML = atributo;
      optionselect.setAttribute(
        "onclick",
        "validar.modificarcolumnasamostrar('" + atributo + "');"
      );
      if (this.def_estructura.columnas_visibles_tabla.includes(atributo)) {
        optionselect.selected = true;
      }
      document.getElementById("seleccioncolumnas").append(optionselect);
    }
    setLang();
  }

  /**
   * @method hacertabla
   * @description Construye una tabla dinámica con los datos proporcionados.
   * Maneja la creación de encabezados, filas y celdas, incluyendo la sanitización
   * de datos para prevenir XSS. También agrega botones de acción para cada fila.
   * @returns {void} - No retorna nada
   */
  hacertabla() {
    // Títulos
    document.getElementById("text_title_page").className =
      "text_titulo_page_" + this.entidad;
    document.getElementById("title_page").style.display = "block";

    if (this.datos == "") {
      document.getElementById("id_tabla_datos").style.display = "block";
      document.getElementById("titulostablacabecera").innerHTML = "";
      document.getElementById("muestradatostabla").innerHTML = "";
      document.getElementById("muestradatostabla").className =
        "RECORDSET_VACIO";
    } else {
      let textolineatitulos = "<tr>";

      for (let atributo of this.atributos) {
        textolineatitulos +=
          '<th class="' + atributo + '">' + atributo + "</th>";
      }

      textolineatitulos += '<th colspan="3"></th>';
      textolineatitulos += "</tr>";

      let cabecera = document.getElementById("titulostablacabecera");
      cabecera.innerHTML = textolineatitulos;

      // Filas
      let textolineadatos = "";

      for (let i = 0; i < this.datos.length; i++) {
        textolineadatos += '<tr class="tabla-fila">';

        for (let clave in this.datos[i]) {
          if (this.datosespecialestabla.includes(clave)) {
            let valorcolumna = this.change_value_IU(
              clave,
              this.datos[i][clave]
            );
            textolineadatos +=
              '<td class="tabla-td-' + clave + '">' + valorcolumna + "</td>";
          } else {
            // Limpieza de código no deseado incrustado HTML y script
            let san = (obj) => {
              let value = obj?.toString() || "";
              return value.replace(/[&<>"'`]/g, function (match) {
                switch (match) {
                  case "&":
                    return "&amp;";
                  case "<":
                    return "&lt;";
                  case ">":
                    return "&gt;";
                  case '"':
                    return "&quot;";
                  case "'":
                    return "&#039;";
                  case "`":
                    return "&#x60;";
                }
              });
            };
            let valorE = san(this.datos[i][clave]);
            textolineadatos +=
              '<td class="tabla-td-' + clave + '">' + valorE + "</td>";
          }
        }

        // Crear los td para cada botón de llamada a función de formulario de acción (EDIT, DELETE O SHOWCURRENT)
        let lineaedit = this.crearboton(
          this.entidad,
          "EDIT",
          JSON.stringify(this.datos[i])
        );
        let lineadelete = this.crearboton(
          this.entidad,
          "DELETE",
          JSON.stringify(this.datos[i])
        );
        let lineashowcurrent = this.crearboton(
          this.entidad,
          "SHOWCURRENT",
          JSON.stringify(this.datos[i])
        );

        textolineadatos += lineaedit + lineadelete + lineashowcurrent;
        textolineadatos += "</tr>";
      }

      let cuerpo = document.getElementById("muestradatostabla");
      cuerpo.innerHTML = textolineadatos;
    }

    setLang();
  }

  /**
   * @method modificarcolumnasamostrar
   * @description Modifica la visibilidad de las columnas en la tabla.
   * Permite añadir o eliminar columnas de la visualización actual.
   * @param {string} atributo - Nombre del atributo/columna a modificar
   * @returns {void} - No retorna nada
   */
  modificarcolumnasamostrar(atributo) {
    let nuevascolumnas = Array();
    if (this.def_estructura.columnas_visibles_tabla.includes(atributo)) {
      // borrar ese atributo
      for (let i = 0; i < this.def_estructura.columnas_visibles_tabla.length; i++) {
        if (this.def_estructura.columnas_visibles_tabla[i] == atributo) {
        } else {
          nuevascolumnas.push(this.def_estructura.columnas_visibles_tabla[i]);
        }
      }
      this.def_estructura.columnas_visibles_tabla = nuevascolumnas;
    } else {
      // añadir
      this.def_estructura.columnas_visibles_tabla.push(atributo);
    }

    this.crearTablaDatos();
  }

  /**
   * @method mostrarocultarcolumnas
   * @description Muestra o oculta las columnas en la tabla.
   * @returns {void} - No retorna nada
   */
  mostrarocultarcolumnas() {
    for (let columna of this.atributos) {
      if (this.def_estructura.columnas_visibles_tabla.includes(columna)) {
      } else {
        //document.querySelector("th[class='"+columna+" tabla-th-"+columna+"']").style.display = 'none';
        document.querySelector("th[class='" + columna + "']").style.display =
          "none";
        let arraytds = document.querySelectorAll(
          "td[class='tabla-td-" + columna + "']"
        );
        for (let i = 0; i < arraytds.length; i++) {
          arraytds[i].style.display = "none";
        }
      }
    }
  }

  /**
   * @method mostrar_error_campo
   * @description Muestra un mensaje de error para un campo específico.
   * Actualiza la apariencia visual del campo y muestra el mensaje de error.
   * @param {string} id - ID del campo
   * @param {string} codigoerror - Código o mensaje de error a mostrar
   */
  mostrar_error_campo(id, codigoerror) {
    document.getElementById("div_error_" + id).style.display = "inline";
    document.getElementById("div_error_" + id).innerHTML = codigoerror;
    document.getElementById("div_error_" + id).className = codigoerror;
    document.getElementById(id).className = "errorcampo";
    document.getElementById("submit_button").focus();
    setLang();
  }

  /**
   * @method mostrar_exito_campo
   * @description Muestra un mensaje de éxito para un campo específico.
   * Actualiza la apariencia visual del campo y muestra el mensaje de éxito.
   * @param {string} id - ID del campo
   * @returns {void} - No retorna nada
   */
  mostrar_exito_campo(id) {
    document.getElementById("div_error_" + id).style.display = "none";
    document.getElementById("div_error_" + id).innerHTML = "";
    document.getElementById(id).className = "exitocampo";
  }

  /**
   * @method crearboton
   * @description Crea un botón para el formulario.
   * @param {string} entidad - La entidad a la que pertenece el botón
   * @param {string} accion - La acción a realizar (ADD, EDIT, SEARCH, DELETE, SHOWCURRENT)
   * @param {string} parametros - Los parámetros a pasar al botón
   * @returns {string} - El HTML del botón creado
   */
  crearboton(entidad, accion, parametros) {
    let columna = document.createElement("td");
    let boton = document.createElement("button");
    let opcion = document.createElement("img");
    boton.id = "boton" + accion;
    boton.className = "boton";
    opcion.className = "img--button";
    opcion.src = "assets/icons/" + accion + ".png";
    let textoonclick = "validar.createFormGenerico('" + accion + "', " + parametros + ");"

    opcion.setAttribute("onclick", textoonclick);
    boton.appendChild(opcion);
    columna.appendChild(boton);
    return columna.outerHTML;
  }
  /**
   * @method cerrar_formulario
   * @description Cierra el formulario actual.
   * @returns {void} - No retorna nada
   */
  cerrar_formulario() {
    document.getElementById("IU_form").innerHTML = "";
    document.getElementById("IU_form").setAttribute("onsubmit", "");
    document.getElementById("IU_form").setAttribute("action", "");
    document.getElementById("div_IU_form").style.display = "none";
  }
  /**
   * @method cerrar_test
   * @description Cierra el test actual.
   * @returns {void} - No retorna nada
   */
  cerrar_test() {
    document.getElementById("div_IU_test").style.display = "none"; //Para ocultarlo
    //Para limpiarlo
    document.getElementById("resultadodeftest").innerHTML = "";
    document.getElementById("tablaresultadostest").innerHTML = "";
    document.getElementById("resultadodefpruebas").innerHTML = "";
    document.getElementById("tablaresultadosprueba").innerHTML = "";
    document.getElementById("resultadotest").innerHTML = "";
    document.getElementById("salidaresultadosprueba").innerHTML = "";
  }
  /**
   * @method cerrar_tabla
   * @description Cierra la tabla actual.
   * @returns {void} - No retorna nada
   */
  cerrar_tabla() {
    document.getElementById("titulostablacabecera").innerHTML = "";
    document.getElementById("muestradatostabla").innerHTML = "";
    document.getElementById("id_tabla_datos").style.display = "none";
    document.getElementById("title_page").style.display = "none";
    document.getElementById("workspace").style.display = "none";

    this.ocultar_boton_test();
    this.cerrar_test();
  }
  /**
   * @method ocultar_boton_test
   * @description Oculta el botón de test.
   * @returns {void} - No retorna nada
   */
  ocultar_boton_test(){
        document.getElementById('botonTEST').style.display = 'none';
    }
  /**
   * @method mostrar_boton_test
   * @description Muestra el botón de test.
   * @returns {void} - No retorna nada
   */
    mostrar_boton_test(){
        document.getElementById('botonTEST').style.display = 'inline';
    }

  /**
   * @method abrirModalError
   * @description Abre un modal para mostrar mensajes de error.
   * Muestra un overlay y el mensaje de error en un modal centrado.
   * @param {string} errorMsg - Mensaje de error a mostrar
   * @returns {void} - No retorna nada
   */
  abrirModalError(errorMsg) {
    document.getElementById("error_action_modal").style.display = "block";
    document.getElementById("modal_action_overlay").style.display = "block";
    document.getElementById("error_action_msg").className = errorMsg;
    setLang();
  }

  /**
   * @method cerrarModalError
   * @description Cierra el modal de error y su overlay asociado.
   * Restaura la visibilidad normal de la interfaz.
   * @returns {void} - No retorna nada
   */
  cerrarModalError() {
    document.getElementById("error_action_modal").style.display = "none";
    document.getElementById("modal_action_overlay").style.display = "none";
    //document.getElementById('error_action_msg').removeAttribute('class');
  }
  /**
   * @method mostrarModal
   * @description Muestra el modal de resultados.
   * @returns {void} - No retorna nada
   */
  mostrarModal() {
    const modal = document.getElementById("modalResultados");
    modal.style.display = "block"; // Mostrar el modal
  }
  /**
   * @method cerrarModal
   * @description Cierra el modal de resultados.
   * @returns {void} - No retorna nada
   */
  cerrarModal() {
    const modal = document.getElementById("modalResultados");
    modal.style.display = "none"; // Ocultar el modal
  }
  
/**
 * @method construirSelectTest
 * @description Construye el select de columnas de test.
 * @returns {void} - No retorna nada
 */
construirSelectTest() {
    const selectElement = document.getElementById("seleccioncolumnastest");
    if (!selectElement) {
        console.error("Elemento seleccioncolumnastest no encontrado");
        return;
    }
    
    selectElement.innerHTML = "";

    for (let columna of this.columnas_test_disponibles) {
        let optionselect = document.createElement("option");
        optionselect.className = columna;
        optionselect.innerHTML = columna;
        optionselect.setAttribute(
            "onclick",
            "window.testInstance.modificarColumnasTest('" + columna + "');"
        );
        if (this.columnas_test_visibles.includes(columna)) {
            optionselect.selected = true;
        }
        selectElement.appendChild(optionselect);
    }
    setLang();
}

/**
 * @method modificarColumnasTest
 * @description Modifica las columnas visibles en test.
 * @param {string} columna - La columna a modificar
 */
modificarColumnasTest(columna) {
    let nuevascolumnas = [];
    
    if (this.columnas_test_visibles.includes(columna)) {
        // Remover la columna
        for (let i = 0; i < this.columnas_test_visibles.length; i++) {
            if (this.columnas_test_visibles[i] !== columna) {
                nuevascolumnas.push(this.columnas_test_visibles[i]);
            }
        }
        this.columnas_test_visibles = nuevascolumnas;
    } else {
        // Añadir la columna
        this.columnas_test_visibles.push(columna);
    }
    
    // Actualizar la visualización de las tablas de test
    this.actualizarVisibilidadColumnasTest();
}

/**
 * @method actualizarVisibilidadColumnasTest
 * @description Actualiza la visibilidad de las columnas en las tablas de test.
 * @returns {void} - No retorna nada
 */
actualizarVisibilidadColumnasTest() {
    const tablas = ['salidaresultadosprueba', 'tablaresultadostest', 'tablaresultadosprueba'];
    
    tablas.forEach(tablaId => {
        const tabla = document.getElementById(tablaId);
        if (tabla) {
            this.aplicarVisibilidadColumnas(tabla);
        }
    });
}

/**
 * @method aplicarVisibilidadColumnas
 * @description Aplica la visibilidad a una tabla específica.
 * @param {string} tabla - La tabla a la que se le aplicará la visibilidad
 */
aplicarVisibilidadColumnas(tabla) {
    // Obtener todas las filas de la tabla
    const filas = tabla.querySelectorAll('tr');
    
    filas.forEach(fila => {
        const celdas = fila.querySelectorAll('th, td');
        celdas.forEach((celda, index) => {
            if (index < this.columnas_test_disponibles.length) {
                const nombreColumna = this.columnas_test_disponibles[index];
                if (this.columnas_test_visibles.includes(nombreColumna)) {
                    celda.style.display = '';
                } else {
                    celda.style.display = 'none';
                }
            }
        });
    });
}


/**
 * @method construirDomTest
 * @description Construye el DOM del test con el selector de columnas.
 * @returns {void} - No retorna nada
 */
construirDomTest() {
    // Crear el contenedor del selector si no existe
    let selectorContainer = document.getElementById("selector_columnas_test");
    if (!selectorContainer) {
        selectorContainer = document.createElement("div");
        selectorContainer.id = "selector_columnas_test";
        selectorContainer.innerHTML = `
            <label for="seleccioncolumnastest">Seleccionar columnas a mostrar:</label>
            <select id="seleccioncolumnastest" multiple size="6"></select>
            <button type="button" onclick="validar.dom.resetColumnasTest()">Resetear</button>
        `;
        
        // Insertar antes de las tablas de resultados
        const contenidoTests = document.getElementById("contenidoTests");
        if (contenidoTests) {
            contenidoTests.insertBefore(selectorContainer, contenidoTests.firstChild);
        }
    }
    
    // Construir el select
    this.construirSelectTest();
}

// Método para resetear las columnas a la configuración por defecto
resetColumnasTest() {
    this.columnas_test_visibles = [
        'campo', 'Prueba', 'Accion', 'valor', 'Respuesta Test', 'Resultado'
    ];
    this.construirSelectTest();
    this.actualizarVisibilidadColumnasTest();
}

// Método mejorado para crear encabezados de tabla con identificadores
crearEncabezadoTest(columnas) {
    let salidatest = '<tr>';
    columnas.forEach((columna, index) => {
        salidatest += `<th data-columna="${columna}">${columna}</th>`;
    });
    salidatest += '</tr>';
    return salidatest;
}

// Método para crear fila de datos con identificadores
crearFilaTest(datos) {
    let fila = '<tr>';
    this.columnas_test_disponibles.forEach(columna => {
        const valor = datos[columna] || '';
        fila += `<td data-columna="${columna}">${valor}</td>`;
    });
    fila += '</tr>';
    return fila;
}
}
