class test_IU {
    constructor(entidad, instance){
        this.dom = new Dom();
        this.entidad = entidad;
        this.instance = instance;
        // mostrar boton de test una vez creada la clase de entidad
        this.dom.mostrar_boton_test();
        
    }

    test_run(){

        document.getElementById('div_IU_test').style.display = 'block';
        document.getElementById('resultadodeftest').innerHTML = '';
        document.getElementById('tablaresultadostest').innerHTML = '';
        document.getElementById('resultadodefpruebas').innerHTML = '';
        document.getElementById('tablaresultadosprueba').innerHTML = '';
        document.getElementById('resultadotest').innerHTML = '';
        document.getElementById('salidaresultadosprueba').innerHTML = '';
        document.getElementById('titulo_modal').className = 'titulo_modal_'+this.entidad;

        if (typeof this.dom.mostrarModal === 'function') {
            this.dom.mostrarModal(); // Asegura que se llame al método de la subclase
        } else {
            console.error('mostrarModal no está definido en esta instancia');
        }
        this.resolve_def_test();
        this.resolve_pruebas();

        this.array_def = eval(this.entidad + '_def_tests');
        this.array_tests = eval(this.entidad+ '_tests');
        this.array_tests_file = eval(this.entidad+ '_tests_files');

        this.test_entidad();
        this.test_entidad_files();
        

    }

    resolve_def_test(){

        this.verificarDefTest();

    }

    resolve_pruebas(){

        this.verificarPruebas();
        this.verificarPruebas_file();

    }

    test_entidad(){

        this.validaciones = new Dom_validations(new Validaciones_Atomicas(), this.entidad);

        // construyo el titulo de la tabla de muestra
        let salidatest = `<tr><th>NumDefTest</th><th>NumPrueba</th><th>campo</th><th>Prueba</th><th>Accion</th><th>valor</th><th>Respuesta Test</th><th>Respuesta esperada</th><th>Resultado</th></tr>`
        for (let i = 0; i < this.array_tests.length; i++) {
            let campotest = this.array_tests[i][1];
            let numdeftest = this.array_tests[i][2];
            let numprueba = this.array_tests[i][3];
            let acciontest = this.array_tests[i][4];
            let valortest = this.array_tests[i][5];
            let respuestatest = this.array_tests[i][6]; //respuestatest = loquesea_KO / true
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
            //respuesta test = campotest_KO / true
            let resultadoestetest = (respuestatest === resultadotest) ? 'CORRECTO' : 'INCORRECTO';
        
            // Construyo la fila de salida de la prueba realizada
            let lineasalida = `<tr>
                <td>${numdeftest}</td>
                <td>${numprueba}</td>
                <td>${campotest}</td>
                <td>${def[3]}</td>
                <td>${acciontest}</td>
                <td>${valortest}</td>
                <td>${resultadotest}</td>
                <td>${respuestatest} (${this.traduccion(respuestatest)})</td>
                <td>${resultadoestetest}</td>
            </tr>`;
            salidatest += lineasalida;
        }

        // presento el resultado
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        document.getElementById('resultadopruebas').style.display = 'block';

    }

    /*Función para obtener el valor de la cookie*/
    getCookie(name) {

        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
    
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
    
        return null;
    
    }
    
        traduccion(codigo){
            var lang = this.getCookie('lang');
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
            return traduccion[codigo];
        }

    test_entidad_files(){
        this.validaciones = new Dom_validations(new Validaciones_Atomicas(), this.entidad);
        let salidatest = `<tr><th>NumDefTest</th><th>NumPrueba</th><th>Campo</th><th>Prueba</th><th>Accion</th><th>valor</th><th>Respuesta Test</th><th>Respuesta esperada</th><th>Resultado</th></tr>`

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
                let botonsumit = document.createElement('input');
                botonsumit.id = 'submit_button';
                document.getElementById('IU_form').append(botonsumit);
            
                
            
                // Construyo objeto file y relleno valor para prueba
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
            
                // Coloco validaciones para la acción
                this.validaciones.load_validations(acciontest);
            
                // Llamo a comprobarCampo
                const resultadotest = this.validaciones.comprobarCampo(campotest, acciontest);
            
                // Compruebo si el resultado del test y la respuesta esperada es la misma
                const resultadoestetest = respuestatest === resultadotest ? 'CORRECTO' : 'INCORRECTO';
            
                const lineasalida = `<tr><td>${numdeftest}</td><td>${numprueba}</td><td>${campotest}</td><td>${clasedetest}</td><td>${acciontest}</td><td>${valortest}</td><td>${resultadotest}</td><td>${respuestatest} (${this.traduccion(respuestatest)})</td><td>${resultadoestetest}</td></tr>`;
                salidatest += lineasalida;
            }

