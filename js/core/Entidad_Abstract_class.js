class Entidad_Abstracta extends Dom {

    constructor(){

      super()
    }
    inicializar(nombreEntidad,estructura){

		if (eval(this.datosespecialestabla)){}
		else{
			this.datosespecialestabla = Array();
		}
        
        this.nombreEntidad = nombreEntidad;
        this.estructura = estructura;
		this.access_functions = new ExternalAccess();
        this.tests = new test_IU();
        document.getElementById("workspace").style.display = 'block';
		this.cerrar_test()
		this.SEARCH();


	}

    change_value_IU(atributo, valor){
        
    }

    cargar_formulario(){

		if (eval(this.cargar_formularios_estatico)){
			this.cargar_formularios_estatico();
		}
		else{
			if (eval(this.cargar_formulario_dinamico)){
				this.cargar_formulario_dinamico();
			}
			else{
				alert('no existe formulario');
			}
		}

	}
    crearTablaDatos(){

		document.getElementById("id_tabla_datos").style.display = 'block';

		//construir tabla
		this.hacertabla();
		//construir select
		this.construirSelect();
		
		//ocultar segun columnasamostrar
		if (this.datos != "") {this.mostrarocultarcolumnas()};

	}
    async SEARCH(){
    
        await this.access_functions.back_request('IU_form', this.entidad, 'SEARCH')
        .then((respuesta) => {
            
            //limpiar el formulario
        	this.cargar_formulario();
			//quito los class de la muestra de filas
			document.getElementById('muestradatostabla').removeAttribute('class');

            //poner el div del formulario no visible
            document.getElementById("div_IU_form").style.display = 'none';

            this.datos = respuesta['resource'];
			this.atributos = Object.keys(respuesta['criteriosbusqueda']);
           
           	this.crearTablaDatos();
           
			setLang();

        });
    
    }

    async ADD(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'ADD')
        .then((respuesta) => {

        	if (respuesta['ok']){
            
	            //limpiar el formulario
	            this.cargar_formulario();

	            //poner el div del formulario no visible
	            document.getElementById("div_IU_form").style.display = 'none';

	            this.SEARCH();

	        }
	        else{
				
				// mostrar mensaje error action
	        	// alert('error : '+respuesta['code']);

				// Usando modal
				this.abrirModalError(respuesta['code']);
	        }

        });
    
    }

    async DELETE(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'DELETE')
        .then((respuesta) => {

        	if (respuesta['ok']){
            
	            //limpiar el formulario
	            this.cargar_formulario();

	            //poner el div del formulario no visible
	            document.getElementById("div_IU_form").style.display = 'none';

	            this.SEARCH();
	        }
	        else{

	        	// mostrar mensaje error action
	        	// alert('error : '+respuesta['code']);

				// Usando modal
				this.abrirModalError(respuesta['code']);
	        }

        });
    
    }

    async EDIT(){
    
        await this.access_functions.peticionBackGeneral('IU_form', this.entidad, 'EDIT')
        .then((respuesta) => {

        	if (respuesta['ok']){
            
	            //limpiar el formulario
	            this.cargar_formulario();

	            //poner el div del formulario no visible
	            document.getElementById("div_IU_form").style.display = 'none';

	            this.SEARCH();

	        }
	        else{

	        	// mostrar mensaje error action
	        	// alert('error : '+respuesta['code']);

				// Usando modal
				this.abrirModalError(respuesta['code']);
	        }

        });
    
    }

	cambiacolumnastabla(atributo){

		document.querySelector("th[class='"+atributo+"']").style.display = 'none';

	}
}