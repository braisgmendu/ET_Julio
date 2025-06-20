/**
 * @class test_IU
 * @description Clase principal para la gestión y ejecución de tests de la interfaz de usuario.
 * Maneja la ejecución de tests, la visualización de resultados y la gestión de columnas en las tablas de resultados.
 */
class test_IU {
  /**
   * @constructor
   * @param {string} entidad - Nombre de la entidad a testear
   * @param {object} instance - Instancia de la entidad a testear
   */
  constructor(entidad, instance) {
    this.dom = new Dom();
    this.entidad = entidad;
    this.instance = instance;

    // Hacer la referencia global para los onclick
    window.testInstance = this;

    // mostrar boton de test una vez creada la clase de entidad
    this.dom.mostrar_boton_test();
  }

  /**
   * @method modificarColumnasTest
   * @description Modifica las columnas visibles en la tabla de resultados de tests
   * @param {string} columna - Nombre de la columna a modificar
   * @returns {void} - No retorna nada
   */
  modificarColumnasTest(columna) {
    this.dom.modificarColumnasTest(columna);
  }

  /**
   * @method resetColumnasTest
   * @description Restablece las columnas visibles a su configuración por defecto
   * @returns {void} - No retorna nada
   */
  resetColumnasTest() {
    this.dom.resetColumnasTest();
  }

  /**
   * @method test_run
   * @description Ejecuta todos los tests definidos para la entidad
   * @returns {void} - No retorna nada
   */
  test_run() {
    document.getElementById("div_IU_test").style.display = "block";
    document.getElementById("resultadodeftest").innerHTML = "";
    document.getElementById("tablaresultadostest").innerHTML = "";
    document.getElementById("resultadodefpruebas").innerHTML = "";
    document.getElementById("tablaresultadosprueba").innerHTML = "";
    document.getElementById("resultadotest").innerHTML = "";
    document.getElementById("salidaresultadosprueba").innerHTML = "";
    document.getElementById("titulo_modal").className =
      "titulo_modal_" + this.entidad;

    if (typeof this.dom.mostrarModal === "function") {
      this.dom.mostrarModal(); // Asegura que se llame al método de la subclase
    } else {
      console.error("mostrarModal no está definido en esta instancia");
    }
    this.resolve_def_test();
    this.resolve_pruebas();

    this.array_def = eval(this.entidad + "_def_tests");
    this.array_tests = eval(this.entidad + "_tests");
    this.array_tests_file = eval(this.entidad + "_tests_files");

    this.test_entidad();
    this.test_entidad_files();
  }

  /**
   * @method resolve_def_test
   * @description Resuelve y verifica las definiciones de los tests
   * @returns {void} - No retorna nada
   */
  resolve_def_test() {
    this.verificarDefTest();
  }

  /**
   * @method resolve_pruebas
   * @description Resuelve y verifica las pruebas de los tests
   * @returns {void} - No retorna nada
   */
  resolve_pruebas() {
    this.verificarPruebas();
    this.verificarPruebas_file();
  }

  // En el método test_entidad(), reemplaza la construcción de salidatest:
  /**
   * @method test_entidad
   * @description Ejecuta todos los tests definidos para la entidad
   * @returns {void} - No retorna nada
   */
  test_entidad(){
    this.validaciones = new Dom_validations(new Validaciones_Atomicas(), this.entidad, this.instance);
    this.dom.construirDomTest(); // Usar el nuevo método
    
    // Construir encabezado usando el nuevo método
    let salidatest = this.dom.crearEncabezadoTest(this.dom.columnas_test_disponibles);
    
    for (let i = 0; i < this.array_tests.length; i++) {
        let campotest = this.array_tests[i][1];
        let numdeftest = this.array_tests[i][2];
        let numprueba = this.array_tests[i][3];
        let acciontest = this.array_tests[i][4];
        let valortest = this.array_tests[i][5];
        let respuestatest = this.array_tests[i][6];
        
        // Cargo formulario limpio
        this.instance.cargar_formulario(acciontest);
    
        // Cargo el botón porque sino da un error en la función de dibujado del mensaje de error
        let botonsumit = document.createElement('input');
        botonsumit.id = 'submit_button';
        document.getElementById('IU_form').append(botonsumit);
    
        // Recupero la definición del test correspondiente
        let def = this.devolver_def(numdeftest);
    
        // Asigno el valor de prueba al campo correspondiente
        document.getElementById(campotest).value = valortest;
    
        // Llamo a la función de validación del campo según su acción
        let resultadotest = this.validaciones.comprobarCampo(campotest, acciontest);
        
        // Compruebo si el resultado del test y la respuesta esperada es la misma
        let resultadoestetest = (respuestatest === resultadotest) ? 'CORRECTO' : 'INCORRECTO';
    
        // Crear objeto con los datos de la fila
        const datosFilas = {
            'NumDefTest': numdeftest,
            'NumPrueba': numprueba,
            'campo': campotest,
            'Prueba': def[3],
            'Accion': acciontest,
            'valor': valortest,
            'Respuesta Test': resultadotest,
            'Respuesta esperada': `${respuestatest} (${this.traduccion(respuestatest)})`,
            'Resultado': resultadoestetest
        };
        
        // Construir la fila usando el nuevo método
        salidatest += this.dom.crearFilaTest(datosFilas);
    }

    // Presentar el resultado
    document.getElementById('salidaresultadosprueba').innerHTML = salidatest;
    document.getElementById('resultadopruebas').style.display = 'block';
    
    // Aplicar visibilidad inicial
    this.dom.actualizarVisibilidadColumnasTest();
  }

