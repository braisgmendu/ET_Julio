const estructura_project= {
    attributes_list: ['id_project', 'name_project', 'start_date_project', 'end_date_project', 'responsable_project', 'organization_project', 'description_project', 'file_project','nuevo_file_project', 'code_project', 'acronym_project','id_sampling_methodology'],
    columnas_visibles_tabla : ['id_project', 'name_project','start_date_project','end_date_project'],
    columnas_modificadas_tabla: ['file_characteristic'],
    attributes: {
        id_project: {
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
				    max_size: [11,'id_project_max_size_KO'],
                    reg_exp :  ['^[0-9]*$', 'id_project_format_KO'],
                }
            }
        },
        name_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [15, 'name_project_min_size_KO'],
				    max_size: [100,'name_project_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]+$', 'name_project_format_KO'],
                },
                EDIT:{
                    min_size : [15, 'name_project_min_size_KO'],
				    max_size: [100,'name_project_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'name_project_format_KO'],
                },
                SEARCH:{
				    max_size: [15,'name_project_max_size_KO'],
                    reg_exp : ['^[A-Za-z\\s]*$', 'name_project_format_KO'],
                }
            }
        },
        start_date_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    reg_exp : ['([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})+?', 'start_date_project_format_KO'],
                    personalized: "personalized_validation_nombreatributo($extravalues)", 
                },
                EDIT:{
                    reg_exp : ['([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})+?', 'start_date_project_format_KO'],
                    personalized: "personalized_validation_nombreatributo($extravalues)", 
                },
                SEARCH:{
                    reg_exp : ['([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})*?', 'start_date_project_format_KO'],
                    personalized: "personalized_validation_nombreatributo($extravalues)", 
                }
            }
        },
        end_date_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    reg_exp : ['([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})+?', 'end_date_project_format_KO'],
                    personalized: "personalized_validation_nombreatributo($extravalues)", 
                },
                EDIT:{
                    reg_exp : ['([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})+?', 'end_date_project_format_KO'],
                    personalized: "personalized_validation_nombreatributo($extravalues)", 
                },
                SEARCH:{
                    reg_exp : ['([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})*?', 'end_date_project_format_KO'],
                    personalized: "personalized_validation_nombreatributo($extravalues)", 
                }
            }
        },
        responsable_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [6, 'responsable_project_min_size_KO'],
				    max_size: [60,'responsable_project_max_size_KO'],
                    reg_exp : ['^[A-Za-záéíóúÁÉÍÓÚñ\\s]+$', 'responsable_project_format_KO'],
                },
                EDIT:{
                    min_size : [6, 'responsable_project_min_size_KO'],
				    max_size: [60,'responsable_project_max_size_KO'],
                    reg_exp : ['^[A-Za-záéíóúÁÉÍÓÚñ\\s]*$', 'responsable_project_format_KO'],
                },
                SEARCH:{
				    max_size: [60,'responsable_project_max_size_KO'],
                    reg_exp : ['^[A-Za-záéíóúÁÉÍÓÚñ\\s]*$', 'responsable_project_format_KO'],
                }
            }
        },
        organization_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [6, 'organization_project_min_size_KO'],
				    max_size: [100,'organization_project_max_size_KO'],
                    reg_exp : ['^[A-Za-záéíóúÁÉÍÓÚñ\\s]*$', 'organization_project_format_KO'],
                },
                EDIT:{
                    min_size : [6, 'organization_project_min_size_KO'],
				    max_size: [100,'organization_project_max_size_KO'],
                    reg_exp : ['^[A-Za-záéíóúÁÉÍÓÚñ\\s]*$', 'organization_project_format_KO'],
                },
                SEARCH:{
				    max_size: [100,'organization_project_max_size_KO'],
                    reg_exp : ['^[A-Za-záéíóúÁÉÍÓÚñ\\s]*$', 'organization_project_format_KO  '],
                }
            }
        },
        description_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [30, 'description_project_min_size_KO'],
				    max_size: [500,'description_project_max_size_KO'],
                    reg_exp : ['^[\x00-\xFF]+$', 'description_project_format_KO'],
                },
                EDIT:{
                    min_size : [30, 'description_project_min_size_KO    '],
				    max_size: [500,'description_project_max_size_KO'],
                    reg_exp : ['^[\x00-\xFF]*$', 'description_project_format_KO'],
                },
                SEARCH:{
				    max_size: [500,'description_project_max_size_KO'],
                    reg_exp : ['^[\x00-\xFF]*$', 'description_project_format_KO  '],
                }
            }
        },
        file_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                SEARCH:{
				    max_size: [100,'file_project_name_max_size_KO'],
                    reg_exp : ['(^$)|(^[A-Za-z]*\.(pdf|doc|docx)$)', 'file_project_name_format_KO'],
                }
            }
        },
        nuevo_file_project: {
            html: {
                tag: 'input',
                type: 'file',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [7, 'nuevo_file_project_name_min_size_KO'],
				    max_size: [100,'nuevo_file_project_name_max_size_KO'],
                    no_file: "nuevo_file_project_no_file_KO", // funcion atomica no existe fichero. no obligatorio segun accion
                    file_type :[["application/pdf", "application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"nuevo_file_project_file_type_KO"], // funcion atomica tipo mime fichero. No obligatorio si no se comprueba tipo de fichero
                    max_size_file: [ 2000000, "nuevo_file_project_file_max_size_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ["^[A-Za-z\.]+$","nuevo_file_project_name_format_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension

                },
                EDIT:{
                    min_size : [7, 'nuevo_file_project_name_min_size_KO'],
				    max_size: [100,'nuevo_file_project_name_max_size_KO'],
                    no_file: "nuevo_file_project_no_file_KO", // funcion atomica no existe fichero. no obligatorio segun accion
                    file_type :[["application/pdf", "application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"nuevo_file_project_file_type_KO"], // funcion atomica tipo mime fichero. No obligatorio si no se comprueba tipo de fichero
                    max_size_file: [ 2000000, "nuevo_file_project_file_max_size_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ["^[A-Za-z\.]*$","nuevo_file_project_name_format_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                }
            }
        },
        code_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [6, 'code_project_min_size_KO'],
				    max_size: [50,'code_project_max_size_KO'],
                    reg_exp : ['^[A-Za-zñÑ!¡¿?\/\:\.\;\(\)\,\*\"\' -]+$', 'code_project_format_KO'],
                },
                EDIT:{
                    min_size : [6, 'code_project_min_size_KO'],
				    max_size: [50,'code_project_max_size_KO'],
                    reg_exp : ['^[A-Za-zñÑ!¡¿?\/\:\.\;\(\)\,\*\"\' -]*$', 'code_project_format_KO'],
                },
                SEARCH:{
				    max_size: [50,'code_project_max_size_KO'],
                    reg_exp : ['^[A-Za-zñÑ!¡¿?\/\:\.\;\(\)\,\*\"\' -]*$', 'code_project_format_KO'],
                }
            }
        }, 
        acronym_project: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [6, 'acronym_project_min_size_KO'],
				    max_size: [15,'acronym_project_max_size_KO'],
                    reg_exp : ['^[A-Za-zñÑ!¡¿?\/\:\.\;\(\)\,\*\"\'-]+$', 'acronym_project_format_KO'],
                },
                EDIT:{
                    min_size : [6, 'acronym_project_min_size_KO'],
				    max_size: [15,'acronym_project_max_size_KO'],
                    reg_exp : ['^[A-Za-zñÑ!¡¿?\/\:\.\;\(\)\,\*\"\'-]*$', 'acronym_project_format_KO'],
                },
                SEARCH:{
				    max_size: [15,'acronym_project_min_size_KO'],
                    reg_exp : ['^[A-Za-zñÑ!¡¿?\/\:\.\;\(\)\,\*\"\'-]*$', 'acronym_project_format_KO'],
                }
            }
        },  
        id_sampling_methodology: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [1, 'id_sampling_methodology_min_size_KO'],
				    max_size: [11,'id_sampling_methodology_max_size_KO'],
                    reg_exp : ['^[0-9]+$', 'id_sampling_methodology_format_KO'],
                },
                EDIT:{
                    min_size : [1, 'id_sampling_methodology_min_size_KO'],
				    max_size: [11,'id_sampling_methodology_max_size_KO'],
                    reg_exp : ['^[0-9]*$', 'id_sampling_methodology_format_KO'],
                },
                SEARCH:{
				    max_size: [11,'id_sampling_methodology_max_size_KO'],
                    reg_exp : ['^[0-9]*$', 'id_sampling_methodology_format_KO'],
                }
            }
        } 
        
    },

};