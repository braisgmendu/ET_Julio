 const estructura_characteristic = {
    attributes_list: ['id_characteristic', 'name_characteristic', 'description_characteristic', 'data_type_characteristic', 'category_characteristic', 'bibref_characteristic', 'file_characteristic', 'nuevo_file_characteristic'],
    columnas_visibles_tabla : ['id_characteristic', 'name_characteristic','data_type_characteristic','category_characteristic'],
    columnas_modificadas_tabla: ['nuevo_file_characteristic','file_characteristic'],
    attributes: {
        id_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_pk: true,
            is_not_null: true,
            is_autoincrement: true,
            //component_visible_size: 9,
            validation_rules: {
                SEARCH:{
				    max_size: [11,'id_characteristic_max_size_KO'],
                    reg_exp :  ['^[0-9]*$', 'id_characteristic_format_KO'],
                }
            }
        },
        name_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [8, 'name_characteristic_min_size_KO'],
				    max_size: [100,'name_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]+$', 'name_characteristic_format_KO'],
                },
                EDIT:{
                    min_size : [8, 'name_characteristic_min_size_KO'],
				    max_size: [100,'name_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'name_characteristic_format_KO'],
                },
                SEARCH:{
				    max_size: [100,'name_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'name_characteristic_format_KO'],
                }
            }
        },
        description_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [80, 'description_characteristic_min_size_KO'],
				    max_size: [5000,'description_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]+$', 'description_characteristic_format_KO'],
                },
                EDIT:{
                    min_size : [80, 'description_characteristic_min_size_KO'],
				    max_size: [5000,'description_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'description_characteristic_format_KO'],
                },
                SEARCH:{
				    max_size: [5000,'description_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'description_characteristic_format_KO'],
                }
            }
        },
        data_type_characteristic: {
            html: {
                tag: 'select',
                options: ['','number','text','set'],
            },
            is_not_null: true,
            default_value : '',
            validation_rules: {
            }
        },
        category_characteristic: {
            html: {
                tag: 'select',
                options: ["","soil_site", "soil_chem", "soil_bio"],
            },
            is_not_null: true,
            default_value : '',
            validation_rules: {
            }
        },
        bibref_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [16, 'bibref_characteristic_min_size_KO'],
				    max_size: [200,'bibref_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-zÀ-ÿñÑ\\s.,;:!¡¿?"\'-]+$', 'bibref_characteristic_format_KO'],
                },
                EDIT:{
                    min_size : [16, 'bibref_characteristic_min_size_KO'],
				    max_size: [200,'bibref_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-zÀ-ÿñÑ\\s.,;:!¡¿?"\'-]*$', 'bibref_characteristic_format_KO'],
                },
                SEARCH:{
				    max_size: [200,'bibref_characteristic_max_size_KO'],
                    reg_exp : ['^[A-Za-zÀ-ÿñÑ\\s.,;:!¡¿?"\'-]*$', 'bibref_characteristic_format_KO'],
                }
            }
        },    
        file_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                SEARCH:{
				    max_size: [100,'file_characteristic_name_max_size_KO'],
                    reg_exp : ['(^$)|(^[A-Za-z]*\.(pdf|doc|docx)$)', 'file_characteristic_name_format_KO'],
                }
            }
        },
        nuevo_file_characteristic: {
            html: {
                tag: 'input',
                type: 'file',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    no_file: "nuevo_file_characteristic_empty_KO", // funcion atomica no existe fichero. no obligatorio segun accion
                    min_size_name_file : [7, 'nuevo_file_characteristic_name_min_size_KO'],
				    max_size_name_file: [100,'nuevo_file_characteristic_name_max_size_KO'],
                    file_type :[["application/pdf", "application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"nuevo_file_characteristic_file_type_KO"], // funcion atomica tipo mime fichero. No obligatorio si no se comprueba tipo de fichero
                    max_size_file: [ 2000000, "nuevo_file_characteristic_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ["^[A-Za-z.]+$","nuevo_file_characteristic_name_format_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension

                },
                EDIT:{
                    no_file: "nuevo_file_characteristic_empty_KO", // funcion atomica no existe fichero. no obligatorio segun accion
                    min_size_name_file   : [7, 'nuevo_file_characteristic_name_min_size_KO'],
				    max_size_name_file: [100,'nuevo_file_characteristic_name_max_size_KO'],
                    file_type :[["application/pdf", "application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"nuevo_file_characteristic_file_type_KO"], // funcion atomica tipo mime fichero. No obligatorio si no se comprueba tipo de fichero
                    max_size_file: [ 2000000, "nuevo_file_characteristic_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ["^[A-Za-z.]*$","nuevo_file_characteristic_name_format_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                }
            }
        },
    },

};