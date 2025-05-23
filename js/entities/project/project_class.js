class project extends Entidad_Abstracta{

    constructor(){
        super('project', estructura_project);
      
    }

    /*cargar_formulario_estatico(){
        this.action = '';

        let formulario = `
            <label id="label_id_project" class="label_id_project">ID del Proyecto:</label>
            <input type="text" id="id_project" name="id_project" ></input>
            <span id="div_error_id_project"><a id="error_id_project"></a></span>
            <br>

            <label id="label_name_project" class="label_name_project">Nombre del Proyecto:</label>
            <input type="text" id="name_project" name="name_project"></input>
            <span id="div_error_name_project"><a id="error_name_project"></a></span>
            <br>

            <label id="label_start_date_project" class="label_start_date_project">Fecha de Inicio:</label>
            <input type="text" id="start_date_project" name="start_date_project"></input>
            <span id="div_error_start_date_project"><a id="error_start_date_project"></a></span>
            <br>

            <label id="label_end_date_project" class="label_end_date_project">Fecha de Finalización:</label>
            <input type="text" id="end_date_project" name="end_date_project"></input>
            <span id="div_error_end_date_project"><a id="error_end_date_project"></a></span>
            <br>

            <label id="label_responsable_project" class="label_responsable_project">Responsable del Proyecto:</label>
            <input type="text" id="responsable_project" name="responsable_project"></input>
            <span id="div_error_responsable_project"><a id="error_responsable_project"></a></span>
            <br>

            <label id="label_organization_project" class="label_organization_project">Organización:</label>
            <input type="text" id="organization_project" name="organization_project"></input>
            <span id="div_error_organization_project"><a id="error_organization_project"></a></span>
            <br>

            <label id="label_description_project" class="label_description_project">Descripción:</label>
            <textarea rows="5" cols="33" id="description_project" name="description_project"></textarea>
            <span id="div_error_description_project"><a id="error_description_project"></a></span>
            <br>

            <label id="label_file_project" class="label_file_project">Archivo del Proyecto:</label>
            <input type="file" id="file_project" name="file_project"></input>
            <span id="div_error_file_project"><a id="error_file_project"></a></span>
            <a id="link_file_project" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/">
                <img src="./iconos/FILE.png" />
            </a>
            <br>

            <label id="label_nuevo_file_project" class="label_nuevo_file_project">Nuevo Archivo del Proyecto:</label>
            <input type="file" id="nuevo_file_project" name="nuevo_file_project"></input>
            <span id="div_error_nuevo_file_project"><a id="error_nuevo_file_project"></a></span>
            <br>

            <label id="label_code_project" class="label_code_project">Código del Proyecto:</label>
            <input type="text" id="code_project" name="code_project"></input>
            <span id="div_error_code_project"><a id="error_code_project"></a></span>
            <br>

            <label id="label_acronym_project" class="label_acronym_project">Acrónimo del Proyecto:</label>
            <input type="text" id="acronym_project" name="acronym_project"></input>
            <span id="div_error_acronym_project"><a id="error_acronym_project"></a></span>
            <br>

            <label id="label_id_sampling_methodology" class="label_id_sampling_methodology">ID de la Metodología de Muestreo:</label>
            <input type="text" id="id_sampling_methodology" name="id_sampling_methodology"></input>
            <span id="div_error_id_sampling_methodology"><a id="error_id_sampling_methodology"></a></span>
            <br>

            <button type="submit" id="submit_button">Guardar</button>
        `;

        // Inserta el formulario en el contenedor `IU_form`
        document.getElementById("IU_form").innerHTML = formulario;

    } */
   
    change_value_IU(atributo, valoratributo){
        if (atributo === 'file_project'){
            if (valoratributo === ''){
                return "no hay fichero";
            }
            let baseUrl = "http://193.147.87.202/ET2/filesuploaded/files_file_project/";
            let texto = `<a href="${baseUrl}${encodeURIComponent(valoratributo)}" target="_blank">`;
            texto += `<img src="./iconos/FILE.png" alt="Fichero"/>${valoratributo}</a>`;
            return texto;
        }
        if (['start_date_project', 'end_date_project'].includes(atributo)){

			let fech = valoratributo.split('-');
            let fechaformateada = fech[2] + '/' + fech[1] + '/' + fech[0];
            return fechaformateada;

		}

    }
}