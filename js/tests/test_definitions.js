let analysis_preparation_def_tests = Array(
    /** TABLA -> analysis_preparation */
   
    //ADD
    //name_analysis_preparation
    Array('analysis_preparation', 'name_analysis_preparation', 1, 'tamaño < 8', 'ADD','name_analysis_preparation_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que tener un tamaño entre 8 y 100 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'name_analysis_preparation', 2, 'tamaño > 100', 'ADD', 'name_analysis_preparation_max_size_KO', 
        'Excede el tamaño máximo del campo. Tiene que tener un tamaño entre 8 y 100 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'name_analysis_preparation', 3, 'no alfabéticos o con acentos o ñ', 'ADD', 'name_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('analysis_preparation', 'name_analysis_preparation', 4, 'entre 8 y 100 caracteres alfabéticos con espacios, sin acentos ni ñ', 'ADD', true, 
        'Exito.'
    ),
    // description_analysis_preparation
    Array('analysis_preparation', 'description_analysis_preparation', 5, 'tamaño < 80', 'ADD', 'description_analysis_preparation_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que ser entre 80 y 5000 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'description_analysis_preparation', 6, 'tamaño > 5000', 'ADD','description_analysis_preparation_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 80 y 5000 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'description_analysis_preparation', 7, 'no alfabéticos o con acentos o ñ', 'ADD', 'description_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('analysis_preparation', 'description_analysis_preparation', 8, 'entre 80 y 5000 caracteres alfabéticos con espacios, sin acentos ni ñ', 
        'ADD', true, 'Exito.'
    ),
    // bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 9, 'tamaño < 6', 'ADD', 'bib_analysis_preparation_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que ser entre 6 y 200 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'bib_analysis_preparation', 10, 'tamaño > 200', 'ADD', 'bib_analysis_preparation_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 6 y 200 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'bib_analysis_preparation', 11, 'no alfabéticos o signos de puntuación', 'ADD', 'bib_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, acentos, ñ y signos de puntuación.'
    ),
    Array('analysis_preparation', 'bib_analysis_preparation', 12, 'entre 6 y 200 caracteres alfabéticos con espacios, acentos, ñ y signos de puntuación',
         'ADD', true, 'Exito.'
    ),

    //nuevo_file_analysis_preparation
    Array('analysis_preparation','nuevo_file_analysis_preparation',13, 'tamaño nombre < 7','ADD',  'nuevo_file_analysis_preparation_name_min_size_KO',
        'Tamaño del nombre del fichero insuficiente. Tiene que ser un tamaño de entre 7 y 100 caracteres sin espacios.'
    ),  
    Array('analysis_preparation','nuevo_file_analysis_preparation',14, 'tamaño nombre > 100','ADD', 'nuevo_file_analysis_preparation_name_max_size_KO',
        'Excede el tamaño maximo del nombre del fichero. Tiene que ser un tamaño de entre 7 y 10 caracteres sin espacios.'
    ),
    Array('analysis_preparation','nuevo_file_analysis_preparation',15, 'no alfabeticos o con espacios o ñ o acentos','ADD', 'nuevo_file_analysis_preparation_name_format_KO',
    'Los caracteres introducidos como nombre de fichero son incorrectos. Tienen que ser alfabeticos con acentos, sin espacios ni ñ.'
    ),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 16, 'el archivos es vacio', 'ADD', 'nuevo_file_analysis_preparation_empty_KO', 'El nombre del archivo es correcto.'),
    Array('analysis_preparation','nuevo_file_analysis_preparation',17, 'tamaño file > 2000000 bytes','ADD',  'nuevo_file_analysis_preparation_max_size_file_KO',
    'Excede el tamaño maximo de fichero permitido. El fichero tiene que tener un tamaño menor a 2000000 bytes.'
    ),
    Array('analysis_preparation','nuevo_file_analysis_preparation',18, 'tipo de fichero pdf, doc o docx','ADD', 'nuevo_file_analysis_preparation_file_type_KO',
    'El tipo del fichero es incorrecto. Tiene que ser de formato pdf, doc y docx.'
    ),

    Array('analysis_preparation','nuevo_file_analysis_preparation',19, 'entre 7 y 100 caracteres alfabeticos con acentos, sin espacios ni ñ.', 'ADD',
    true, 'Exito.'
    ),
    //EDIT
    // name_analysis_preparation
    Array('analysis_preparation', 'name_analysis_preparation', 20, 'tamaño < 8', 'EDIT','name_analysis_preparation_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que tener un tamaño entre 8 y 100 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'name_analysis_preparation', 21, 'tamaño > 100', 'EDIT', 'name_analysis_preparation_max_size_KO', 
        'Excede el tamaño máximo del campo. Tiene que tener un tamaño entre 8 y 100 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'name_analysis_preparation', 22, 'no alfabéticos o con acentos o ñ', 'EDIT','name_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('analysis_preparation', 'name_analysis_preparation', 23, 'entre 8 y 100 caracteres alfabéticos con espacios, sin acentos ni ñ', 'EDIT', true, 
        'Exito.'
    ),

    // description_analysis_preparation
    Array('analysis_preparation', 'description_analysis_preparation', 24, 'tamaño < 80', 'EDIT','description_analysis_preparation_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que ser entre 80 y 5000 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'description_analysis_preparation', 25, 'tamaño > 5000', 'EDIT', 'description_analysis_preparation_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 80 y 5000 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'description_analysis_preparation', 26, 'no alfabéticos o con acentos o ñ', 'EDIT', 'description_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('analysis_preparation', 'description_analysis_preparation', 27, 'entre 80 y 5000 caracteres alfabéticos con espacios, sin acentos ni ñ', 'EDIT', true, 
        'Exito.'
    ),

    // bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 28, 'tamaño < 6', 'EDIT','bib_analysis_preparation_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que ser entre 6 y 200 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'bib_analysis_preparation', 29, 'tamaño > 200', 'EDIT', 'bib_analysis_preparation_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 6 y 200 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'bib_analysis_preparation', 30, 'no alfabéticos o signos de puntuación', 'EDIT','bib_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, acentos, ñ y signos de puntuación.'
    ),
    Array('analysis_preparation', 'bib_analysis_preparation', 31, 'entre 6 y 200 caracteres alfabéticos con espacios, acentos, ñ y signos de puntuación', 'EDIT', true, 
        'Exito.'
    ),
    //nuevo_file_analysis_preparation
    Array('analysis_preparation','nuevo_file_analysis_preparation',32, 'tamaño nombre < 7','EDIT',  'nuevo_file_analysis_preparation_name_min_size_KO',
        'Tamaño del nombre del fichero insuficiente. Tiene que ser un tamaño de entre 7 y 100 caracteres sin espacios.'
    ),
    Array('analysis_preparation','nuevo_file_analysis_preparation',33, 'tamaño nombre > 100','EDIT',  'nuevo_file_analysis_preparation_name_max_size_KO',
    'Excede el tamaño maximo del nombre del fichero. Tiene que ser un tamaño de entre 7 y 10 caracteres sin espacios.'
    ),
    Array('analysis_preparation','nuevo_file_analysis_preparation',34, 'no alfabeticos o con espacios o ñ o acentos','EDIT', 'nuevo_file_analysis_preparation_name_format_KO',
    'Los caracteres introducidos como nombre de fichero son incorrectos. Tienen que ser alfabeticos con acentos, sin espacios ni ñ.'
    ),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 'Nombre archivo correcto tanto tamaño como formato', 'ADD', true, 'El nombre del archivo es correcto.'),
    Array('analysis_preparation','nuevo_file_analysis_preparation',36, 'tamaño file > 2000000 bytes','EDIT',  'nuevo_file_analysis_preparation_max_size_file_KO',
    'Excede el tamaño maximo de fichero permitido. El fichero tiene que tener un tamaño menor a 2000000 bytes.'
    ),
    Array('analysis_preparation','nuevo_file_analysis_preparation',37, 'tipo de fichero pdf, doc o docx','EDIT',  'nuevo_file_analysis_preparation_file_type_KO',
    'El tipo del fichero es incorrecto. Tiene que ser de formato pdf, doc y docx.'
    ),
    Array('analysis_preparation','nuevo_file_analysis_preparation',38, 'entre 7 y 100 caracteres alfabeticos con acentos, sin espacios ni ñ.', 'EDIT', true, 'Exito.'
    ),
    //SEARCH
    // id_analysis_preparation
    Array('analysis_preparation', 'id_analysis_preparation', 39, 'tamaño > 11', 'SEARCH',  
        'id_analysis_preparation_max_size_KO', 
        'Excede el tamaño del campo. Tiene que tener un tamaño entre 3 y 11 dígitos.'
    ),
    Array('analysis_preparation', 'id_analysis_preparation', 40, 'no dígitos o con espacios', 'SEARCH',  
        'id_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser solo dígitos sin espacios.'
    ),
    Array('analysis_preparation', 'id_analysis_preparation', 41, 'entre 3 y 11 dígitos', 'SEARCH', true, 
        'Éxito.'
    ),
    // name_analysis_preparation
    Array('analysis_preparation', 'name_analysis_preparation', 42, 'tamaño > 100', 'SEARCH',  
        'name_analysis_preparation_max_size_KO', 
        'Excede el tamaño máximo del campo. Tiene que tener un tamaño entre 8 y 100 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'name_analysis_preparation', 43, 'no alfabéticos o con acentos o ñ', 'SEARCH',  
        'name_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('analysis_preparation', 'name_analysis_preparation', 44, 'entre 8 y 100 caracteres alfabéticos con espacios, sin acentos ni ñ', 'SEARCH', true, 
        'Éxito.'
    ),

    // description_analysis_preparation
    Array('analysis_preparation', 'description_analysis_preparation', 45, 'tamaño > 5000', 'SEARCH',  
        'description_analysis_preparation_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 80 y 5000 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'description_analysis_preparation', 46, 'no alfabéticos o con acentos o ñ', 'SEARCH',  
        'description_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('analysis_preparation', 'description_analysis_preparation', 47, 'entre 80 y 5000 caracteres alfabéticos con espacios, sin acentos ni ñ', 'SEARCH', true, 
        'Éxito.'
    ),

    // bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 48, 'tamaño > 200', 'SEARCH',  
        'bib_analysis_preparation_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 6 y 200 caracteres con espacios.'
    ),
    Array('analysis_preparation', 'bib_analysis_preparation', 49, 'no alfabéticos o signos de puntuación', 'SEARCH',  
        'bib_analysis_preparation_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, acentos, ñ y signos de puntuación.'
    ),
    Array('analysis_preparation', 'bib_analysis_preparation', 50, 'entre 6 y 200 caracteres alfabéticos con espacios, acentos, ñ y signos de puntuación', 'SEARCH', true, 
        'Éxito.'
    ),

    //file_analysis_preparation
    Array('analysis_preparation','file_analysis_preparation',51, 'tamaño nombre > 100','SEARCH',  'file_analysis_preparation_name_max_size_KO',
    'Excede el tamaño maximo del nombre del fichero. Tiene que ser un tamaño de entre 7 y 10 caracteres sin espacios.'
    ),
    Array('analysis_preparation','file_analysis_preparation',52, 'no alfabeticos o con espacios o ñ o acentos','SEARCH',  'file_analysis_preparation_name_format_KO',
    'Los caracteres introducidos como nombre de fichero son incorrectos. Tienen que ser alfabeticos con acentos, sin espacios ni ñ.'
    ),
    Array('analysis_preparation','file_analysis_preparation',53, 'entre 7 y 100 caracteres alfabeticos con acentos, sin espacios ni ñ.', 'SEARCH',
    true, 'Exito.'
    ),
 
);

