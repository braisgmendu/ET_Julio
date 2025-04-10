const def_html_characteristic = {
    ADD:{
        name_characteristic: {
            tipo: "input",
            etiqueta: "Nombre de la Característica",
            atributos: {
                type: "text",
                id: "name_characteristic",
                name: "name_characteristic",
            },
            error: "error_name_characteristic",
            div_error: "div_error_name_characteristic"
        },
        description_characteristic: {
            tipo: "input",
            etiqueta: "Descripción de la Característica",
            atributos: {
                id: "description_characteristic",
                name: "description_characteristic",
            },
            error: "error_description_characteristic",
            div_error: "div_error_description_characteristic"
        },
        data_type_characteristic: {
            tipo: "select",
            etiqueta: "Tipo de Dato",
            opciones: ["","number", "text", "set"],
            nombre_options: ["data_type_empty","data_type_number", "data_type_text", "data_type_set"],
            atributos: {
                id: "data_type_characteristic",
                name: "data_type_characteristic",
            },
            error: "error_data_type_characteristic",
            div_error: "div_error_data_type_characteristic"
        },
        category_characteristic: {
            tipo: "select",
            etiqueta: "Categoría",
            opciones: ["","soil_site", "soil_chem", "soil_bio"],
            nombre_options: ["category_empty","category_soil_site", "category_soil_chem", "category_soil_bio"],
            atributos: {
                id: "category_characteristic",
                name: "category_characteristic",
    
            },
            error: "error_category_characteristic",
            div_error: "div_error_category_characteristic"
        },
        bibref_characteristic: {
            tipo: "input",
            etiqueta: "Referencia Bibliográfica",
            atributos: {
                type: "text",
                id: "bibref_characteristic",
                name: "bibref_characteristic",
            },
            error: "error_bibref_characteristic",
            div_error: "div_error_bibref_characteristic"
        },
        nuevo_file_characteristic: {
            tipo: "input",
            etiqueta: "Nuevo Archivo",
            atributos: {
                type: "file",
                id: "nuevo_file_characteristic",
                name: "nuevo_file_characteristic",
            },
            error: "error_nuevo_file_characteristic",
            div_error: "div_error_nuevo_file_characteristic",
        }
    },
    EDIT: {
        name_characteristic: {
            tipo: "input",
            etiqueta: "Nombre de la Característica",
            atributos: {
                type: "text",
                id: "name_characteristic",
                name: "name_characteristic",
            },
            error: "error_name_characteristic",
            div_error: "div_error_name_characteristic"
        },
        description_characteristic: {
            tipo: "input",
            etiqueta: "Descripción de la Característica",
            atributos: {
                id: "description_characteristic",
                name: "description_characteristic",
            },
            error: "error_description_characteristic",
            div_error: "div_error_description_characteristic"
        },
        data_type_characteristic: {
            tipo: "select",
            etiqueta: "Tipo de Dato",
            opciones: ["","number", "text", "set"],
            nombre_options: ["data_type_empty","data_type_number", "data_type_text", "data_type_set"],
            atributos: {
                id: "data_type_characteristic",
                name: "data_type_characteristic",
            },
            error: "error_data_type_characteristic",
            div_error: "div_error_data_type_characteristic"
        },
        category_characteristic: {
            tipo: "select",
            etiqueta: "Categoría",
            opciones: ["","soil_site", "soil_chem", "soil_bio"],
            nombre_options: ["category_empty","category_soil_site", "category_soil_chem", "category_soil_bio"],
            atributos: {
                id: "category_characteristic",
                name: "category_characteristic",
    
            },
            error: "error_category_characteristic",
            div_error: "div_error_category_characteristic"
        },
        bibref_characteristic: {
            tipo: "input",
            etiqueta: "Referencia Bibliográfica",
            atributos: {
                type: "text",
                id: "bibref_characteristic",
                name: "bibref_characteristic",
            },
            error: "error_bibref_characteristic",
            div_error: "div_error_bibref_characteristic"
        },
        
        file_characteristic: {
            tipo: "input",
            etiqueta: "Archivo",
            atributos: {
                type: "text",
                id: "file_characteristic",
                name: "file_characteristic",
                // Asegurar que sea de solo lectura
            },
            error: "error_file_characteristic",
            div_error: "div_error_file_characteristic",
            link: {
                id: "link_file_characteristic",
                href: "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/",
                src: "./iconos/FILE.png"
            }
        },
        nuevo_file_characteristic: {
            tipo: "input",
            etiqueta: "Nuevo Archivo",
            atributos: {
                type: "file",
                id: "nuevo_file_characteristic",
                name: "nuevo_file_characteristic",
            },
            error: "error_nuevo_file_characteristic",
            div_error: "div_error_nuevo_file_characteristic",
        }
    },
    SEARCH: {
        id_characteristic: {
            tipo: "input",
            etiqueta: "ID de la Característica",
            atributos: {
                type: "text",
                id: "id_characteristic",
                name: "id_characteristic",
            },
            error: "error_id_characteristic",
            div_error: "div_error_id_characteristic"
        },
        name_characteristic: {
            tipo: "input",
            etiqueta: "Nombre de la Característica",
            atributos: {
                type: "text",
                id: "name_characteristic",
                name: "name_characteristic",
            },
            error: "error_name_characteristic",
            div_error: "div_error_name_characteristic"
        },
        description_characteristic: {
            tipo: "input",
            etiqueta: "Descripción de la Característica",
            atributos: {
                id: "description_characteristic",
                name: "description_characteristic",
            },
            error: "error_description_characteristic",
            div_error: "div_error_description_characteristic"
        },
        data_type_characteristic: {
            tipo: "select",
            etiqueta: "Tipo de Dato",
            opciones: ["","number", "text", "set"],
            nombre_options: ["data_type_empty","data_type_number", "data_type_text", "data_type_set"],
            atributos: {
                id: "data_type_characteristic",
                name: "data_type_characteristic",
            },
            error: "error_data_type_characteristic",
            div_error: "div_error_data_type_characteristic"
        },
        category_characteristic: {
            tipo: "select",
            etiqueta: "Categoría",
            opciones: ["","soil_site", "soil_chem", "soil_bio"],
            nombre_options: ["category_empty","category_soil_site", "category_soil_chem", "category_soil_bio"],
            atributos: {
                id: "category_characteristic",
                name: "category_characteristic",
    
            },
            error: "error_category_characteristic",
            div_error: "div_error_category_characteristic"
        },
        bibref_characteristic: {
            tipo: "input",
            etiqueta: "Referencia Bibliográfica",
            atributos: {
                type: "text",
                id: "bibref_characteristic",
                name: "bibref_characteristic",
            },
            error: "error_bibref_characteristic",
            div_error: "div_error_bibref_characteristic"
        },
        
        file_characteristic: {
            tipo: "input",
            etiqueta: "Archivo",
            atributos: {
                type: "text",
                id: "file_characteristic",
                name: "file_characteristic",
                // Asegurar que sea de solo lectura
            },
            error: "error_file_characteristic",
            div_error: "div_error_file_characteristic",
            link: {
                id: "link_file_characteristic",
                href: "http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/",
                src: "./iconos/FILE.png"
            }
        }
    }    
}