        // presento el resultado
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        document.getElementById('resultadopruebas').style.display = 'block';

    }

    devolver_def(num_def){

        for (let i=0;i<this.array_def.length;i++){
            if (this.array_def[i][2] == num_def){
                return this.array_def[i];
            }
        }
    }



    verificarDefTest(){

        let probe_def = eval(this.entidad + '_def_tests');
        let filacorrecta = true;

        let salidatabla = "<tr><th>Entidad</><th>Campo</th><th>Num. DefTest</th><th colspan='7'>Datos</th>";
        let salidalinea = '';
        
        probe_def.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>'+element[0]+'</td>';
            salidalinea += '<td>'+element[1]+'</td>';
            salidalinea += '<td>'+element[2]+'</td>';
            filacorrecta = true;
            for (let i=0;i<7;i++){
                salidalinea += '<td>'+typeof(element[i])+'</td>';
            }
            if (
                (typeof(element[0])=='string')  &&
                (typeof(element[1])=='string')  &&
                (typeof(element[2])=='number')  &&
                (typeof(element[3])=='string')  &&
                (typeof(element[4])=='string') &&
                ((typeof(element[5])=='string') || (typeof(element[5])=='boolean')) &&
                (typeof(element[6])=='string')
                ){
                    salidalinea += '<td>CORRECTA</td>';
                }
            else
                {
                    salidalinea += '<td>ERROR</td>';
                    filacorrecta = false;
                }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });
    
        document.getElementById('tablaresultadostest').innerHTML += salidatabla;
    
        if (filacorrecta){
            document.getElementById('resultadodeftest').className = 'resultadodeftest';
        }
    
        document.getElementById('contenidoTests').style.display = 'block';
    
    }

    verificarPruebas(){

        let probe_def = eval(this.entidad + '_tests');
        let filacorrecta = true;

        let salidatabla = "<tr><th>Entidad</><th>Campo</th><th>Num.Def</th><th>Num.Prob</th><th colspan='6'>Datos</th>";
        let salidalinea = '';
        
        probe_def.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>'+element[0]+'</td>';
            salidalinea += '<td>'+element[1]+'</td>';
            salidalinea += '<td>'+element[2]+'</td>';
            salidalinea += '<td>'+element[3]+'</td>';
            filacorrecta = true;
            for (let i=0;i<7;i++){
                salidalinea += '<td>'+typeof(element[i])+'</td>';
            }
            if (
                (typeof(element[0])=='string')  &&
                (typeof(element[1])=='string')  &&
                (typeof(element[2])=='number')  &&
                (typeof(element[3])=='number')  &&
                (typeof(element[4])=='string')  &&
                (typeof(element[5])=='string')  &&
                ((typeof(element[6])=='string') || (typeof(element[6])=='boolean'))
                ){
                    salidalinea += '<td>CORRECTA</td>';
                }
            else
                {
                    salidalinea += '<td>ERROR</td>';
                    filacorrecta = false;
                }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });

        document.getElementById('tablaresultadosprueba').innerHTML += salidatabla;

        if (filacorrecta){
            document.getElementById('resultadodefpruebas').className = 'resultadodefpruebas';
        }

        document.getElementById('contenidoPruebas').style.display = 'block';

    }

    verificarPruebas_file(){

        let probe_def = eval(this.entidad+ '_tests_files');
        let filacorrecta = true;

        let salidatabla = "<tr><th>Entidad</><th>Campo</th><th>Num.Def</th><th>Num.Prob</th><th colspan='8'>Datos</th>";
        let salidalinea = '';
        
        probe_def.forEach(element => {
            salidalinea = "<tr>";
            salidalinea += '<td>'+element[0]+'</td>';
            salidalinea += '<td>'+element[1]+'</td>';
            salidalinea += '<td>'+element[2]+'</td>';
            salidalinea += '<td>'+element[3]+'</td>';
            filacorrecta = true;
            for (let i=0;i<8;i++){
                salidalinea += '<td>'+typeof(element[i])+'</td>';
            }
            if (
                (typeof(element[0])=='string')  &&
                (typeof(element[1])=='string')  &&
                (typeof(element[2])=='number')  &&
                (typeof(element[3])=='number')  &&
                (typeof(element[4])=='string')  &&
                (typeof(element[5])=='string')  &&
                (typeof(element[6])== 'object')  &&
                ((typeof(element[7])=='string') || (typeof(element[7])=='boolean'))
                ){
                    salidalinea += '<td>CORRECTA</td>';
                }
            else
                {
                    salidalinea += '<td>ERROR</td>';
                    filacorrecta = false;
                }
            salidalinea += "</tr>";
            salidatabla += salidalinea;
        });

        document.getElementById('tablaresultadosprueba').innerHTML += salidatabla;

        if (filacorrecta){
            document.getElementById('resultadotest').className = 'resultadotest';
        }

        document.getElementById('contenidoPruebas').style.display = 'block';

    }

} //end class