  /**
   * @method getCookie
   * @description Obtiene el valor de una cookie por su nombre
   * @param {string} name - Nombre de la cookie
   * @returns {string|null} Valor de la cookie o null si no existe
   */
  getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  }

  /**
   * @method traduccion
   * @description Obtiene la traducción de un código según el idioma actual
   * @param {string} codigo - Código de traducción
   * @returns {string} Texto traducido
   */
  traduccion(codigo) {
    var lang = this.getCookie("lang");
    var traduccion;
    switch (lang) {
      case "ES":
        traduccion = textos_ES;
        break;
      case "EN":
        traduccion = textos_EN;
        break;
      default:
        traduccion = textos_ES;
        break;
    }
    return traduccion[codigo];
  }

  /**
   * @method test_entidad_files
   * @description Ejecuta todos los tests definidos para la entidad
   * @returns {void} - No retorna nada
   */
  test_entidad_files() {
    this.validaciones = new Dom_validations(
      new Validaciones_Atomicas(),
      this.entidad,
      this.instance
    );
    let salidatest = `<tr><th>NumDefTest</th><th>NumPrueba</th><th>Campo</th><th>Prueba</th><th>Accion</th><th>valor</th><th>Respuesta Test</th><th>Respuesta esperada</th><th>Resultado</th></tr>`;

    for (let i = 0; i < this.array_tests_file.length; i++) {
      let campotest = this.array_tests_file[i][1];
      let numdeftest = this.array_tests_file[i][2];
      let numprueba = this.array_tests_file[i][3];
      let acciontest = this.array_tests_file[i][4];
      let clasedetest = this.array_tests_file[i][5];
      let valortest = this.array_tests_file[i][6];
      let respuestatest = this.array_tests_file[i][7];

      // Cargo formulario limpio
      this.instance.cargar_formulario(acciontest);
      let botonsumit = document.createElement("input");
      botonsumit.id = "submit_button";
      document.getElementById("IU_form").append(botonsumit);

      // Manejo diferente según la acción
      if (acciontest === 'SEARCH') {
        // Para SEARCH, solo asignamos el nombre del archivo como valor de texto
        document.getElementById(campotest).value = valortest;
      } else {
        // Para ADD y EDIT, manejamos el archivo completo
        if (valortest.length !== 0) {
          const file = new File([new ArrayBuffer(valortest[2])], valortest[0], {
            type: valortest[1],
            webkitRelativePath: "C:\\fakepath\\" + valortest[0],
          });

          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);
          const fileList = dataTransfer.files;
          document.getElementById(campotest).files = fileList;
        }
      }

      // Coloco validaciones para la acción
      this.validaciones.load_validations(acciontest);

      // Llamo a comprobarCampo
      const resultadotest = this.validaciones.comprobarCampo(
        campotest,
        acciontest
      );

      // Compruebo si el resultado del test y la respuesta esperada es la misma
      const resultadoestetest =
        respuestatest === resultadotest ? "CORRECTO" : "INCORRECTO";

      const lineasalida = `<tr><td>${numdeftest}</td><td>${numprueba}</td><td>${campotest}</td><td>${clasedetest}</td><td>${acciontest}</td><td>${valortest}</td><td>${resultadotest}</td><td>${respuestatest} (${this.traduccion(
        respuestatest
      )})</td><td>${resultadoestetest}</td></tr>`;
      salidatest += lineasalida;
    }

    // presento el resultado
    document.getElementById("salidaresultadosprueba").innerHTML += salidatest;
    document.getElementById("resultadopruebas").style.display = "block";
  }

  /**
   * @method devolver_def
   * @description Devuelve la definición de un test por su número
   * @param {number} num_def - Número de la definición del test
   * @returns {Array} Definición del test
   */
  devolver_def(num_def) {
    for (let i = 0; i < this.array_def.length; i++) {
      if (this.array_def[i][2] == num_def) {
        return this.array_def[i];
      }
    }
  }

  /**
   * @method verificarDefTest
   * @description Verifica la estructura y tipos de datos de las definiciones de los tests
   * @returns {void} - No retorna nada
   */
  verificarDefTest() {
    let probe_def = eval(this.entidad + "_def_tests");
    let filacorrecta = true;

    let salidatabla =
      "<tr><th>Entidad</><th>Campo</th><th>Num. DefTest</th><th colspan='7'>Datos</th>";
    let salidalinea = "";

    probe_def.forEach((element) => {
      salidalinea = "<tr>";
      salidalinea += "<td>" + element[0] + "</td>";
      salidalinea += "<td>" + element[1] + "</td>";
      salidalinea += "<td>" + element[2] + "</td>";
      filacorrecta = true;
      for (let i = 0; i < 7; i++) {
        salidalinea += "<td>" + typeof element[i] + "</td>";
      }
      if (
        typeof element[0] == "string" &&
        typeof element[1] == "string" &&
        typeof element[2] == "number" &&
        typeof element[3] == "string" &&
        typeof element[4] == "string" &&
        (typeof element[5] == "string" || typeof element[5] == "boolean") &&
        typeof element[6] == "string"
      ) {
        salidalinea += "<td>CORRECTA</td>";
      } else {
        salidalinea += "<td>ERROR</td>";
        filacorrecta = false;
      }
      salidalinea += "</tr>";
      salidatabla += salidalinea;
    });

    document.getElementById("tablaresultadostest").innerHTML += salidatabla;

    if (filacorrecta) {
      document.getElementById("resultadodeftest").className =
        "resultadodeftest";
    }

    document.getElementById("contenidoTests").style.display = "block";
  }

  /**
   * @method verificarPruebas
   * @description Verifica la estructura y tipos de datos de las pruebas
   * @returns {void} - No retorna nada
   */
  verificarPruebas() {
    let probe_def = eval(this.entidad + "_tests");
    let filacorrecta = true;

    let salidatabla =
      "<tr><th>Entidad</><th>Campo</th><th>Num.Def</th><th>Num.Prob</th><th colspan='6'>Datos</th>";
    let salidalinea = "";

    probe_def.forEach((element) => {
      salidalinea = "<tr>";
      salidalinea += "<td>" + element[0] + "</td>";
      salidalinea += "<td>" + element[1] + "</td>";
      salidalinea += "<td>" + element[2] + "</td>";
      salidalinea += "<td>" + element[3] + "</td>";
      filacorrecta = true;
      for (let i = 0; i < 7; i++) {
        salidalinea += "<td>" + typeof element[i] + "</td>";
      }
      if (
        typeof element[0] == "string" &&
        typeof element[1] == "string" &&
        typeof element[2] == "number" &&
        typeof element[3] == "number" &&
        typeof element[4] == "string" &&
        typeof element[5] == "string" &&
        (typeof element[6] == "string" || typeof element[6] == "boolean")
      ) {
        salidalinea += "<td>CORRECTA</td>";
      } else {
        salidalinea += "<td>ERROR</td>";
        filacorrecta = false;
      }
      salidalinea += "</tr>";
      salidatabla += salidalinea;
    });

    document.getElementById("tablaresultadosprueba").innerHTML += salidatabla;

    if (filacorrecta) {
      document.getElementById("resultadodefpruebas").className =
        "resultadodefpruebas";
    }

    document.getElementById("contenidoPruebas").style.display = "block";
  }

  /**
   * @method verificarPruebas_file
   * @description Verifica la estructura y tipos de datos de las pruebas de archivos
   * @returns {void} - No retorna nada
   */
  verificarPruebas_file() {
    let probe_def = eval(this.entidad + "_tests_files");
    let filacorrecta = true;

    let salidatabla =
      "<tr><th>Entidad</><th>Campo</th><th>Num.Def</th><th>Num.Prob</th><th colspan='8'>Datos</th>";
    let salidalinea = "";

    probe_def.forEach((element) => {
      salidalinea = "<tr>";
      salidalinea += "<td>" + element[0] + "</td>";
      salidalinea += "<td>" + element[1] + "</td>";
      salidalinea += "<td>" + element[2] + "</td>";
      salidalinea += "<td>" + element[3] + "</td>";
      filacorrecta = true;
      for (let i = 0; i < 8; i++) {
        salidalinea += "<td>" + typeof element[i] + "</td>";
      }
      if (
        typeof element[0] == "string" &&
        typeof element[1] == "string" &&
        typeof element[2] == "number" &&
        typeof element[3] == "number" &&
        typeof element[4] == "string" &&
        typeof element[5] == "string" &&
        (typeof element[6] == "object" || typeof element[6] == "string") &&
        (typeof element[7] == "string" || typeof element[7] == "boolean")
      ) {
        salidalinea += "<td>CORRECTA</td>";
      } else {
        salidalinea += "<td>ERROR</td>";
        filacorrecta = false;
      }
      salidalinea += "</tr>";
      salidatabla += salidalinea;
    });

    document.getElementById("tablaresultadosprueba").innerHTML += salidatabla;

    if (filacorrecta) {
      document.getElementById("resultadotest").className = "resultadotest";
    }

    document.getElementById("contenidoPruebas").style.display = "block";
  }
} //end class
