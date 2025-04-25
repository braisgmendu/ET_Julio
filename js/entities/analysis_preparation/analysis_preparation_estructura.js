const estructura_analysis_preparation = {
    attributes_list: ['id_analysis_preparatio', 'name_analysis_preparation', 'description_analysis_preparation', 'bib_analysis_preparation', 'file_analysis_preparation','nuevo_file_analysis_preparation'],
    columnas_visibles_tabla : ['id_analysis_preparatio', 'name_analysis_preparation', 'bib_analysis_preparation'],
    columnas_modificadas_tabla: ['file_analysis_preparation'],
    attributes: {
        id_analysis_preparation: {
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
				    max_size: [9,'dni_max_size_KO'],
                    reg_exp :  ['^[0-9]$+', 'id_analysis_preparation_format_KO'],
                }
            }
        },
        name_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [8, 'name_analysis_preparation_min_size_KO'],
				    max_size: [100,'name_analysis_preparation_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]+$', 'name_analysis_preparation_format_KO'],
                },
                EDIT:{
                    min_size : [8, 'name_analysis_preparation_min_size_KO'],
				    max_size: [100,'name_analysis_preparation_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'name_analysis_preparation_format_KO'],
                },
                SEARCH:{
				    max_size: [9,'name_analysis_preparation_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'name_analysis_preparation_format_KO'],
                }
            }
        },
        description_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [80, 'description_analysis_preparation_min_size_KO'],
				    max_size: [5000,'description_analysis_preparation_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]+$', 'description_analysis_preparation_format_KO'],
                },
                EDIT:{
                    min_size : [80, 'description_analysis_preparation_min_size_KO'],
				    max_size: [5000,'description_analysis_preparation_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'description_analysis_preparation_format_KO'],
                },
                SEARCH:{
				    max_size: [5000,'description_analysis_preparation_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'description_analysis_preparation_format_KO'],
                }
            }
        },
        bib_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [6, 'bib_analysis_preparation_min_size_KO'],
				    max_size: [200,'bib_analysis_preparation_max_size_KO'],
                    reg_exp : ['^[A-Za-zÀ-ÿñÑ\\s.,;:!¡¿?\"\'\\-]+$', 'bib_analysis_preparation_format_KO'],
                },
                EDIT:{
                    min_size : [6, 'bib_analysis_preparation_min_size_KO'],
				    max_size: [200,'bib_analysis_preparation_max_size_KO'],
                    reg_exp : ['^[A-Za-zÀ-ÿñÑ\\s.,;:!¡¿?\"\'\\-]*$', 'bib_analysis_preparation_format_KO'],
                },
                SEARCH:{
				    max_size: [200,'bib_analysis_preparation_max_size_KO'],
                    reg_exp : ['^[A-Za-zÀ-ÿñÑ\\s.,;:!¡¿?\"\'\\-]*$', 'bib_analysis_preparation_format_KO'],
                }
            }
        },
        file_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                SEARCH:{
				    max_size: [100,'file_analysis_preparation_name_max_size_KO'],
                    reg_exp : ['(^$)|(^[A-Za-z]*\.(pdf|doc|docx)$)', 'file_analysis_preparation_name_format_KO'],
                }
            }
        },
        nuevo_file_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'file',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [7, 'nuevo_file_analysis_preparation_name_min_size_KO'],
				    max_size: [100,'nuevo_file_analysis_preparation_name_max_size_KO'],
                    no_file: "nuevo_file_analysis_preparation_no_file_KO", // funcion atomica no existe fichero. no obligatorio segun accion
                    file_type :[["application/pdf", "application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"nuevo_file_analysis_preparation_file_type_KO"], // funcion atomica tipo mime fichero. No obligatorio si no se comprueba tipo de fichero
                    max_size_file: [ 2000000, "nuevo_file_analysis_preparation_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ["^[A-Za-z\.]+$","nuevo_file_analysis_preparation_name_format_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension

                },
                EDIT:{
                    min_size : [7, 'nuevo_file_analysis_preparation_name_min_size_KO'],
				    max_size: [100,'nuevo_file_analysis_preparation_name_max_size_KO'],
                    no_file: "nuevo_file_analysis_preparation_no_file_KO", // funcion atomica no existe fichero. no obligatorio segun accion
                    file_type :[["application/pdf", "application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"nuevo_file_analysis_preparation_file_type_KO"], // funcion atomica tipo mime fichero. No obligatorio si no se comprueba tipo de fichero
                    max_size_file: [ 2000000, "nuevo_file_analysis_preparation_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ["^[A-Za-z\.]*$","nuevo_file_analysis_preparation_name_format_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                }
            }
        },
    },

};