let analysis_preparation_tests = Array(
    // ADD
    //name_analysis_preparation
    Array('analysis_preparation', 'name_analysis_preparation', 1, 1, 'ADD', 'abcdefg', 'name_analysis_preparation_min_size_KO'), // tam<8
    Array('analysis_preparation', 'name_analysis_preparation', 1, 2, 'ADD', 'abcdefgh', true), // tam=8
    Array('analysis_preparation', 'name_analysis_preparation', 2, 3, 'ADD', 'a'.repeat(101), 'name_analysis_preparation_max_size_KO'), // tam>100
    Array('analysis_preparation', 'name_analysis_preparation', 2, 4, 'ADD', 'a'.repeat(100), true), // tam=100
    Array('analysis_preparation', 'name_analysis_preparation', 3, 5, 'ADD', 'gonzález', 'name_analysis_preparation_format_KO'), // acentos
    Array('analysis_preparation', 'name_analysis_preparation', 3, 6, 'ADD', 'menduiña', 'name_analysis_preparation_format_KO'), // ñ
    Array('analysis_preparation', 'name_analysis_preparation', 3, 7, 'ADD', '123456789', 'name_analysis_preparation_format_KO'), // no alfabeticos, digitos
    Array('analysis_preparation', 'name_analysis_preparation', 3, 8, 'ADD', '....,,,;;;:::', 'name_analysis_preparation_format_KO'), // no alfabeticos, signos de puntuacion
    Array('analysis_preparation', 'name_analysis_preparation', 3, 9, 'ADD', '@@##%%&&!!', 'name_analysis_preparation_format_KO'), // no alfabeticos, signos especiales
    Array('analysis_preparation', 'name_analysis_preparation', 3, 10, 'ADD', 'brais gonzalez', true), // OK
    Array('analysis_preparation', 'name_analysis_preparation', 4, 11, 'ADD', 'Pérez Fernández', 'name_analysis_preparation_format_KO'), // <8 y acento
    Array('analysis_preparation', 'name_analysis_preparation', 4, 12, 'ADD', 'alejandro manuel', true), // OK

    

    // description_analysis_preparation
    Array('analysis_preparation', 'description_analysis_preparation', 5, 13, 'ADD', 'b'.repeat(79), 'description_analysis_preparation_min_size_KO'), // tam<80
    Array('analysis_preparation', 'description_analysis_preparation', 5, 14, 'ADD', 'b'.repeat(80), true), // tam=80
    Array('analysis_preparation', 'description_analysis_preparation', 6, 15, 'ADD', 'b'.repeat(5001), 'description_analysis_preparation_max_size_KO'), // tam>5000
    Array('analysis_preparation', 'description_analysis_preparation', 6, 16, 'ADD', 'b'.repeat(5000), true), // tam=5000
    Array('analysis_preparation', 'description_analysis_preparation', 7, 17, 'ADD', 'á'.repeat(80), 'description_analysis_preparation_format_KO'), // acentos
    Array('analysis_preparation', 'description_analysis_preparation', 7, 18, 'ADD', 'ñ'.repeat(80), 'description_analysis_preparation_format_KO'), // ñ
    Array('analysis_preparation', 'description_analysis_preparation', 7, 19, 'ADD', '3'.repeat(80), 'description_analysis_preparation_format_KO'), // no alfabeticos, digitos
    Array('analysis_preparation', 'description_analysis_preparation', 7, 20, 'ADD', ';'.repeat(80), 'description_analysis_preparation_format_KO'), // no alfabeticos, signos de puntuacion
    Array('analysis_preparation', 'description_analysis_preparation', 7, 21, 'ADD', '#'.repeat(80), 'description_analysis_preparation_format_KO'), // no alfabeticos, signos especiales
    Array('analysis_preparation', 'description_analysis_preparation', 7, 22, 'ADD', 'b b '.repeat(20), true), // espacios sin acentos ni ñ
    Array('analysis_preparation', 'description_analysis_preparation', 8, 23, 'ADD', 'á'.repeat(82), 'description_analysis_preparation_format_KO'), // acentos, tam <80
    Array('analysis_preparation', 'description_analysis_preparation', 8, 24, 'ADD', 'a b '.repeat(100), true), // OK

    // bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 9, 25, 'ADD', 'bbbbb', 'bib_analysis_preparation_min_size_KO'), // tam<6
    Array('analysis_preparation', 'bib_analysis_preparation', 9, 26, 'ADD', 'bbbbbn', true), // tam=6
    Array('analysis_preparation', 'bib_analysis_preparation', 10, 27, 'ADD', 'b'.repeat(201), 'bib_analysis_preparation_max_size_KO'), // tam>200
    Array('analysis_preparation', 'bib_analysis_preparation', 10, 28, 'ADD', 'b'.repeat(200), true), // tam=200
    Array('analysis_preparation', 'bib_analysis_preparation', 11, 29, 'ADD', '1234567', 'bib_analysis_preparation_format_KO'), // no alfabético, digitos
    Array('analysis_preparation', 'bib_analysis_preparation', 11, 30, 'ADD', '@##@#@#@#', 'bib_analysis_preparation_format_KO'), // no alfabeticos, caracteres especiales
    Array('analysis_preparation', 'bib_analysis_preparation', 11, 31, 'ADD', 'Gonzalez Menduiña', true), // format correcto
    Array('analysis_preparation', 'bib_analysis_preparation', 12, 32, 'ADD', 'brgm22@pruebaunitaria.com', 'bib_analysis_preparation_format_KO'), // digitos y caracteres especiales
    Array('analysis_preparation', 'bib_analysis_preparation', 12, 33, 'ADD', 'Gonzalez Menduiña', true), // OK

    /*EDIT */
    //name_analysis_preparation
    Array('analysis_preparation', 'name_analysis_preparation', 20, 34, 'EDIT', 'abcdefg', 'name_analysis_preparation_min_size_KO'), // tam<8
    Array('analysis_preparation', 'name_analysis_preparation', 20, 35, 'EDIT', 'abcdefgh', true), // tam=8
    Array('analysis_preparation', 'name_analysis_preparation', 21, 36, 'EDIT', 'a'.repeat(101), 'name_analysis_preparation_max_size_KO'), // tam>100
    Array('analysis_preparation', 'name_analysis_preparation', 21, 37, 'EDIT', 'a'.repeat(100), true), // tam=100
    Array('analysis_preparation', 'name_analysis_preparation', 22, 38, 'EDIT', 'gonzález', 'name_analysis_preparation_format_KO'), // acentos
    Array('analysis_preparation', 'name_analysis_preparation',22, 39, 'EDIT', 'menduiña', 'name_analysis_preparation_format_KO'), // ñ
    Array('analysis_preparation', 'name_analysis_preparation',22, 40, 'EDIT', '123456789', 'name_analysis_preparation_format_KO'), // no alfabeticos, digitos
    Array('analysis_preparation', 'name_analysis_preparation',22, 41, 'EDIT', '....,,,;;;:::', 'name_analysis_preparation_format_KO'), // no alfabeticos, signos de puntuacion
    Array('analysis_preparation', 'name_analysis_preparation',22, 42, 'EDIT', '@@##%%&&!!', 'name_analysis_preparation_format_KO'), // no alfabeticos, signos especiales
    Array('analysis_preparation', 'name_analysis_preparation',22, 43, 'EDIT', 'brais gonzalez', true), // OK
    Array('analysis_preparation', 'name_analysis_preparation',23, 44, 'EDIT', 'Pérez Fernández', 'name_analysis_preparation_format_KO'), // <8 y acento
    Array('analysis_preparation', 'name_analysis_preparation', 23, 45, 'EDIT', 'alejandro manuel', true), // OK

    // description_analysis_preparation
    Array('analysis_preparation', 'description_analysis_preparation', 24, 46, 'EDIT', 'b'.repeat(79), 'description_analysis_preparation_min_size_KO'), // tam<80
    Array('analysis_preparation', 'description_analysis_preparation', 24, 47, 'EDIT', 'b'.repeat(80), true), // tam=80
    Array('analysis_preparation', 'description_analysis_preparation', 25, 48, 'EDIT', 'b'.repeat(5001), 'description_analysis_preparation_max_size_KO'), // tam>5000
    Array('analysis_preparation', 'description_analysis_preparation', 25, 49, 'EDIT', 'b'.repeat(5000), true), // tam=5000
    Array('analysis_preparation', 'description_analysis_preparation', 26, 50, 'EDIT', 'á'.repeat(80), 'description_analysis_preparation_format_KO'), // acentos
    Array('analysis_preparation', 'description_analysis_preparation', 26, 51, 'EDIT', 'ñ'.repeat(80), 'description_analysis_preparation_format_KO'), // ñ
    Array('analysis_preparation', 'description_analysis_preparation', 26, 52, 'EDIT', '3'.repeat(80), 'description_analysis_preparation_format_KO'), // no alfabeticos, digitos
    Array('analysis_preparation', 'description_analysis_preparation', 26, 53, 'EDIT', ';'.repeat(80), 'description_analysis_preparation_format_KO'), // no alfabeticos, signos de puntuacion
    Array('analysis_preparation', 'description_analysis_preparation', 26, 54, 'EDIT', '#'.repeat(80), 'description_analysis_preparation_format_KO'), // no alfabeticos, signos especiales
    Array('analysis_preparation', 'description_analysis_preparation', 26, 55, 'EDIT', 'b b '.repeat(20), true), // espacios sin acentos ni ñ
    Array('analysis_preparation', 'description_analysis_preparation', 27, 56, 'EDIT', 'á'.repeat(89), 'description_analysis_preparation_format_KO'), // acentos, tam <80
    Array('analysis_preparation', 'description_analysis_preparation', 27, 57, 'EDIT', 'a b '.repeat(100), true), // OK

    // bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 28, 58, 'EDIT', 'bbbbb', 'bib_analysis_preparation_min_size_KO'), // tam<6
    Array('analysis_preparation', 'bib_analysis_preparation', 28, 59, 'EDIT', 'bbbbbn', true), // tam=6
    Array('analysis_preparation', 'bib_analysis_preparation', 29, 60, 'EDIT', 'b'.repeat(201), 'bib_analysis_preparation_max_size_KO'), // tam>200
    Array('analysis_preparation', 'bib_analysis_preparation', 29, 61, 'EDIT', 'b'.repeat(200), true), // tam=200
    Array('analysis_preparation', 'bib_analysis_preparation', 30, 62, 'EDIT', '1234567', 'bib_analysis_preparation_format_KO'), // no alfabético, digitos
    Array('analysis_preparation', 'bib_analysis_preparation', 30, 63, 'EDIT', '@##@#@#@#', 'bib_analysis_preparation_format_KO'), // no alfabeticos, caracteres especiales
    Array('analysis_preparation', 'bib_analysis_preparation', 30, 64, 'EDIT', 'Gonzalez Menduiña', true), // format correcto
    Array('analysis_preparation', 'bib_analysis_preparation', 31, 65, 'EDIT', 'brgm22@pruebaunitaria.com', 'bib_analysis_preparation_format_KO'), // digitos y caracteres especiales
    Array('analysis_preparation', 'bib_analysis_preparation', 31, 66, 'EDIT', 'Gonzalez Menduiña', true), // OK

    /*SEARCH */
    //id_analysis_preparation V
    Array('analysis_preparation','id_analysis_preparation',39,67,'SEARCH','333333333333','id_analysis_preparation_max_size_KO'),//tam > 11
    Array('analysis_preparation','id_analysis_preparation',39,68,'SEARCH','01234567890',true), //tam = 11
    Array('analysis_preparation','id_analysis_preparation',40,72,'SEARCH','90 19','id_analysis_preparation_format_KO'),//espacio
    Array('analysis_preparation','id_analysis_preparation',40,73,'SEARCH','1234',true),//digitos
    Array('analysis_preparation','id_analysis_preparation',41,74,'SEARCH','190 9br ','id_analysis_preparation_format_KO'),//
    Array('analysis_preparation','id_analysis_preparation',41,75,'SEARCH','123456789',true),//

    Array('analysis_preparation', 'name_analysis_preparation', 42, 76, 'SEARCH', 'a'.repeat(101), 'name_analysis_preparation_max_size_KO'), // tam>100
    Array('analysis_preparation', 'name_analysis_preparation', 42, 77, 'SEARCH', 'a'.repeat(100), true), // tam=100
    Array('analysis_preparation', 'name_analysis_preparation', 43, 78, 'SEARCH', 'gonzález', 'name_analysis_preparation_format_KO'), // acentos
    Array('analysis_preparation', 'name_analysis_preparation', 43, 79, 'SEARCH', 'menduiña', 'name_analysis_preparation_format_KO'), // ñ
    Array('analysis_preparation', 'name_analysis_preparation', 43, 80, 'SEARCH', '123456789', 'name_analysis_preparation_format_KO'), // no alfabeticos, digitos
    Array('analysis_preparation', 'name_analysis_preparation', 43, 81, 'SEARCH', '....,,,;;;:::', 'name_analysis_preparation_format_KO'), // no alfabeticos, signos de puntuacion
    Array('analysis_preparation', 'name_analysis_preparation', 43, 82, 'SEARCH', '@@##%%&&!!', 'name_analysis_preparation_format_KO'), // no alfabeticos, signos especiales
    Array('analysis_preparation', 'name_analysis_preparation', 43, 83, 'SEARCH', 'brais gonzalez', true), // OK
    Array('analysis_preparation', 'name_analysis_preparation', 44, 84, 'SEARCH', 'Pérez', 'name_analysis_preparation_format_KO'), // <8 y acento
    Array('analysis_preparation', 'name_analysis_preparation', 44, 85, 'SEARCH', 'alejandro manuel', true), // OK

    // description_analysis_preparation
    Array('analysis_preparation', 'description_analysis_preparation', 45, 86, 'SEARCH', 'b'.repeat(5001), 'description_analysis_preparation_max_size_KO'), // tam>5000
    Array('analysis_preparation', 'description_analysis_preparation', 45, 87, 'SEARCH', 'b'.repeat(5000), true), // tam=5000
    Array('analysis_preparation', 'description_analysis_preparation', 46, 88, 'SEARCH', 'á'.repeat(80), 'description_analysis_preparation_format_KO'), // acentos
    Array('analysis_preparation', 'description_analysis_preparation', 46, 89, 'SEARCH', 'ñ'.repeat(80), 'description_analysis_preparation_format_KO'), // ñ
    Array('analysis_preparation', 'description_analysis_preparation', 46, 90, 'SEARCH', '3'.repeat(80), 'description_analysis_preparation_format_KO'), // no alfabeticos, digitos
    Array('analysis_preparation', 'description_analysis_preparation', 46, 91, 'SEARCH', ';'.repeat(80), 'description_analysis_preparation_format_KO'), // no alfabeticos, signos de puntuacion
    Array('analysis_preparation', 'description_analysis_preparation', 46, 92, 'SEARCH', '#'.repeat(80), 'description_analysis_preparation_format_KO'), // no alfabeticos, signos especiales
    Array('analysis_preparation', 'description_analysis_preparation', 46, 93, 'SEARCH', 'b b '.repeat(20), true), // espacios sin acentos ni ñ
    Array('analysis_preparation', 'description_analysis_preparation', 47, 94, 'SEARCH', 'á'.repeat(79), 'description_analysis_preparation_format_KO'), // acentos, tam <80
    Array('analysis_preparation', 'description_analysis_preparation', 47, 95, 'SEARCH', 'a b '.repeat(100), true), // OK

    // bib_analysis_preparation
    Array('analysis_preparation', 'bib_analysis_preparation', 48, 96, 'SEARCH', 'b'.repeat(201), 'bib_analysis_preparation_max_size_KO'), // tam>200
    Array('analysis_preparation', 'bib_analysis_preparation', 48, 97, 'SEARCH', 'b'.repeat(200), true), // tam=200
    Array('analysis_preparation', 'bib_analysis_preparation', 49, 98, 'SEARCH', '1234567', 'bib_analysis_preparation_format_KO'), // no alfabético, digitos
    Array('analysis_preparation', 'bib_analysis_preparation', 49, 99, 'SEARCH', '@##@#@#@#', 'bib_analysis_preparation_format_KO'), // no alfabeticos, caracteres especiales
    Array('analysis_preparation', 'bib_analysis_preparation', 49, 100, 'SEARCH', 'Gonzalez Menduiña', true), // format correcto
    Array('analysis_preparation', 'bib_analysis_preparation', 50, 101, 'SEARCH', 'brgm22@pruebaunitaria.com', 'bib_analysis_preparation_format_KO'), // digitos y caracteres especiales
    Array('analysis_preparation', 'bib_analysis_preparation', 50, 102, 'SEARCH', 'Gonzalez Menduiña', true), // OK

);

let analysis_preparation_tests_files = Array(
    /*ADD */
    //nuevo_file_analysis_preparation
    //Array('analysis_preparation', 'nuevo_file_analysis_preparation', 16, 103, 'ADD', 'el fichero es correcto', Array(), 'nuevo_file_analysis_preparation_empty_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 16, 103, 'ADD', 'el fichero es correcto', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 13, 104, 'ADD', 'tamaño nombre < 7', Array('aa.pdf',Array('application/pdf'),10000), 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 13, 105, 'ADD', 'tamaño nombre < 7', Array('aaa.pdf',Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 14, 106, 'ADD', 'tamaño nombre > 100', Array('a'.repeat(101),Array('application/pdf'),10000), 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 14, 107, 'ADD', 'tamaño nombre > 100', Array('a'.repeat(100),Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 15, 108, 'ADD', 'alfabeticos o con espacios o ñ o acentos', Array('GonzálezMenduiña.pdf',Array('application/pdf'),10000), 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 15, 109, 'ADD', 'alfabeticos o con espacios o ñ o acentos', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 17, 110, 'ADD', 'tamaño menor al máximo', Array('BoasTardes.pdf',Array('application/pdf'),20000000), 'nuevo_file_analysis_preparation_max_size_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 17, 111, 'ADD', 'tamaño menor al máximo', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 18, 112, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.jpeg',Array('image/jpeg'),10000), 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 18, 113, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 18, 114, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.doc',Array('application/msword'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 18, 115, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.docx',Array('application/vnd.openxmlformats-officedocument.wordprocessingml.document'),10000), true),
    //Array('analysis_preparation', 'nuevo_file_analysis_preparation', 19, 117, 'ADD', 'Nombre, tipo y tamaño correcto.', Array(), 'nuevo_file_analysis_preparation_empty_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 19, 116, 'ADD', 'Nombre, tipo y tamaño correcto.', Array('BoasTardes.pdf', Array('application/pdf'), 10000), true),
    
    /*EDIT */
    //nuevo_file_analysis_preparation
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 32, 117, 'EDIT', 'tamaño nombre < 7', Array('aa.pdf',Array('application/pdf'),10000), 'nuevo_file_analysis_preparation_name_min_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 32, 118, 'EDIT', 'tamaño nombre < 7', Array('aaa.pdf',Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 119, 'EDIT', 'tamaño nombre > 100', Array('a'.repeat(101),Array('application/pdf'),10000), 'nuevo_file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 120, 'EDIT', 'tamaño nombre > 100', Array('a'.repeat(100),Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 34, 121, 'EDIT', 'alfabeticos o con espacios o ñ o acentos', Array('GonzálezMenduiña.pdf',Array('application/pdf'),10000), 'nuevo_file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 34, 122, 'EDIT', 'alfabeticos o con espacios o ñ o acentos', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    //Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 125, 'EDIT', 'el fichero es correcto', Array(), 'nuevo_file_analysis_preparation_empty_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 35, 123, 'EDIT', 'el fichero es correcto', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 36, 124, 'EDIT', 'tamaño menor al máximo', Array('BoasTardes.pdf',Array('application/pdf'),20000000), 'nuevo_file_analysis_preparation_max_size_file_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 36, 125, 'EDIT', 'tamaño menor al máximo', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 126, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.jpeg',Array('image/jpeg'),10000), 'nuevo_file_analysis_preparation_file_type_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 127, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 128, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.doc',Array('application/msword'),10000), true),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 37, 129, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.docx',Array('application/vnd.openxmlformats-officedocument.wordprocessingml.document'),10000), true),
    //Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 133, 'EDIT', 'Nombre, tipo y tamaño correcto.', Array(), 'nuevo_file_analysis_preparation_empty_KO'),
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 38, 130, 'EDIT', 'Nombre, tipo y tamaño correcto.', Array('BoasTardes.pdf', Array('application/pdf'), 10000), true),

    /*SEARCH */
    //file_analysis_preparation
    Array('analysis_preparation', 'file_analysis_preparation', 51, 131, 'SEARCH', 'tamaño nombre > 100', 'a'.repeat(101), 'file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 51, 132, 'SEARCH', 'tamaño nombre > 100', 'a'.repeat(100), true),
    Array('analysis_preparation', 'file_analysis_preparation', 52, 133, 'SEARCH', 'alfabeticos o con espacios o ñ o acentos', 'GonzálezMenduiña.pdf', 'file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 52, 134, 'SEARCH', 'alfabeticos o con espacios o ñ o acentos', 'BoasTardes.pdf', true),
);