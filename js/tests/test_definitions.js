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
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 14, 107, 'ADD', 'tamaño nombre > 100', Array('a'.repeat(96)+".pdf",Array('application/pdf'),10000), true),
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
    Array('analysis_preparation', 'nuevo_file_analysis_preparation', 33, 120, 'EDIT', 'tamaño nombre > 100', Array('a'.repeat(96)+".pdf",Array('application/pdf'),10000), true),
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
    Array('analysis_preparation', 'file_analysis_preparation', 51, 131, 'SEARCH', 'max_size', 'a'.repeat(101), 'file_analysis_preparation_name_max_size_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 51, 132, 'SEARCH', 'max_size', 'a'.repeat(96)+".pdf", true),
    Array('analysis_preparation', 'file_analysis_preparation', 52, 133, 'SEARCH', 'alfabeticos o con espacios o ñ o acentos', 'González@Menduiña.pdf', 'file_analysis_preparation_name_format_KO'),
    Array('analysis_preparation', 'file_analysis_preparation', 52, 134, 'SEARCH', 'alfabeticos o con espacios o ñ o acentos', 'BoasTardes.pdf', true),
);

/************************************************************************************ */
/************************************************************************************ */
/************************************************************************************ */
/*------------------------------------Project----------------------------------------*/
/************************************************************************************ */
/************************************************************************************ */
/************************************************************************************ */

let project_def_tests =  Array(

    //ADD
    //name_project V
    Array('project', 'name_project',1,'tamaño < 15','ADD','name_project_min_size_KO', 
        'El tamaño del campo es insuficiente. Tiene que ser entre 15 y 100 caracteres con espacios.'
    ),
    Array('project', 'name_project',2,'tamaño > 100','ADD','name_project_max_size_KO',
        'Excede el tamaño maximo del campo. Tiene que ser entre 15 y 100 caracteres con espacios.'
    ),
    Array('project', 'name_project',3,'no alfabeticos o con acentos o ñ','ADD','name_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser caracteres alfabeticos con espacios, sin acentos ni ñ.'
    ),
    Array('project', 'name_project',4,'entre 15 y 100 caracteres alfabeticos con espacios, sin acentos ni ñ','ADD',
        true,'Exito.'
    ),

    //start_date_project V
    Array('project', 'start_date_project',5,'no formato dd/mm/aaaa','ADD','start_date_project_format_KO', 
        'El formato de fecha es el incorrecto. Tiene que ser dd/mm/aaaa.'
    ),
    Array('project', 'start_date_project',6,'fehca no valida','ADD','start_date_project_invalid_KO', 
        'La fecha no es valida. Tiene que ser una fecha que exita en el calendario.'
    ),
    Array('project', 'start_date_project',7,'formato dd/mm/aaaa y fecha valida','ADD',true,'Exito'),

    //end_date_project V
    Array('project', 'end_date_project',8,'formato dd/mm/aaaa','ADD','end_date_project_format_KO', 
        'El formato de fecha es el incorrecto. Tiene que ser dd/mm/aaaa.'
    ),
    Array('project', 'end_date_project',9,'fecha no valida','ADD','end_date_project_invalid_KO', 
        'La fecha no es valida. Tiene que ser una fecha que exista en el calendario.'
    ),
    Array('project', 'end_date_project',10,'formato dd/mm/aaaa y fecha valida','ADD',true, 'Exito.'),

    //responsable_project V
    Array('project','responsable_project',11,'tamaño < 6','ADD','responsable_project_min_size_KO',
        'El tamaño del campo es insuficiente. Tiene que ser un tamaño de entre 6 y 60 caracteres con espacios.'
    ),
    Array('project','responsable_project',12,'tamaño > 60','ADD',  'responsable_project_max_size_KO',
        'Excede el tamaño maximo del campo. Tiene que ser un tamaño de entre 6 y 60 caracteres con espacios.'
    ),
    Array('project','responsable_project',13,'no alfabeticos o caracteres especiales o signos de puntuacion','ADD',  'responsable_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser de tipo alfabeticos con espacios, acentos y ñ.'
    ),
    Array('project','responsable_project',14,'entre 6 y 60 caracteres alfabeticos con espacios, acentos y ñ','ADD',true,'Exito.'),

    //organization_project V
    Array('project','organization_project',15,'tamaño < 6','ADD',  'organization_project_min_size_KO',
        'El tamaño del campo es insuficiente. Tiene que ser entre 6 y 100 caracteres.'
    ),
    Array('project','organization_project',16,'tamaño > 100','ADD',  'organization_project_max_size_KO',
        'Excede el tamaño maximo del campo. Tiene que ser entre 6 y 100 caracteres.'
    ),
    Array('project','organization_project',17,'no alfabeticos','ADD',  'organization_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser de tipo alfabeticos con acentos y ñ.'
    ),
    Array('project','organization_project',18,'entre 6 y 100 caracteres alfabeticos con acentos, ñ y espacios','ADD', true,
         'Exito.'),

    //  description_project V
    Array('project','description_project',19,'tamaño < 30','ADD', 'description_project_min_size_KO',
        'El tamaño del campo es insuficiente. Tiene que ser entre 30 y 500 caracteres.'
    ),
    Array('project','description_project',20,'tamaño > 500','ADD', 'description_project_max_size_KO',
        'Excede el tamaño del campo Tiene que ser entre 30 y 500 caracteres.'
    ),
    Array('project','description_project',21,'no caracteres ascii','ADD', 'description_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser caracteres ascii.'
    ),
    Array('project','description_project',22,'Cualquier ascii de entre 30 y 500 caracteres','ADD',true, 'Exito'),  

    //nuevo_file_project V
    Array('project','nuevo_file_project',23,'tamaño nombre < 7','ADD', 'nuevo_file_project_name_min_size_KO',
        'El tamaño del nombre del fichero es insuficiente. Tiene que ser entre 7 y 100.'
    ),
    Array('project','nuevo_file_project',24,'tamaño nombre > 100','ADD', 'nuevo_file_project_name_max_size_KO',
        'Excede el tamaño del nombre del fichero. Tiene que ser entre 7 y 100.'
    ),
    Array('project','nuevo_file_project',25,'formato nombre no alfabeticos o con acentos o ñ o espacios','ADD', 'nuevo_file_project_name_format_KO',
        'Los caracteres del nombre del fichero son incorrectos. Tienen que ser alfabeticos sin acentos ni ñ ni espacios.'
    ),

    Array('project','nuevo_file_project',26,'tamaño fichero > 2000000 bytes','ADD', 'nuevo_file_project_file_max_size_KO',
        'Excede el tamaño maximo permitido del fichero. Tiene que ser menor a 2000000 bytes'
    ),
    Array('project','nuevo_file_project',27,'no es tipo pdf ni doc ni docx','ADD', 'nuevo_file_project_file_type_KO',
        'El tipo del fichero es incorrecto. Tiene que ser pdf o doc o docx.'
    ),  
    Array('project','nuevo_file_project',28,'entre 7 y 100 caracteres alfabeticos sin acentos ni espacios ni ñ.','ADD',true, 'Exito.'),

    //code_project V
    Array('project','code_project',29,'tamaño < 6','ADD', 'code_project_min_size_KO',
         'El tamaño del campo es insuficiente. Tiene que ser entre 6 y 50 con espacios.'
        ),
    Array('project','code_project',30,'tamaño > 50','ADD',  'code_project_max_size_KO', 
        'Excede el tamaño maximo del campo. Tiene que ser entre 6 y 50 con espacios.'
    ),
    Array('project','code_project',31,'no alfabeticos o signos de puntuacion','ADD', 'code_project_format_KO', 
        'Los caracteres introducidos son incorrectos. Tienen que ser alfabeticos con espacios o con signos de puntuacion o con ñ'),
    Array('project','code_project',32,'entre 6 y 50 caracteres alfabeticos con espacios, signos de puntuacion y ñ','ADD', true, 'Exito.'),

    //acronym_project V
    Array('project','acronym_project',33,'tamaño < 6','ADD',  'acronym_project_min_size_KO', 
        'El tamaño del campo es insuficiente. Tiene que ser entre 6 y 15 sin espacios.'
    ),
    Array('project','acronym_project',34,'tamaño > 15','ADD', 'acronym_project_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 6 y 15 sin espacios.'
    ),
    Array('project','acronym_project',35,'no alfabeticos o con acentos o con ñ o con espacios','ADD',  'acronym_project_format_KO', 
        'Los caracteres introducidos son incorrectos. Tienen que ser alfabeticos sin acentos ni ñ ni espacios.' 
    ),
    Array('project','acronym_project',36,'entre 6 y 15 caracteres alfabeticos sin acentos ni ñ ni espacios','ADD', true, 'Exito'),

    //id_sampling_methodology V
    Array('project','id_sampling_methodology',37, ' tamaño < 1','ADD', 'id_sampling_methodology_min_size_KO', 
        'El tamaño del campo es insuficiente. Tiene que ser entre 1 y 11 digitos.'
     ),
     Array('project','id_sampling_methodology',38, ' tamaño > 11','ADD',  'id_sampling_methodology_max_size_KO', 
        'Excede el tamaño maximo del campo. Tiene que ser entre 1 y 11 digitos.'
     ),
     Array('project','id_sampling_methodology',39, ' no digitos o con espacios','ADD', 'id_sampling_methodology_format_KO', 
        'Los caracteres introducidos son incorrectos. Tienen que ser digitos sin espacio.'
     ),
     Array('project','id_sampling_methodology',40, ' entre 1 y 11 digitos sin espacio','ADD',true, 'Exito.'),

     //EDIT
    //name_project V
    Array('project', 'name_project',41,'tamaño < 15','EDIT','name_project_min_size_KO',
        'El tamaño del campo es insuficiente. Tiene que ser entre 5 y 100 caracteres con espacios.'
    ),
    Array('project', 'name_project',42,'tamaño > 100','EDIT','name_project_max_size_KO',
        'Excede el tamaño maximo del campo. Tiene que ser entre 5 y 100 caracteres con espacios.'
    ),
    Array('project', 'name_project',43,'no alfabeticos o con acentos o ñ','EDIT','name_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser caracteres alfabeticos con espacios, sin acentos ni ñ.'
    ),
    Array('project', 'name_project',44,'entre 15 y 100 caracteres alfabeticos con espacios, sin acentos ni ñ','EDIT',
        true,'Exito.'
    ),

    //start_date_project V
    Array('project', 'start_date_project',45,'no formato dd/mm/aaaa','EDIT','start_date_project_format_KO', 
        'El formato de fecha es el incorrecto. Tiene que ser dd/mm/aaaa.'
    ),
    Array('project', 'start_date_project',46,'fehca no valida','EDIT','start_date_project_invalid_KO', 
        'La fecha no es valida. Tiene que ser una fecha que exita en el calendario.'
    ),
    Array('project', 'start_date_project',47,'formato dd/mm/aaaa y fecha valida','EDIT',true,'Exito'),

    //end_date_project V
    Array('project', 'end_date_project',48,'formato dd/mm/aaaa','EDIT','end_date_project_format_KO', 
        'El formato de fecha es el incorrecto. Tiene que ser dd/mm/aaaa.'
    ),
    Array('project', 'end_date_project',49,'fecha no valida','EDIT','end_date_project_invalid_KO', 
        'La fecha no es valida. Tiene que ser una fecha que exista en el calendario.'
    ),
    Array('project', 'end_date_project',50,'formato dd/mm/aaaa y fecha valida','EDIT',true, 'Exito.'),

    //responsable_project V
    Array('project','responsable_project',51,'tamaño < 6','EDIT',  'responsable_project_min_size_KO',
        'El tamaño del campo es insuficiente. Tiene que ser un tamaño de entre 6 y 60 caracteres con espacios.'
    ),
    Array('project','responsable_project',52,'tamaño > 60','EDIT',  'responsable_project_max_size_KO',
        'Excede el tamaño maximo del campo. Tiene que ser un tamaño de entre 6 y 60 caracteres con espacios.'
    ),
    Array('project','responsable_project',53,'no alfabeticos o caracteres especiales o signos de puntuacion','EDIT',  'responsable_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser de tipo alfabeticos con espacios, acentos y ñ.'
    ),
    Array('project','responsable_project',54,'entre 6 y 60 caracteres alfabeticos con espacios, acentos y ñ','EDIT', true,'Exito.'),

    //organization_project V
    Array('project','organization_project',55,'tamaño < 6','EDIT',  'organization_project_min_size_KO',
        'El tamaño del campo es insuficiente. Tiene que ser entre 6 y 100 caracteres.'
    ),
    Array('project','organization_project',56,'tamaño > 100','EDIT',  'organization_project_max_size_KO',
        'Excede el tamaño maximo del campo. Tiene que ser entre 6 y 100 caracteres.'
    ),
    Array('project','organization_project',57,'no alfabeticos','EDIT',  'organization_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser de tipo alfabeticos con acentos y ñ.'
    ),
    Array('project','organization_project',58,'entre 6 y 100 caracteres alfabeticos con acentos, ñ y espacios','EDIT', true, 'Exito.'),

    //  description_project V
    Array('project','description_project',59,'tamaño < 30','EDIT', 'description_project_min_size_KO',
        'El tamaño del campo es insuficiente. Tiene que ser entre 30 y 500 caracteres.'
    ),
    Array('project','description_project',60,'tamaño > 500','EDIT', 'description_project_max_size_KO',
        'Excede el tamaño del campo Tiene que ser entre 30 y 500 caracteres.'
    ),
    Array('project','description_project',61,'no caracteres ascii','EDIT', 'description_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser caracteres ascii.'
    ),
    Array('project','description_project',62,'Cualquier ascii de entre 30 y 500 caracteres','EDIT',true, 'Exito.'),  

    //nuevo_file_project V
    Array('project','nuevo_file_project',63,'tamaño nombre < 7','EDIT', 'nuevo_file_project_name_min_size_KO',
        'El tamaño del nombre del fichero es insuficiente. Tiene que ser entre 7 y 100.'
    ),
    Array('project','nuevo_file_project',64,'tamaño nombre > 100','EDIT', 'nuevo_file_project_name_max_size_KO',
        'Excede el tamaño del nombre del fichero. Tiene que ser entre 7 y 100.'
    ),
    Array('project','nuevo_file_project',65,'formato nombre no alfabeticos o con acentos o ñ o espacios','EDIT', 'nuevo_file_project_name_format_KO',
        'Los caracteres del nombre del fichero son incorrectos. Tienen que ser alfabeticos sin acentos ni ñ ni espacios.'
    ),

    Array('project','nuevo_file_project',66,'tamaño fichero > 2000000 bytes','EDIT', 'nuevo_file_project_file_max_size_KO',
        'Excede el tamaño maximo permitido del fichero. Tiene que ser menor a 2000000 bytes'
    ),
    Array('project','nuevo_file_project',67,'no es tipo pdf ni doc ni docx','EDIT', 'nuevo_file_project_file_type_KO',
        'El tipo del fichero es incorrecto. Tiene que ser pdf o doc o docx.'
    ),  
    Array('project','nuevo_file_project',68,'entre 7 y 100 caracteres alfabeticos sin acentos ni espacios ni ñ.','EDIT',true, 'Exito.'),

    //code_project V
    Array('project','code_project',69,'tamaño < 6','EDIT', 'code_project_min_size_KO',
         'El tamaño del campo es insuficiente. Tiene que ser entre 6 y 50 con espacios.'
        ),
    Array('project','code_project',70,'tamaño > 50','EDIT',  'code_project_max_size_KO', 
        'Excede el tamaño maximo del campo. Tiene que ser entre 6 y 50 con espacios.'
    ),
    Array('project','code_project',71,'no alfabeticos o signos de puntuacion','EDIT', 'code_project_format_KO', 
        'Los caracteres introducidos son incorrectos. Tienen que ser alfabeticos con espacios o con signos de puntuacion o con ñ'),
    Array('project','code_project',72,'entre 6 y 50 caracteres alfabeticos con espacios, signos de puntuacion y ñ','EDIT', true,  'Exito.'),

    //acronym_project V
    Array('project','acronym_project',73,'tamaño < 6','EDIT',  'acronym_project_min_size_KO', 
        'El tamaño del campo es insuficiente. Tiene que ser entre 6 y 15 sin espacios.'
    ),
    Array('project','acronym_project',74,'tamaño > 15','EDIT', 'acronym_project_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 6 y 15 sin espacios.'
    ),
    Array('project','acronym_project',75,'no alfabeticos o con acentos o con ñ o con espacios','EDIT',  'acronym_project_format_KO', 
        'Los caracteres introducidos son incorrectos. Tienen que ser alfabeticos sin acentos ni ñ ni espacios.' 
    ),
    Array('project','acronym_project',76,'entre 6 y 15 caracteres alfabeticos sin acentos ni ñ ni espacios','EDIT', true,  'Exito.'),

    //id_sampling_methodology V
    Array('project','id_sampling_methodology',77, ' tamaño < 1','EDIT', 'id_sampling_methodology_min_size_KO', 
        'El tamaño del campo es insuficiente. Tiene que ser entre 1 y 11 digitos.'
     ),
     Array('project','id_sampling_methodology',78, ' tamaño > 11','EDIT',  'id_sampling_methodology_max_size_KO', 
        'Excede el tamaño maximo del campo. Tiene que ser entre 1 y 11 digitos.'
     ),
     Array('project','id_sampling_methodology',79, ' no digitos o con espacios','EDIT', 'id_sampling_methodology_format_KO', 
        'Los caracteres introducidos son incorrectos. Tienen que ser digitos sin espacio.'
     ),
     Array('project','id_sampling_methodology',80, ' entre 1 y 11 digitos sin espacio','EDIT',true, 'Exito.'),

    //SEARCH
    //id_project
    //id_project V
    Array('project','id_project',81,'tamaño > 11','SEARCH',  'id_project_max_size_KO', 'Excede el tamaño maximo del campo. Tiene que ser entre 1 y 11 digitos.'),
    Array('project','id_project',82,'no digitos o con espacios','SEARCH', 'id_project_format_KO', 
        'Los caracteres introduccidos son incorrectos. Tienen que ser caracteres de tipo digitos sin espacios.'
    ),
    Array('project','id_project',83,'entre 1 y 11 digitos, sin espacios','SEARCH', true, 'Exito.'),

    //name_project V
    Array('project', 'name_project',84,'tamaño > 100','SEARCH','name_project_max_size_KO',
        'Excede el tamaño maximo del campo. Tiene que ser entre 5 y 100 caracteres con espacios.'
    ),
    Array('project', 'name_project',85,'no alfabeticos o con acentos o ñ','SEARCH','name_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser caracteres alfabeticos con espacios, sin acentos ni ñ.'
    ),
    Array('project', 'name_project',86,'entre 15 y 100 caracteres alfabeticos con espacios, sin acentos ni ñ','SEARCH',
        true,'Exito.'
    ),

    //start_date_project V
    Array('project', 'start_date_project',87,'no formato dd/mm/aaaa','SEARCH','start_date_project_format_KO', 
        'El formato de fecha es el incorrecto. Tiene que ser dd/mm/aaaa.'
    ),
    Array('project', 'start_date_project',88,'fehca no valida','SEARCH','start_date_project_invalid_KO', 
        'La fecha no es valida. Tiene que ser una fecha que exita en el calendario.'
    ),
    Array('project', 'start_date_project',89,'formato dd/mm/aaaa y fecha valida','SEARCH',true, 'Exito'),

    //end_date_project V
    Array('project', 'end_date_project',90,'formato dd/mm/aaaa','SEARCH','end_date_project_format_KO', 
        'El formato de fecha es el incorrecto. Tiene que ser dd/mm/aaaa.'
    ),
    Array('project', 'end_date_project',91,'fecha no valida','SEARCH','end_date_project_invalid_KO', 
        'La fecha no es valida. Tiene que ser una fecha que exista en el calendario.'
    ),
    Array('project', 'end_date_project',92,'formato dd/mm/aaaa y fecha valida','SEARCH',true, 'Exito.'),

    //responsable_project V
    Array('project','responsable_project',93,'tamaño > 60','SEARCH',  'responsable_project_max_size_KO',
        'Excede el tamaño maximo del campo. Tiene que ser un tamaño de entre 6 y 60 caracteres con espacios.'
    ),
    Array('project','responsable_project',94,'no alfabeticos o caracteres especiales o signos de puntuacion','SEARCH',  'responsable_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser de tipo alfabeticos con espacios, acentos y ñ.'
    ),
    Array('project','responsable_project',95,'entre 6 y 60 caracteres alfabeticos con espacios, acentos y ñ','SEARCH', true, 'Exito.'),

    //organization_project V
    Array('project','organization_project',96,'tamaño > 100','SEARCH',  'organization_project_max_size_KO',
        'Excede el tamaño maximo del campo. Tiene que ser entre 6 y 100 caracteres.'
    ),
    Array('project','organization_project',97,'no alfabeticos','SEARCH',  'organization_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser de tipo alfabeticos con acentos y ñ.'
    ),
    Array('project','organization_project',98,'entre 6 y 100 caracteres alfabeticos con acentos, ñ y espacios','SEARCH', true,'Exito.'),

    //  description_project V
    Array('project','description_project',99,'tamaño > 500','SEARCH', 'description_project_max_size_KO',
        'Excede el tamaño del campo Tiene que ser entre 30 y 500 caracteres.'
    ),
    Array('project','description_project',100,'no caracteres ascii','SEARCH', 'description_project_format_KO',
        'Los caracteres introducidos son incorrectos. Tienen que ser caracteres ascii.'
    ),
    Array('project','description_project',101,'Cualquier ascii de entre 30 y 500 caracteres','SEARCH',true, 'Exito.'),  

    //file_project V
    Array('project','file_project',102,'tamaño nombre > 100','SEARCH', 'file_project_name_max_size_KO',
        'Excede el tamaño del nombre del fichero. Tiene que ser entre 7 y 100.'
    ),
    Array('project','file_project',103,'formato nombre no alfabeticos o con acentos o ñ o espacios','SEARCH', 'file_project_name_format_KO',
        'Los caracteres del nombre del fichero son incorrectos. Tienen que ser alfabeticos sin acentos ni ñ ni espacios.'
    ),  
    Array('project','file_project',104,'entre 7 y 100 caracteres alfabeticos sin acentos ni espacios ni ñ.','SEARCH',true,  'Exito.'),

    //code_project V
    Array('project','code_project',105,'tamaño > 50','SEARCH',  'code_project_max_size_KO', 
        'Excede el tamaño maximo del campo. Tiene que ser entre 6 y 50 con espacios.'
    ),
    Array('project','code_project',106,'no alfabeticos o signos de puntuacion','SEARCH', 'code_project_format_KO', 
        'Los caracteres introducidos son incorrectos. Tienen que ser alfabeticos con espacios o con signos de puntuacion o con ñ'),
    Array('project','code_project',107,'entre 6 y 50 caracteres alfabeticos con espacios, signos de puntuacion y ñ','SEARCH', true,  'Exito.'),

    //acronym_project V
    Array('project','acronym_project',108,'tamaño > 15','SEARCH', 'acronym_project_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 6 y 15 sin espacios.'
    ),
    Array('project','acronym_project',109,'no alfabeticos o con acentos o con ñ o con espacios','SEARCH',  'acronym_project_format_KO', 
        'Los caracteres introducidos son incorrectos. Tienen que ser alfabeticos sin acentos ni ñ ni espacios.' 
    ),
    Array('project','acronym_project',110,'entre 6 y 15 caracteres alfabeticos sin acentos ni ñ ni espacios','SEARCH', true,  'Exito.'),

    //id_sampling_methodology V

     Array('project','id_sampling_methodology',111, ' tamaño > 11','SEARCH',  'id_sampling_methodology_max_size_KO', 
        'Excede el tamaño maximo del campo. Tiene que ser entre 1 y 11 digitos.'
     ),
     Array('project','id_sampling_methodology',112, ' no digitos o con espacios','SEARCH', 'id_sampling_methodology_format_KO', 
        'Los caracteres introducidos son incorrectos. Tienen que ser digitos sin espacio.'
     ),
     Array('project','id_sampling_methodology',113, ' entre 1 y 11 digitos sin espacio','SEARCH',true, 'Exito.'),
);
let project_tests = Array(

    /*ADD */
    //name_project
    Array('project', 'name_project', 1, 1, 'ADD', 'a'.repeat(14), 'name_project_min_size_KO'), //tam<15
    Array('project', 'name_project', 1, 2, 'ADD', 'a'.repeat(15), true),  //tam=15
    Array('project', 'name_project', 2, 3, 'ADD', 'a'.repeat(101), 'name_project_max_size_KO'), //tam>100
    Array('project', 'name_project', 2, 4, 'ADD', 'a'.repeat(100), true),  //tam=100
    Array('project', 'name_project', 3, 5, 'ADD', 'ñ ñ ñ ñ ñ ñ ñ ñ', 'name_project_format_KO'), //ñ
    Array('project', 'name_project', 3, 6, 'ADD', 'á á á é í ó ó ú', 'name_project_format_KO'), //acentos
    Array('project', 'name_project', 3, 7, 'ADD', '1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9', 'name_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'name_project', 3, 8, 'ADD', '. . . , , , ; ; ; ; : : :', 'name_project_format_KO'), //no alfabeticos, signos de puntuacion
    Array('project', 'name_project', 3, 9, 'ADD', '@ @ # # $ $ % % & &', 'name_project_format_KO'), //no alfabeticos, signos especiales
    Array('project', 'name_project', 3, 10, 'ADD', 'hola buenas tardes', true), //alfabeticos con espacios
    Array('project', 'name_project', 4, 11, 'ADD', 'gonzalez menduiña 26', 'name_project_format_KO'), //ñ
    Array('project', 'name_project', 4, 12, 'ADD', 'hola buenas tardes', true),  //ñ

    //start_date_project
    Array('project', 'start_date_project', 5, 13, 'ADD', '2000/08/12', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 5, 14, 'ADD', '12-08-2000', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 5, 15, 'ADD', '12.08.2000', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 5, 16, 'ADD', '12/08/2000', true),
    Array('project', 'start_date_project', 6, 17, 'ADD', '32/02/2024', 'start_date_project_invalid_KO'),
    Array('project', 'start_date_project', 6, 18, 'ADD', '35/13/2024', 'start_date_project_invalid_KO'),
    Array('project', 'start_date_project', 6, 19, 'ADD', '02/08/2000', true),
    Array('project', 'start_date_project', 7, 20, 'ADD', '40/13/2024', 'start_date_project_invalid_KO'),
    Array('project', 'start_date_project', 7, 21, 'ADD', '12/08/2000', true),

    //end_date_project
    Array('project', 'end_date_project', 8, 22, 'ADD', '2000/08/12', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 8, 23, 'ADD', '12-08-2000', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 8, 24, 'ADD', '12.08.2000', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 8, 25, 'ADD', '12/08/2000', true),
    Array('project', 'end_date_project', 9, 26, 'ADD', '32/02/2024', 'end_date_project_invalid_KO'),
    Array('project', 'end_date_project', 9, 27, 'ADD', '12/13/2024', 'end_date_project_invalid_KO'),
    Array('project', 'end_date_project', 9, 28, 'ADD', '2/8/2000', true),
    Array('project', 'end_date_project', 10, 29, 'ADD', '12/13/2024', 'end_date_project_invalid_KO'),
    Array('project', 'end_date_project', 10, 30, 'ADD', '12/08/2000', true),
    
    //responsable_project
    Array('project', 'responsable_project', 11, 31, 'ADD', 'abcde', 'responsable_project_min_size_KO'), //tam<6
    Array('project', 'responsable_project', 11, 32, 'ADD', 'abcdef', true),  //tam=6
    Array('project', 'responsable_project', 12, 33, 'ADD', 'a'.repeat(61), 'responsable_project_max_size_KO'), //tam>60
    Array('project', 'responsable_project', 12, 34, 'ADD', 'a'.repeat(60), true),  //tam=60
    Array('project', 'responsable_project', 13, 35, 'ADD', '@@@###%%%&&&&', 'responsable_project_format_KO'), //caracteres especiales
    Array('project', 'responsable_project', 13, 36, 'ADD', '......;;;;;,,,,,', 'responsable_project_format_KO'), //signos de puntuacion
    Array('project', 'responsable_project', 13, 37, 'ADD', '1 1 2 2 3 3 4 4 5 5 6 6', 'responsable_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'responsable_project', 13, 38, 'ADD', 'gonzález menduiña', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'responsable_project', 14, 39, 'ADD', 'bgm@gmail.com', 'responsable_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'responsable_project', 14, 40, 'ADD', 'pérez magariños', true),

    //organization_project
    Array('project', 'organization_project', 15, 41, 'ADD', 'abcde', 'organization_project_min_size_KO'), //tam<6
    Array('project', 'organization_project', 15, 42, 'ADD', 'abcdef', true),  //tam=6
    Array('project', 'organization_project', 16, 43, 'ADD', 'a'.repeat(101), 'organization_project_max_size_KO'), //tam>60
    Array('project', 'organization_project', 16, 44, 'ADD', 'a'.repeat(100), true),  //tam=60
    Array('project', 'organization_project', 17, 45, 'ADD', '@@@###%%%&&&&', 'organization_project_format_KO'), //caracteres especiales
    Array('project', 'organization_project', 17, 46, 'ADD', '......;;;;;,,,,,', 'organization_project_format_KO'), //signos de puntuacion
    Array('project', 'organization_project', 17, 47, 'ADD', '1 1 2 2 3 3 4 4 5 5 6 6', 'organization_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'organization_project', 17, 48, 'ADD', 'gonzález menduiña', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'organization_project', 18, 49, 'ADD', 'bgm@gmail.com', 'organization_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'organization_project', 18, 50, 'ADD', 'pérez magariños', true),

    //description_project
    Array('project', 'description_project', 19, 51, 'ADD', 'b'.repeat(29), 'description_project_min_size_KO'), //tam<6
    Array('project', 'description_project', 19, 52, 'ADD', 'b'.repeat(30), true),  //tam=6
    Array('project', 'description_project', 20, 53, 'ADD', 'a'.repeat(501), 'description_project_max_size_KO'), //tam>60
    Array('project', 'description_project', 20, 54, 'ADD', 'a'.repeat(500), true),  //tam=60
    Array('project', 'description_project', 21, 55, 'ADD', 'abcdefg,.,.,.,.,ñññññááéíó  @#$$%%&&$', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'description_project', 22, 56, 'ADD', 'brgm22@pruebaunitaria.com', 'description_project_min_size_KO'), 
    Array('project', 'description_project', 22, 57, 'ADD', 'b@1'.repeat(20), true),

    //code_project
    Array('project', 'code_project', 29, 58, 'ADD', 'abcde', 'code_project_min_size_KO'), //tam<6
    Array('project', 'code_project', 29, 59, 'ADD', 'abcdef', true),  //tam=6
    Array('project', 'code_project', 30, 60, 'ADD', 'a'.repeat(51), 'code_project_max_size_KO'), //tam>60
    Array('project', 'code_project', 30, 61, 'ADD', 'a'.repeat(50), true),  //tam=60
    Array('project', 'code_project', 31, 62, 'ADD', '@@@###%%%&&&&', 'code_project_format_KO'), //caracteres especiales
    Array('project', 'code_project', 31, 63, 'ADD', 'ááééííóóúú', 'code_project_format_KO'), 
    Array('project', 'code_project', 31, 64, 'ADD', '1 1 2 2 3 3 4 4 5 5 6 6', 'code_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'code_project', 31, 65, 'ADD', 'menduiña lemos.', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'code_project', 32, 66, 'ADD', 'bgm12@gmail.com', 'code_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'code_project', 32, 67, 'ADD', 'perez magariños', true),

    //acronym_project
    Array('project', 'acronym_project', 33, 68, 'ADD', 'abcde', 'acronym_project_min_size_KO'),
    Array('project', 'acronym_project', 33, 69, 'ADD', 'abcdef', true), 
    Array('project', 'acronym_project', 34, 70, 'ADD', 'abcabcabcabcabca', 'acronym_project_max_size_KO'), 
    Array('project', 'acronym_project', 34, 71, 'ADD', 'abcabcabcabcabc', true),
    Array('project', 'acronym_project', 35, 72, 'ADD', 'gonzález', 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 35, 73, 'ADD', '@@@###%%%&&&&', 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 35, 74, 'ADD', 'hola que tal', 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 35, 75, 'ADD', '1234567', 'acronym_project_format_KO'),
    Array('project', 'acronym_project', 35, 76, 'ADD', 'menduiña', true), 
    Array('project', 'acronym_project', 36, 77, 'ADD', 'bgm@gmail.com', 'acronym_project_format_KO'), 
    Array('project', 'acronym_project', 36, 78, 'ADD', 'magariños', true),

    //id_sampling_methodology
    Array('project', 'id_sampling_methodology', 37, 79, 'ADD', '', 'id_sampling_methodology_min_size_KO'), 
    Array('project', 'id_sampling_methodology', 37, 80, 'ADD', '1', true), 
    Array('project', 'id_sampling_methodology', 38, 81, 'ADD', '012345678901', 'id_sampling_methodology_max_size_KO'), 
    Array('project', 'id_sampling_methodology', 38, 82, 'ADD', '01234567890', true),  
    Array('project', 'id_sampling_methodology', 39, 86, 'ADD', '112abc', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 39, 87, 'ADD', '01234567890', true),
    Array('project', 'id_sampling_methodology', 40, 88, 'ADD', '167abcde', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 40, 89, 'ADD', '12345678', true),

   /*EDIT */
    //name_project
    Array('project', 'name_project', 41, 90, 'EDIT', 'a'.repeat(14), 'name_project_min_size_KO'), //tam<15
    Array('project', 'name_project', 41, 91, 'EDIT', 'a'.repeat(15), true),  //tam=15
    Array('project', 'name_project', 42, 92, 'EDIT', 'a'.repeat(101), 'name_project_max_size_KO'), //tam>100
    Array('project', 'name_project', 42, 93, 'EDIT', 'a'.repeat(100), true),  //tam=100
    Array('project', 'name_project', 43, 94, 'EDIT', 'ñ ñ ñ ñ ñ ñ ñ ñ', 'name_project_format_KO'), //ñ
    Array('project', 'name_project', 43, 95, 'EDIT', 'á á á é í ó ó ú', 'name_project_format_KO'), //acentos
    Array('project', 'name_project', 43, 96, 'EDIT', '1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9', 'name_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'name_project', 43, 97, 'EDIT', '. . . , , , ; ; ; ; : : :', 'name_project_format_KO'), //no alfabeticos, signos de puntuacion
    Array('project', 'name_project', 43, 98, 'EDIT', '@ @ # # $ $ % % & &', 'name_project_format_KO'), //no alfabeticos, signos especiales
    Array('project', 'name_project', 43, 99, 'EDIT', 'hola buenas tardes', true), //alfabeticos con espacios
    Array('project', 'name_project', 44, 100, 'EDIT', 'gonzalez menduiña 26', 'name_project_format_KO'), //ñ
    Array('project', 'name_project', 44, 101, 'EDIT', 'hola buenas tardes', true),  //ñ

    //start_date_project
    Array('project', 'start_date_project', 45, 102, 'EDIT', '2000/08/12', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 45, 103, 'EDIT', '12-08-2000', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 45, 104, 'EDIT', '12.08.2000', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 45, 105, 'EDIT', '12/08/2000', true),
    Array('project', 'start_date_project', 46, 106, 'EDIT', '30/02/2024', 'start_date_project_invalid_KO'),
    Array('project', 'start_date_project', 46, 107, 'EDIT', '12/13/2024', 'start_date_project_invalid_KO'),
    Array('project', 'start_date_project', 46, 108, 'EDIT', '2/8/2000', true),
    Array('project', 'start_date_project', 47, 109, 'EDIT', '30/02/2024', 'start_date_project_invalid_KO'),
    Array('project', 'start_date_project', 47, 110, 'EDIT', '12/08/2000', true),

    //end_date_project
    Array('project', 'end_date_project', 48, 111, 'EDIT', '2000/08/12', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 48, 112, 'EDIT', '12-08-2000', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 48, 113, 'EDIT', '12.08.2000', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 48, 114, 'EDIT', '12/08/2000', true),
    Array('project', 'end_date_project', 49, 115, 'EDIT', '30/02/2024', 'end_date_project_invalid_KO'),
    Array('project', 'end_date_project', 49, 116, 'EDIT', '12/13/2024', 'end_date_project_invalid_KO'),
    Array('project', 'end_date_project', 49, 117, 'EDIT', '2/8/2000', true),
    Array('project', 'end_date_project', 50, 118, 'EDIT', '30/02/2024', 'end_date_project_invalid_KO'),
    Array('project', 'end_date_project', 50, 119, 'EDIT', '12/08/2000', true),

    //responsable_project
    Array('project', 'responsable_project', 51, 120, 'EDIT', 'abcde', 'responsable_project_min_size_KO'), //tam<6
    Array('project', 'responsable_project', 51, 121, 'EDIT', 'abcdef', true),  //tam=6
    Array('project', 'responsable_project', 52, 122, 'EDIT', 'a'.repeat(61), 'responsable_project_max_size_KO'), //tam>60
    Array('project', 'responsable_project', 52, 123, 'EDIT', 'a'.repeat(60), true),  //tam=60
    Array('project', 'responsable_project', 53, 124, 'EDIT', '@@@###%%%&&&&', 'responsable_project_format_KO'), //caracteres especiales
    Array('project', 'responsable_project', 53, 125, 'EDIT', '......;;;;;,,,,,', 'responsable_project_format_KO'), //signos de puntuacion
    Array('project', 'responsable_project', 53, 126, 'EDIT', '1 1 2 2 3 3 4 4 5 5 6 6', 'responsable_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'responsable_project', 53, 127, 'EDIT', 'gonzález menduiña', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'responsable_project', 54, 128, 'EDIT', 'bgm@gmail.com', 'responsable_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'responsable_project', 54, 129, 'EDIT', 'pérez magariños', true),

    //organization_project
    Array('project', 'organization_project', 55, 130, 'EDIT', 'abcde', 'organization_project_min_size_KO'), //tam<6
    Array('project', 'organization_project', 55, 131, 'EDIT', 'abcdef', true),  //tam=6
    Array('project', 'organization_project', 56, 132, 'EDIT', 'a'.repeat(101), 'organization_project_max_size_KO'), //tam>60
    Array('project', 'organization_project', 56, 133, 'EDIT', 'a'.repeat(100), true),  //tam=60
    Array('project', 'organization_project', 57, 134, 'EDIT', '@@@###%%%&&&&', 'organization_project_format_KO'), //caracteres especiales
    Array('project', 'organization_project', 57, 135, 'EDIT', '......;;;;;,,,,,', 'organization_project_format_KO'), //signos de puntuacion
    Array('project', 'organization_project', 57, 136, 'EDIT', '1 1 2 2 3 3 4 4 5 5 6 6', 'organization_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'organization_project', 57, 137, 'EDIT', 'gonzález menduiña', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'organization_project', 58, 138, 'EDIT', 'bgm@gmail.com', 'organization_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'organization_project', 58, 139, 'EDIT', 'pérez magariños', true),

    //description_project
    Array('project', 'description_project', 59, 140, 'EDIT', 'b'.repeat(29), 'description_project_min_size_KO'), //tam<6
    Array('project', 'description_project', 59, 141, 'EDIT', 'b'.repeat(30), true),  //tam=6
    Array('project', 'description_project', 60, 142, 'EDIT', 'a'.repeat(501), 'description_project_max_size_KO'), //tam>60
    Array('project', 'description_project', 60, 143, 'EDIT', 'a'.repeat(500), true),  //tam=60
    Array('project', 'description_project', 61, 144, 'EDIT', 'abcdefg,.,.,.,.,ñññññááéíó  @#$$%%&&$', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'description_project', 63, 145, 'EDIT', 'brgm22@pruebaunitaria.com', 'description_project_min_size_KO'), 
    Array('project', 'description_project', 63, 146, 'EDIT', 'b@1'.repeat(20), true),

    //code_project
    Array('project', 'code_project', 69, 147, 'EDIT', 'abcde', 'code_project_min_size_KO'), //tam<6
    Array('project', 'code_project', 69, 148, 'EDIT', 'abcdef', true),  //tam=6
    Array('project', 'code_project', 70, 149, 'EDIT', 'a'.repeat(51), 'code_project_max_size_KO'), //tam>60
    Array('project', 'code_project', 70, 150, 'EDIT', 'a'.repeat(50), true),  //tam=60
    Array('project', 'code_project', 71, 151, 'EDIT', '@@@###%%%&&&&', 'code_project_format_KO'), //caracteres especiales
    Array('project', 'code_project', 71, 152, 'EDIT', 'ááééííóóúú', 'code_project_format_KO'), 
    Array('project', 'code_project', 71, 153, 'EDIT', '1 1 2 2 3 3 4 4 5 5 6 6', 'code_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'code_project', 71, 154, 'EDIT', 'menduiña lemos.', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'code_project', 72, 155, 'EDIT', 'bgm12@gmail.com', 'code_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'code_project', 72, 156, 'EDIT', 'perez magariños', true),

    //acronym_project
    Array('project', 'acronym_project', 73, 157, 'EDIT', 'abcde', 'acronym_project_min_size_KO'), //tam<6
    Array('project', 'acronym_project', 73, 158, 'EDIT', 'abcdef', true),  //tam=6
    Array('project', 'acronym_project', 74, 159, 'EDIT', 'abcabcabcabcabca', 'acronym_project_max_size_KO'), //tam>60
    Array('project', 'acronym_project', 74, 160, 'EDIT', 'abcabcabcabcabc', true),  //tam=60
    Array('project', 'acronym_project', 75, 161, 'EDIT', 'gonzález', 'acronym_project_format_KO'),//acentos
    Array('project', 'acronym_project', 75, 162, 'EDIT', '@@@###%%%&&&&', 'acronym_project_format_KO'), //caracteres especiales
    Array('project', 'acronym_project', 75, 163, 'EDIT', 'hola que tal', 'acronym_project_format_KO'), //signos de puntuacion
    Array('project', 'acronym_project', 75, 164, 'EDIT', '1234567', 'acronym_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'acronym_project', 75, 165, 'EDIT', 'menduiña', true), //alfabeticos con ñ y s.p
    Array('project', 'acronym_project', 76, 166, 'EDIT', 'bgm@gmail.com', 'acronym_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'acronym_project', 76, 167, 'EDIT', 'magariños', true),

    //id_sampling_methodology
    Array('project', 'id_sampling_methodology', 77, 168, 'EDIT', '', 'id_sampling_methodology_min_size_KO'), 
    Array('project', 'id_sampling_methodology', 77, 169, 'EDIT', '1', true), 
    Array('project', 'id_sampling_methodology', 78, 170, 'EDIT', '012345678901', 'id_sampling_methodology_max_size_KO'), 
    Array('project', 'id_sampling_methodology', 78, 171, 'EDIT', '01234567890', true), 
    Array('project', 'id_sampling_methodology', 79, 172, 'EDIT', '@@@###%', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 79, 173, 'EDIT', '...;,:', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 79, 174, 'EDIT', '123 123', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 79, 175, 'EDIT', 'abc', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 79, 176, 'EDIT', '01234567890', true),
    Array('project', 'id_sampling_methodology', 80, 177, 'EDIT', '167abcde', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 80, 178, 'EDIT', '12345678', true),

    /*SEARCH */
    //id_project
    Array('project', 'id_project', 81, 179, 'SEARCH', '012345678901', 'id_project_max_size_KO'), 
    Array('project', 'id_project', 81, 180, 'SEARCH', '01234567890', true), 
    Array('project', 'id_project', 82, 181, 'SEARCH', '@@@###%', 'id_project_format_KO'), 
    Array('project', 'id_project', 82, 182, 'SEARCH', '...;,:', 'id_project_format_KO'), 
    Array('project', 'id_project', 82, 183, 'SEARCH', '123 123', 'id_project_format_KO'), 
    Array('project', 'id_project', 82, 184, 'SEARCH', 'abc', 'id_project_format_KO'), 
    Array('project', 'id_project', 82, 185, 'SEARCH', '0367890', true),
    Array('project', 'id_project', 83, 186, 'SEARCH', '17abcde', 'id_project_format_KO'), 
    Array('project', 'id_project', 83, 187, 'SEARCH', '12345678', true),

     //name_project
    Array('project', 'name_project', 84, 188, 'SEARCH', 'a'.repeat(101), 'name_project_max_size_KO'), //tam>100
    Array('project', 'name_project', 84, 189, 'SEARCH', 'a'.repeat(100), true),  //tam=100
    Array('project', 'name_project', 85, 190, 'SEARCH', 'ñ ñ ñ ñ ñ ñ ñ ñ', 'name_project_format_KO'), //ñ
    Array('project', 'name_project', 85, 191, 'SEARCH', 'á á á é í ó ó ú', 'name_project_format_KO'), //acentos
    Array('project', 'name_project', 85, 194, 'SEARCH', '1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9', 'name_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'name_project', 85, 195, 'SEARCH', '. . . , , , ; ; ; ; : : :', 'name_project_format_KO'), //no alfabeticos, signos de puntuacion
    Array('project', 'name_project', 85, 196, 'SEARCH', '@ @ # # $ $ % % & &', 'name_project_format_KO'), //no alfabeticos, signos especiales
    Array('project', 'name_project', 85, 197, 'SEARCH', 'hola buenas tardes', true), //alfabeticos con espacios
    Array('project', 'name_project', 86, 198, 'SEARCH', 'gonzalez menduiña 26', 'name_project_format_KO'), //ñ
    Array('project', 'name_project', 86, 199, 'SEARCH', 'hola buenas tardes', true),  //ñ

    //start_date_project
    Array('project', 'start_date_project', 87, 200, 'SEARCH', '2000/08/12', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 87, 201, 'SEARCH', '12-08-2000', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 87, 202, 'SEARCH', '12.08.2000', 'start_date_project_format_KO'),
    Array('project', 'start_date_project', 87, 203, 'SEARCH', '12/08/2000', true),
    Array('project', 'start_date_project', 88, 204, 'SEARCH', '32/02/2024', 'start_date_project_invalid_KO'),
    Array('project', 'start_date_project', 88, 205, 'SEARCH', '50/13/2024', 'start_date_project_invalid_KO'),
    Array('project', 'start_date_project', 88, 206, 'SEARCH', '02/08/2000', true),
    Array('project', 'start_date_project', 89, 207, 'SEARCH', '32/02/2024', 'start_date_project_invalid_KO'),
    Array('project', 'start_date_project', 89, 208, 'SEARCH', '12/08/2000', true),

    //end_date_project
    Array('project', 'end_date_project', 90, 209, 'SEARCH', '2000/08/12', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 90, 210, 'SEARCH', '12-08-2000', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 90, 211, 'SEARCH', '12.08.2000', 'end_date_project_format_KO'),
    Array('project', 'end_date_project', 90, 212, 'SEARCH', '12/8/2000', true),
    Array('project', 'end_date_project', 91, 213, 'SEARCH', '30/02/2024', 'end_date_project_invalid_KO'),
    Array('project', 'end_date_project', 91, 214, 'SEARCH', '12/13/2024', 'end_date_project_invalid_KO'),
    Array('project', 'end_date_project', 91, 215, 'SEARCH', '2/08/2000', true),
    Array('project', 'end_date_project', 92, 216, 'SEARCH', '30/02/2024', 'end_date_project_invalid_KO'),
    Array('project', 'end_date_project', 92, 217, 'SEARCH', '12/08/2000', true),

    //responsable_project
    Array('project', 'responsable_project', 93, 218, 'SEARCH', 'a'.repeat(61), 'responsable_project_max_size_KO'), //tam>60
    Array('project', 'responsable_project', 93, 219, 'SEARCH', 'a'.repeat(60), true),  //tam=60
    Array('project', 'responsable_project', 94, 220, 'SEARCH', '@@@###%%%&&&&', 'responsable_project_format_KO'), //caracteres especiales
    Array('project', 'responsable_project', 94, 221, 'SEARCH', '......;;;;;,,,,,', 'responsable_project_format_KO'), //signos de puntuacion
    Array('project', 'responsable_project', 94, 222, 'SEARCH', '1 1 2 2 3 3 4 4 5 5 6 6', 'responsable_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'responsable_project', 94, 223, 'SEARCH', 'gonzález menduiña', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'responsable_project', 95, 224, 'SEARCH', 'bgm@gmail.com', 'responsable_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'responsable_project', 95, 225, 'SEARCH', 'pérez magariños', true),

    //organization_project
    Array('project', 'organization_project', 96, 226, 'SEARCH', 'a'.repeat(101), 'organization_project_max_size_KO'), //tam>60
    Array('project', 'organization_project', 96, 227, 'SEARCH', 'a'.repeat(100), true),  //tam=60
    Array('project', 'organization_project', 97, 228, 'SEARCH', '@@@###%%%&&&&', 'organization_project_format_KO'), //caracteres especiales
    Array('project', 'organization_project', 97, 229, 'SEARCH', '......;;;;;,,,,,', 'organization_project_format_KO'), //signos de puntuacion
    Array('project', 'organization_project', 97, 230, 'SEARCH', '1 1 2 2 3 3 4 4 5 5 6 6', 'organization_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'organization_project', 97, 231, 'SEARCH', 'gonzález menduiña', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'organization_project', 98, 232, 'SEARCH', 'bgm@gmail.com', 'organization_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'organization_project', 98, 233, 'SEARCH', 'pérez magariños', true),

    //description_project
    Array('project', 'description_project', 99, 234, 'SEARCH', 'a'.repeat(501), 'description_project_max_size_KO'), //tam>60
    Array('project', 'description_project', 99, 235, 'SEARCH', 'a'.repeat(500), true),  //tam=60
    Array('project', 'description_project', 100, 236, 'SEARCH', 'abcdefg,.,.,.,.,ñññññááéíó  @#$$%%&&$', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'description_project', 101, 237, 'SEARCH', 'b@1'.repeat(20), true),

    //code_project
    Array('project', 'code_project', 105, 238, 'SEARCH', 'a'.repeat(51), 'code_project_max_size_KO'), //tam>60
    Array('project', 'code_project', 105, 239, 'SEARCH', 'a'.repeat(50), true),  //tam=60
    Array('project', 'code_project', 106, 240, 'SEARCH', '@@@###%%%&&&&', 'code_project_format_KO'), //caracteres especiales
    Array('project', 'code_project', 106, 241, 'SEARCH', 'ááééííóóúú', 'code_project_format_KO'), 
    Array('project', 'code_project', 106, 242, 'SEARCH', '1 1 2 2 3 3 4 4 5 5 6 6', 'code_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'code_project', 106, 243, 'SEARCH', 'menduiña lemos.', true), //alfabeticos con espacios ñ y acentos
    Array('project', 'code_project', 107, 244, 'SEARCH', 'bgm12@gmail.com', 'code_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'code_project', 107, 245, 'SEARCH', 'perez magariños', true),

    //acronym_project
    Array('project', 'acronym_project', 108, 246, 'SEARCH', 'abcabcabcabcabca', 'acronym_project_max_size_KO'), //tam>60
    Array('project', 'acronym_project', 108, 247, 'SEARCH', 'abcabcabcabcabc', true),  //tam=60
    Array('project', 'acronym_project', 109, 248, 'SEARCH', 'gonzález', 'acronym_project_format_KO'),//acentos
    Array('project', 'acronym_project', 109, 249, 'SEARCH', '@@@###%%%&&&&', 'acronym_project_format_KO'), //caracteres especiales
    Array('project', 'acronym_project', 109, 250, 'SEARCH', 'hola que tal', 'acronym_project_format_KO'), //signos de puntuacion
    Array('project', 'acronym_project', 109, 251, 'SEARCH', '1234567', 'acronym_project_format_KO'), //no alfabeticos, digitos
    Array('project', 'acronym_project', 109, 252, 'SEARCH', 'menduiña', true), //alfabeticos con ñ y s.p
    Array('project', 'acronym_project', 110, 253, 'SEARCH', 'bgm@gmail.com', 'acronym_project_format_KO'), //caracteres especiales y signos de puntuacion
    Array('project', 'acronym_project', 110, 254, 'SEARCH', 'magariños', true),

    //id_sampling_methodology
    Array('project', 'id_sampling_methodology', 111, 255, 'SEARCH', '012345678901', 'id_sampling_methodology_max_size_KO'), 
    Array('project', 'id_sampling_methodology', 111, 256, 'SEARCH', '01234567890', true), 
    Array('project', 'id_sampling_methodology', 112, 257, 'SEARCH', '@@@###%', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 112, 258, 'SEARCH', '...;,:', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 112, 259, 'SEARCH', '123 123', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 112, 260, 'SEARCH', 'abc', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 112, 261, 'SEARCH', '01234567890', true),
    Array('project', 'id_sampling_methodology', 113, 262, 'SEARCH', '123abcd', 'id_sampling_methodology_format_KO'), 
    Array('project', 'id_sampling_methodology', 113, 263, 'SEARCH', '12345678', true),

);
let project_tests_files = Array(
     /*ADD */
    //nuevo_file_project
    Array('project', 'nuevo_file_project', 23, 264, 'ADD', 'tamaño nombre < 7', Array('aa.pdf',Array('application/pdf'),10000), 'nuevo_file_project_name_min_size_KO'),
    Array('project', 'nuevo_file_project', 23, 265, 'ADD', 'tamaño nombre < 7', Array('aaa.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 24, 266, 'ADD', 'tamaño nombre > 100', Array('a'.repeat(101),Array('application/pdf'),10000), 'nuevo_file_project_name_max_size_KO'),
    Array('project', 'nuevo_file_project', 24, 267, 'ADD', 'tamaño nombre > 100', Array('a'.repeat(96) + '.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 25, 268, 'ADD', 'alfabeticos o con espacios o ñ o acentos', Array('GonzálezMenduiña.pdf',Array('application/pdf'),10000), 'nuevo_file_project_name_format_KO'),
    Array('project', 'nuevo_file_project', 25, 269, 'ADD', 'alfabeticos o con espacios o ñ o acentos', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    //Array('project', 'nuevo_file_project', 16, 108, 'ADD', 'el fichero es correcto', Array(), 'nuevo_file_project_empty_KO'),
    //Array('project', 'nuevo_file_project', 16, 109, 'ADD', 'el fichero es correcto', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 26, 270, 'ADD', 'tamaño fichero > 2000000 bytes', Array('BoasTardes.pdf',Array('application/pdf'),20000000), 'nuevo_file_project_file_max_size_KO'),
    Array('project', 'nuevo_file_project', 26, 271, 'ADD', 'tamaño fichero > 2000000 bytes', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 27, 272, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.jpeg',Array('image/jpeg'),10000), 'nuevo_file_project_file_type_KO'),
    Array('project', 'nuevo_file_project', 27, 273, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 27, 274, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.doc',Array('application/msword'),10000), true),
    Array('project', 'nuevo_file_project', 27, 275, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.docx',Array('application/vnd.openxmlformats-officedocument.wordprocessingml.document'),10000), true),
    //Array('project', 'nuevo_file_project', 19, 116, 'ADD', 'Nombre, tipo y tamaño correcto.', Array(), 'nuevo_file_project_empty_KO'),
    Array('project', 'nuevo_file_project', 28, 276, 'ADD', 'Nombre, tipo y tamaño correcto.', Array('BoasTardes.pdf', Array('application/pdf'), 10000), true),
    
    /*EDIT */
    //nuevo_file_project
    Array('project', 'nuevo_file_project', 63, 277, 'EDIT', 'tamaño nombre < 7', Array('Boasta',Array('application/pdf'),10000), 'nuevo_file_project_name_min_size_KO'),
    Array('project', 'nuevo_file_project', 63, 278, 'EDIT', 'tamaño nombre < 7', Array('Bos.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 64, 279, 'EDIT', 'tamaño nombre > 100', Array('a'.repeat(101),Array('application/pdf'),10000), 'nuevo_file_project_name_max_size_KO'),
    Array('project', 'nuevo_file_project', 64, 280, 'EDIT', 'tamaño nombre > 100', Array('a'.repeat(96) + '.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 65, 281, 'EDIT', 'alfabeticos o con espacios o ñ o acentos', Array('GonzálezMenduiña.pdf',Array('application/pdf'),10000), 'nuevo_file_project_name_format_KO'),
    Array('project', 'nuevo_file_project', 65, 282, 'EDIT', 'alfabeticos o con espacios o ñ o acentos', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    //Array('project', 'nuevo_file_project', 35, 124, 'EDIT', 'el fichero es correcto', Array(), 'nuevo_file_project_empty_KO'),
    //Array('project', 'nuevo_file_project', 35, 125, 'EDIT', 'el fichero es correcto', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 66, 283, 'EDIT', 'tamaño fichero > 2000000 bytes', Array('BoasTardes.pdf',Array('application/pdf'),20000000), 'nuevo_file_project_file_max_size_KO'),
    Array('project', 'nuevo_file_project', 66, 284, 'EDIT', 'tamaño fichero > 2000000 bytes', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 67, 285, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.jpeg',Array('image/jpeg'),10000), 'nuevo_file_project_file_type_KO'),
    Array('project', 'nuevo_file_project', 67, 286, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('project', 'nuevo_file_project', 67, 287, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.doc',Array('application/msword'),10000), true),
    Array('project', 'nuevo_file_project', 67, 289, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.docx',Array('application/vnd.openxmlformats-officedocument.wordprocessingml.document'),10000), true),
    //Array('project', 'nuevo_file_project', 38, 132, 'EDIT', 'Nombre, tipo y tamaño correcto.', Array(), 'nuevo_file_project_empty_KO'),
    Array('project', 'nuevo_file_project', 68, 290, 'EDIT', 'Nombre, tipo y tamaño correcto.', Array('BoasTardes.pdf', Array('application/pdf'), 10000), true),

    /*SEARCH */
    //file_project
    Array('project', 'file_project', 102, 291, 'SEARCH', 'tamaño nombre > 100', Array('a'.repeat(101),Array('application/pdf'),10000), 'file_project_name_max_size_KO'),
    Array('project', 'file_project', 102, 292, 'SEARCH', 'tamaño nombre > 100', Array('a'.repeat(100),Array('application/pdf'),10000), true),
    Array('project', 'file_project', 103, 293, 'SEARCH', 'alfabeticos o con espacios o ñ o acentos', Array('GonzálezMenduiña.pdf',Array('application/pdf'),10000), 'file_project_name_format_KO'),
    Array('project', 'file_project', 103, 294, 'SEARCH', 'alfabeticos o con espacios o ñ o acentos', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    // Array('project', 'file_project', 53, 138, 'SEARCH', 'el fichero es correcto', Array(), 'file_project_empty_KO'),
    Array('project', 'file_project', 104, 295, 'SEARCH', 'el fichero es correcto', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),

);



let characteristic_def_tests = Array(
    /** TABLA -> characteristic */
   
    //ADD
    //name_characteristic
    Array('characteristic', 'name_characteristic', 1, 'tamaño < 8', 'ADD','name_characteristic_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que tener un tamaño entre 8 y 100 caracteres con espacios.'
    ),
    Array('characteristic', 'name_characteristic', 2, 'tamaño > 100', 'ADD', 'name_characteristic_max_size_KO', 
        'Excede el tamaño máximo del campo. Tiene que tener un tamaño entre 8 y 100 caracteres con espacios.'
    ),
    Array('characteristic', 'name_characteristic', 3, 'no alfabéticos o con acentos o ñ', 'ADD', 'name_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('characteristic', 'name_characteristic', 4, 'entre 8 y 100 caracteres alfabéticos con espacios, sin acentos ni ñ', 'ADD', true, 
        'Exito.'
    ),
    // description_characteristic
    Array('characteristic', 'description_characteristic', 5, 'tamaño < 80', 'ADD', 'description_characteristic_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que ser entre 80 y 5000 caracteres con espacios.'
    ),
    Array('characteristic', 'description_characteristic', 6, 'tamaño > 5000', 'ADD','description_characteristic_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 80 y 5000 caracteres con espacios.'
    ),
    Array('characteristic', 'description_characteristic', 7, 'no alfabéticos o con acentos o ñ', 'ADD', 'description_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('characteristic', 'description_characteristic', 8, 'entre 80 y 5000 caracteres alfabéticos con espacios, sin acentos ni ñ', 
        'ADD', true, 'Exito.'
    ),
    // bibref_characteristic
    Array('characteristic', 'bibref_characteristic', 9, 'tamaño < 16', 'ADD', 'bibref_characteristic_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que ser entre 16 y 200 caracteres con espacios.'
    ),
    Array('characteristic', 'bibref_characteristic', 10, 'tamaño > 200', 'ADD', 'bibref_characteristic_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 16 y 200 caracteres con espacios.'
    ),
    Array('characteristic', 'bibref_characteristic', 11, 'no alfabéticos o signos de puntuación', 'ADD', 'bibref_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, acentos, ñ y signos de puntuación.'
    ),
    Array('characteristic', 'bibref_characteristic', 12, 'entre 16 y 200 caracteres alfabéticos con espacios, acentos, ñ y signos de puntuación',
         'ADD', true, 'Exito.'
    ),

    //nuevo_file_characteristic
    Array('characteristic','nuevo_file_characteristic',13, 'tamaño nombre < 7','ADD',  'nuevo_file_characteristic_name_min_size_KO',
        'Tamaño del nombre del fichero insuficiente. Tiene que ser un tamaño de entre 7 y 100 caracteres sin espacios.'
    ),  
    Array('characteristic','nuevo_file_characteristic',14, 'tamaño nombre > 100','ADD', 'nuevo_file_characteristic_name_max_size_KO',
        'Excede el tamaño maximo del nombre del fichero. Tiene que ser un tamaño de entre 7 y 10 caracteres sin espacios.'
    ),
    Array('characteristic','nuevo_file_characteristic',15, 'no alfabeticos o con espacios o ñ o acentos','ADD', 'nuevo_file_characteristic_name_format_KO',
    'Los caracteres introducidos como nombre de fichero son incorrectos. Tienen que ser alfabeticos con acentos, sin espacios ni ñ.'
    ),
    Array('characteristic','nuevo_file_characteristic',16, 'tamaño file > 2000000 bytes','ADD',  'nuevo_file_characteristic_max_size_file_KO',
    'Excede el tamaño maximo de fichero permitido. El fichero tiene que tener un tamaño menor a 2000000 bytes.'
    ),
    Array('characteristic','nuevo_file_characteristic',17, 'tipo de fichero pdf, doc o docx','ADD', 'nuevo_file_characteristic_file_type_KO',
    'El tipo del fichero es incorrecto. Tiene que ser de formato pdf, doc y docx.'
    ),

    Array('characteristic','nuevo_file_characteristic',18, 'entre 7 y 100 caracteres alfabeticos con acentos, sin espacios ni ñ.', 'ADD',
    true, 'Exito.'
    ),
    //EDIT
    // name_characteristic
    Array('characteristic', 'name_characteristic', 19, 'tamaño < 8', 'EDIT','name_characteristic_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que tener un tamaño entre 8 y 100 caracteres con espacios.'
    ),
    Array('characteristic', 'name_characteristic', 20, 'tamaño > 100', 'EDIT', 'name_characteristic_max_size_KO', 
        'Excede el tamaño máximo del campo. Tiene que tener un tamaño entre 8 y 100 caracteres con espacios.'
    ),
    Array('characteristic', 'name_characteristic', 21, 'no alfabéticos o con acentos o ñ', 'EDIT','name_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('characteristic', 'name_characteristic', 22, 'entre 8 y 100 caracteres alfabéticos con espacios, sin acentos ni ñ', 'EDIT', true, 
        'Exito.'
    ),

    // description_characteristic
    Array('characteristic', 'description_characteristic', 23, 'tamaño < 80', 'EDIT','description_characteristic_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que ser entre 80 y 5000 caracteres con espacios.'
    ),
    Array('characteristic', 'description_characteristic', 24, 'tamaño > 5000', 'EDIT', 'description_characteristic_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 80 y 5000 caracteres con espacios.'
    ),
    Array('characteristic', 'description_characteristic', 25, 'no alfabéticos o con acentos o ñ', 'EDIT', 'description_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('characteristic', 'description_characteristic', 26, 'entre 80 y 5000 caracteres alfabéticos con espacios, sin acentos ni ñ', 'EDIT', true, 
        'Exito.'
    ),

    // bibref_characteristic
    Array('characteristic', 'bibref_characteristic', 27, 'tamaño < 16', 'EDIT','bibref_characteristic_min_size_KO', 
        'Tamaño del campo insuficiente. Tiene que ser entre 16 y 200 caracteres con espacios.'
    ),
    Array('characteristic', 'bibref_characteristic', 28, 'tamaño > 200', 'EDIT', 'bibref_characteristic_max_size_KO', 
        'Excede el tamaño del campo. Tiene que ser entre 16 y 200 caracteres con espacios.'
    ),
    Array('characteristic', 'bibref_characteristic', 29, 'no alfabéticos o signos de puntuación', 'EDIT','bibref_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, acentos, ñ y signos de puntuación.'
    ),
    Array('characteristic', 'bibref_characteristic', 30, 'entre 16 y 200 caracteres alfabéticos con espacios, acentos, ñ y signos de puntuación', 'EDIT', true, 
        'Exito.'
    ),
    //nuevo_file_characteristic
    Array('characteristic','nuevo_file_characteristic',31, 'tamaño nombre < 7','EDIT',  'nuevo_file_characteristic_name_min_size_KO',
        'Tamaño del nombre del fichero insuficiente. Tiene que ser un tamaño de entre 7 y 100 caracteres sin espacios.'
    ),
    Array('characteristic','nuevo_file_characteristic',32, 'tamaño nombre > 100','EDIT',  'nuevo_file_characteristic_name_max_size_KO',
    'Excede el tamaño maximo del nombre del fichero. Tiene que ser un tamaño de entre 7 y 10 caracteres sin espacios.'
    ),
    Array('characteristic','nuevo_file_characteristic',33, 'no alfabeticos o con espacios o ñ o acentos','EDIT', 'nuevo_file_characteristic_name_format_KO',
    'Los caracteres introducidos como nombre de fichero son incorrectos. Tienen que ser alfabeticos con acentos, sin espacios ni ñ.'
    ),
    Array('characteristic', 'nuevo_file_characteristic', 34, 'Nombre archivo correcto tanto tamaño como formato', 'ADD', true, 'El nombre del archivo es correcto.'),
    Array('characteristic','nuevo_file_characteristic',35, 'tamaño file > 2000000 bytes','EDIT',  'nuevo_file_characteristic_max_size_file_KO',
    'Excede el tamaño maximo de fichero permitido. El fichero tiene que tener un tamaño menor a 2000000 bytes.'
    ),
    Array('characteristic','nuevo_file_characteristic',36, 'tipo de fichero pdf, doc o docx','EDIT',  'nuevo_file_characteristic_file_type_KO',
    'El tipo del fichero es incorrecto. Tiene que ser de formato pdf, doc y docx.'
    ),
    Array('characteristic','nuevo_file_characteristic',37, 'entre 7 y 100 caracteres alfabeticos con acentos, sin espacios ni ñ.', 'EDIT', true, 'Exito.'
    ),
    //SEARCH
    // id_characteristic
    Array('characteristic', 'id_characteristic', 38, 'tamaño > 11', 'SEARCH',  
        'id_characteristic_max_size_KO', 
        'Excede el tamaño del campo. Tiene que tener como máximo 11 dígitos.'
    ),
    Array('characteristic', 'id_characteristic', 39, 'no dígitos o con espacios', 'SEARCH',  
        'id_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser solo dígitos sin espacios.'
    ),
    Array('characteristic', 'id_characteristic', 40, 'menos de 11 dígitos', 'SEARCH', true, 
        'Éxito.'
    ),
    // name_characteristic
    Array('characteristic', 'name_characteristic', 41, 'tamaño > 100', 'SEARCH',  
        'name_characteristic_max_size_KO', 
        'Excede el tamaño máximo del campo. Tiene que tener como máximo 100 caracteres.'
    ),
    Array('characteristic', 'name_characteristic', 42, 'no alfabéticos o con acentos o ñ', 'SEARCH',  
        'name_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('characteristic', 'name_characteristic', 43, '100 o menos caracteres alfabéticos con espacios, sin acentos ni ñ', 'SEARCH', true, 
        'Éxito.'
    ),

    // description_characteristic
    Array('characteristic', 'description_characteristic', 44, 'tamaño > 5000', 'SEARCH',  
        'description_characteristic_max_size_KO', 
        'Excede el tamaño del campo. Tiene que tener como máximo 5000 caracteres.'
    ),
    Array('characteristic', 'description_characteristic', 45, 'no alfabéticos o con acentos o ñ', 'SEARCH',  
        'description_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, sin acentos ni ñ.'
    ),
    Array('characteristic', 'description_characteristic', 46, '5000 o menos caracteres alfabéticos con espacios, sin acentos ni ñ', 'SEARCH', true, 
        'Éxito.'
    ),

    // bibref_characteristic
    Array('characteristic', 'bibref_characteristic', 47, 'tamaño > 200', 'SEARCH',  
        'bibref_characteristic_max_size_KO', 
        'Excede el tamaño del campo. El máximo son 200 caracteres.'
    ),
    Array('characteristic', 'bibref_characteristic', 48, 'no alfabéticos o signos de puntuación', 'SEARCH',  
        'bibref_characteristic_format_KO', 
        'Los caracteres introducidos son incorrectos. Deben ser alfabéticos con espacios, acentos, ñ y signos de puntuación.'
    ),
    Array('characteristic', 'bibref_characteristic', 49, '200 o menos caracteres alfabéticos con espacios, acentos, ñ y signos de puntuación', 'SEARCH', true, 
        'Éxito.'
    ),

    //file_characteristic
    Array('characteristic','file_characteristic',50, 'tamaño nombre > 100','SEARCH',  'file_characteristic_name_max_size_KO',
    'Excede el tamaño maximo del nombre del fichero. Tiene como máximo 10 caracteres.'
    ),
    Array('characteristic','file_characteristic',51, 'no alfabeticos o con espacios o ñ o acentos','SEARCH',  'file_characteristic_name_format_KO',
    'Los caracteres introducidos como nombre de fichero son incorrectos. Tienen que ser alfabeticos con acentos, sin espacios ni ñ.'
    ),
    Array('characteristic','file_characteristic',52, '100 o menos caracteres alfabeticos con acentos, sin espacios ni ñ.', 'SEARCH',
    true, 'Exito.'
    ),
 
);


let characteristic_tests = Array(
    // ADD
    //name_characteristic
    Array('characteristic', 'name_characteristic', 1, 1, 'ADD', 'abcdefg', 'name_characteristic_min_size_KO'), // tam<8
    Array('characteristic', 'name_characteristic', 1, 2, 'ADD', 'abcdefgh', true), // tam=8
    Array('characteristic', 'name_characteristic', 2, 3, 'ADD', 'a'.repeat(101), 'name_characteristic_max_size_KO'), // tam>100
    Array('characteristic', 'name_characteristic', 2, 4, 'ADD', 'a'.repeat(100), true), // tam=100
    Array('characteristic', 'name_characteristic', 3, 5, 'ADD', 'gonzález', 'name_characteristic_format_KO'), // acentos
    Array('characteristic', 'name_characteristic', 3, 6, 'ADD', 'menduiña', 'name_characteristic_format_KO'), // ñ
    Array('characteristic', 'name_characteristic', 3, 7, 'ADD', '123456789', 'name_characteristic_format_KO'), // no alfabeticos, digitos
    Array('characteristic', 'name_characteristic', 3, 8, 'ADD', '....,,,;;;:::', 'name_characteristic_format_KO'), // no alfabeticos, signos de puntuacion
    Array('characteristic', 'name_characteristic', 3, 9, 'ADD', '@@##%%&&!!', 'name_characteristic_format_KO'), // no alfabeticos, signos especiales
    Array('characteristic', 'name_characteristic', 3, 10, 'ADD', 'brais gonzalez', true), // OK
    Array('characteristic', 'name_characteristic', 4, 11, 'ADD', 'Pérez Fernández', 'name_characteristic_format_KO'), // <8 y acento
    Array('characteristic', 'name_characteristic', 4, 12, 'ADD', 'alejandro manuel', true), // OK

    

    // description_characteristic
    Array('characteristic', 'description_characteristic', 5, 13, 'ADD', 'b'.repeat(79), 'description_characteristic_min_size_KO'), // tam<80
    Array('characteristic', 'description_characteristic', 5, 14, 'ADD', 'b'.repeat(80), true), // tam=80
    Array('characteristic', 'description_characteristic', 6, 15, 'ADD', 'b'.repeat(5001), 'description_characteristic_max_size_KO'), // tam>5000
    Array('characteristic', 'description_characteristic', 6, 16, 'ADD', 'b'.repeat(5000), true), // tam=5000
    Array('characteristic', 'description_characteristic', 7, 17, 'ADD', 'á'.repeat(80), 'description_characteristic_format_KO'), // acentos
    Array('characteristic', 'description_characteristic', 7, 18, 'ADD', 'ñ'.repeat(80), 'description_characteristic_format_KO'), // ñ
    Array('characteristic', 'description_characteristic', 7, 19, 'ADD', '3'.repeat(80), 'description_characteristic_format_KO'), // no alfabeticos, digitos
    Array('characteristic', 'description_characteristic', 7, 20, 'ADD', ';'.repeat(80), 'description_characteristic_format_KO'), // no alfabeticos, signos de puntuacion
    Array('characteristic', 'description_characteristic', 7, 21, 'ADD', '#'.repeat(80), 'description_characteristic_format_KO'), // no alfabeticos, signos especiales
    Array('characteristic', 'description_characteristic', 7, 22, 'ADD', 'b b '.repeat(20), true), // espacios sin acentos ni ñ
    Array('characteristic', 'description_characteristic', 8, 23, 'ADD', 'á'.repeat(82), 'description_characteristic_format_KO'), // acentos, tam <80
    Array('characteristic', 'description_characteristic', 8, 24, 'ADD', 'a b '.repeat(100), true), // OK

    // bibref_characteristic
    Array('characteristic', 'bibref_characteristic', 9, 25, 'ADD', 'bbbbb', 'bibref_characteristic_min_size_KO'), // tam<16
    Array('characteristic', 'bibref_characteristic', 9, 26, 'ADD', 'aaaaaaaaaaaaaaaa', true), // tam=16
    Array('characteristic', 'bibref_characteristic', 10, 27, 'ADD', 'b'.repeat(201), 'bibref_characteristic_max_size_KO'), // tam>200
    Array('characteristic', 'bibref_characteristic', 10, 28, 'ADD', 'b'.repeat(200), true), // tam=200
    Array('characteristic', 'bibref_characteristic', 11, 29, 'ADD', '123456711111111111111', 'bibref_characteristic_format_KO'), // no alfabético, digitos
    Array('characteristic', 'bibref_characteristic', 11, 30, 'ADD', '@##@#@#@#11111111111', 'bibref_characteristic_format_KO'), // no alfabeticos, caracteres especiales
    Array('characteristic', 'bibref_characteristic', 11, 31, 'ADD', 'Gonzalez Menduiña', true), // format correcto
    Array('characteristic', 'bibref_characteristic', 12, 32, 'ADD', 'brgm22@pruebaunitaria.com', 'bibref_characteristic_format_KO'), // digitos y caracteres especiales
    Array('characteristic', 'bibref_characteristic', 12, 33, 'ADD', 'Gonzalez Menduiña', true), // OK

    /*EDIT */
    //name_characteristic
    Array('characteristic', 'name_characteristic', 19, 34, 'EDIT', 'abcdefg', 'name_characteristic_min_size_KO'), // tam<8
    Array('characteristic', 'name_characteristic', 19, 35, 'EDIT', 'abcdefgh', true), // tam=8
    Array('characteristic', 'name_characteristic', 20, 36, 'EDIT', 'a'.repeat(101), 'name_characteristic_max_size_KO'), // tam>100
    Array('characteristic', 'name_characteristic', 20, 37, 'EDIT', 'a'.repeat(100), true), // tam=100
    Array('characteristic', 'name_characteristic', 21, 38, 'EDIT', 'gonzález', 'name_characteristic_format_KO'), // acentos
    Array('characteristic', 'name_characteristic',21, 39, 'EDIT', 'menduiña', 'name_characteristic_format_KO'), // ñ
    Array('characteristic', 'name_characteristic',21, 40, 'EDIT', '123456789', 'name_characteristic_format_KO'), // no alfabeticos, digitos
    Array('characteristic', 'name_characteristic',21, 41, 'EDIT', '....,,,;;;:::', 'name_characteristic_format_KO'), // no alfabeticos, signos de puntuacion
    Array('characteristic', 'name_characteristic',21, 42, 'EDIT', '@@##%%&&!!', 'name_characteristic_format_KO'), // no alfabeticos, signos especiales
    Array('characteristic', 'name_characteristic',21, 43, 'EDIT', 'brais gonzalez', true), // OK
    Array('characteristic', 'name_characteristic',22, 44, 'EDIT', 'Pérez Fernández', 'name_characteristic_format_KO'), // <8 y acento
    Array('characteristic', 'name_characteristic', 22, 45, 'EDIT', 'alejandro manuel', true), // OK

    // description_characteristic
    Array('characteristic', 'description_characteristic', 23, 46, 'EDIT', 'b'.repeat(79), 'description_characteristic_min_size_KO'), // tam<80
    Array('characteristic', 'description_characteristic', 23, 47, 'EDIT', 'b'.repeat(80), true), // tam=80
    Array('characteristic', 'description_characteristic', 24, 48, 'EDIT', 'b'.repeat(5001), 'description_characteristic_max_size_KO'), // tam>5000
    Array('characteristic', 'description_characteristic', 24, 49, 'EDIT', 'b'.repeat(5000), true), // tam=5000
    Array('characteristic', 'description_characteristic', 25, 50, 'EDIT', 'á'.repeat(80), 'description_characteristic_format_KO'), // acentos
    Array('characteristic', 'description_characteristic', 25, 51, 'EDIT', 'ñ'.repeat(80), 'description_characteristic_format_KO'), // ñ
    Array('characteristic', 'description_characteristic', 25, 52, 'EDIT', '3'.repeat(80), 'description_characteristic_format_KO'), // no alfabeticos, digitos
    Array('characteristic', 'description_characteristic', 25, 53, 'EDIT', ';'.repeat(80), 'description_characteristic_format_KO'), // no alfabeticos, signos de puntuacion
    Array('characteristic', 'description_characteristic', 25, 54, 'EDIT', '#'.repeat(80), 'description_characteristic_format_KO'), // no alfabeticos, signos especiales
    Array('characteristic', 'description_characteristic', 25, 55, 'EDIT', 'b b '.repeat(20), true), // espacios sin acentos ni ñ
    Array('characteristic', 'description_characteristic', 26, 56, 'EDIT', 'á'.repeat(89), 'description_characteristic_format_KO'), // acentos, tam <80
    Array('characteristic', 'description_characteristic', 26, 57, 'EDIT', 'a b '.repeat(100), true), // OK

    // bibref_characteristic
    Array('characteristic', 'bibref_characteristic', 27, 58, 'EDIT', 'bbbbb', 'bibref_characteristic_min_size_KO'), // tam<16
    Array('characteristic', 'bibref_characteristic', 27, 59, 'EDIT', 'aaaaaaaaaaaaaaaa', true), // tam=16
    Array('characteristic', 'bibref_characteristic', 28, 60, 'EDIT', 'b'.repeat(201), 'bibref_characteristic_max_size_KO'), // tam>200
    Array('characteristic', 'bibref_characteristic', 28, 61, 'EDIT', 'b'.repeat(200), true), // tam=200
    Array('characteristic', 'bibref_characteristic', 29, 62, 'EDIT', '123451111111111111167', 'bibref_characteristic_format_KO'), // no alfabético, digitos
    Array('characteristic', 'bibref_characteristic', 29, 63, 'EDIT', '@##@#@#@#1111111111111111', 'bibref_characteristic_format_KO'), // no alfabeticos, caracteres especiales
    Array('characteristic', 'bibref_characteristic', 29, 64, 'EDIT', 'Gonzalez Menduiña', true), // format correcto
    Array('characteristic', 'bibref_characteristic', 30, 65, 'EDIT', 'brgm22@pruebaunitaria.com', 'bibref_characteristic_format_KO'), // digitos y caracteres especiales
    Array('characteristic', 'bibref_characteristic', 30, 66, 'EDIT', 'Gonzalez Menduiña', true), // OK

    /*SEARCH */
    //id_characteristic V
    Array('characteristic','id_characteristic',38,67,'SEARCH','333333333333','id_characteristic_max_size_KO'),//tam > 11
    Array('characteristic','id_characteristic',38,68,'SEARCH','01234567890',true), //tam = 11
    Array('characteristic','id_characteristic',39,69,'SEARCH','brg90','id_characteristic_format_KO'),//no digito, alfabeticos
    Array('characteristic','id_characteristic',39,70,'SEARCH','..,,-','id_characteristic_format_KO'),//no digito, signos de puntuacion
    Array('characteristic','id_characteristic',39,71,'SEARCH','@@##$$','id_characteristic_format_KO'),//no digito, signos especiales
    Array('characteristic','id_characteristic',39,72,'SEARCH','90 19','id_characteristic_format_KO'),//espacio
    Array('characteristic','id_characteristic',39,73,'SEARCH','1234',true),//digitos
    Array('characteristic','id_characteristic',40,74,'SEARCH','190 9br ','id_characteristic_format_KO'),//
    Array('characteristic','id_characteristic',40,75,'SEARCH','123456789',true),//

    Array('characteristic', 'name_characteristic', 41, 76, 'SEARCH', 'a'.repeat(101), 'name_characteristic_max_size_KO'), // tam>100
    Array('characteristic', 'name_characteristic', 41, 77, 'SEARCH', 'a'.repeat(100), true), // tam=100
    Array('characteristic', 'name_characteristic', 42, 78, 'SEARCH', 'gonzález', 'name_characteristic_format_KO'), // acentos
    Array('characteristic', 'name_characteristic', 42, 79, 'SEARCH', 'menduiña', 'name_characteristic_format_KO'), // ñ
    Array('characteristic', 'name_characteristic', 42, 80, 'SEARCH', '123456789', 'name_characteristic_format_KO'), // no alfabeticos, digitos
    Array('characteristic', 'name_characteristic', 42, 81, 'SEARCH', '....,,,;;;:::', 'name_characteristic_format_KO'), // no alfabeticos, signos de puntuacion
    Array('characteristic', 'name_characteristic', 42, 82, 'SEARCH', '@@##%%&&!!', 'name_characteristic_format_KO'), // no alfabeticos, signos especiales
    Array('characteristic', 'name_characteristic', 42, 83, 'SEARCH', 'brais gonzalez', true), // OK
    Array('characteristic', 'name_characteristic', 43, 84, 'SEARCH', 'Pérez', 'name_characteristic_format_KO'), // <8 y acento
    Array('characteristic', 'name_characteristic', 43, 85, 'SEARCH', 'alejandro manuel', true), // OK

    // description_characteristic
    Array('characteristic', 'description_characteristic', 44, 86, 'SEARCH', 'b'.repeat(5001), 'description_characteristic_max_size_KO'), // tam>5000
    Array('characteristic', 'description_characteristic', 44, 87, 'SEARCH', 'b'.repeat(5000), true), // tam=5000
    Array('characteristic', 'description_characteristic', 45, 88, 'SEARCH', 'á'.repeat(80), 'description_characteristic_format_KO'), // acentos
    Array('characteristic', 'description_characteristic', 45, 89, 'SEARCH', 'ñ'.repeat(80), 'description_characteristic_format_KO'), // ñ
    Array('characteristic', 'description_characteristic', 45, 90, 'SEARCH', '3'.repeat(80), 'description_characteristic_format_KO'), // no alfabeticos, digitos
    Array('characteristic', 'description_characteristic', 45, 91, 'SEARCH', ';'.repeat(80), 'description_characteristic_format_KO'), // no alfabeticos, signos de puntuacion
    Array('characteristic', 'description_characteristic', 45, 92, 'SEARCH', '#'.repeat(80), 'description_characteristic_format_KO'), // no alfabeticos, signos especiales
    Array('characteristic', 'description_characteristic', 45, 93, 'SEARCH', 'b b '.repeat(20), true), // espacios sin acentos ni ñ
    Array('characteristic', 'description_characteristic', 46, 94, 'SEARCH', 'á'.repeat(79), 'description_characteristic_format_KO'), // acentos, tam <80
    Array('characteristic', 'description_characteristic', 46, 95, 'SEARCH', 'a b '.repeat(100), true), // OK

    // bibref_characteristic
    Array('characteristic', 'bibref_characteristic', 47, 96, 'SEARCH', 'b'.repeat(201), 'bibref_characteristic_max_size_KO'), // tam>200
    Array('characteristic', 'bibref_characteristic', 47, 97, 'SEARCH', 'b'.repeat(200), true), // tam=200
    Array('characteristic', 'bibref_characteristic', 48, 98, 'SEARCH', '1234567', 'bibref_characteristic_format_KO'), // no alfabético, digitos
    Array('characteristic', 'bibref_characteristic', 48, 99, 'SEARCH', '@##@#@#@#', 'bibref_characteristic_format_KO'), // no alfabeticos, caracteres especiales
    Array('characteristic', 'bibref_characteristic', 48, 100, 'SEARCH', 'Gonzalez Menduiña', true), // format correcto
    Array('characteristic', 'bibref_characteristic', 49, 101, 'SEARCH', 'brgm22@pruebaunitaria.com', 'bibref_characteristic_format_KO'), // digitos y caracteres especiales
    Array('characteristic', 'bibref_characteristic', 49, 102, 'SEARCH', 'Gonzalez Menduiña', true), // OK

);

let characteristic_tests_files = Array(
    /*ADD */
    //nuevo_file_characteristic
    //Array('characteristic', 'nuevo_file_characteristic', 16, 103, 'ADD', 'el fichero es correcto', Array(), 'nuevo_file_characteristic_empty_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 13, 103, 'ADD', 'tamaño nombre < 7', Array('aa.pdf',Array('application/pdf'),10000), 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 13, 104, 'ADD', 'tamaño nombre < 7', Array('aaa.pdf',Array('application/pdf'),10000), true),
    Array('characteristic', 'nuevo_file_characteristic', 14, 105, 'ADD', 'tamaño nombre > 100', Array('a'.repeat(101),Array('application/pdf'),10000), 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 14, 106, 'ADD', 'tamaño nombre > 100', Array('a'.repeat(100),Array('application/pdf'),10000), true),
    Array('characteristic', 'nuevo_file_characteristic', 15, 107, 'ADD', 'alfabeticos o con espacios o ñ o acentos', Array('GonzálezMenduiña.pdf',Array('application/pdf'),10000), 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 15, 108, 'ADD', 'alfabeticos o con espacios o ñ o acentos', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('characteristic', 'nuevo_file_characteristic', 16, 119, 'ADD', 'tamaño menor al máximo', Array('BoasTardes.pdf',Array('application/pdf'),20000000), 'nuevo_file_characteristic_max_size_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 16, 120, 'ADD', 'tamaño menor al máximo', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('characteristic', 'nuevo_file_characteristic', 17, 121, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.jpeg',Array('image/jpeg'),10000), 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 17, 123, 'ADD', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    //Array('characteristic', 'nuevo_file_characteristic', 19, 117, 'ADD', 'Nombre, tipo y tamaño correcto.', Array(), 'nuevo_file_characteristic_empty_KO'),
    
    /*EDIT */
    //nuevo_file_characteristic
    Array('characteristic', 'nuevo_file_characteristic', 31, 124, 'EDIT', 'tamaño nombre < 7', Array('aa.pdf',Array('application/pdf'),10000), 'nuevo_file_characteristic_name_min_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 31, 125, 'EDIT', 'tamaño nombre < 7', Array('aaa.pdf',Array('application/pdf'),10000), true),
    Array('characteristic', 'nuevo_file_characteristic', 32, 126, 'EDIT', 'tamaño nombre > 100', Array('a'.repeat(101),Array('application/pdf'),10000), 'nuevo_file_characteristic_name_max_size_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 32, 127, 'EDIT', 'tamaño nombre > 100', Array('a'.repeat(100),Array('application/pdf'),10000), true),
    Array('characteristic', 'nuevo_file_characteristic', 33, 128, 'EDIT', 'alfabeticos o con espacios o ñ o acentos', Array('GonzálezMenduiña.pdf',Array('application/pdf'),10000), 'nuevo_file_characteristic_name_format_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 33, 129, 'EDIT', 'alfabeticos o con espacios o ñ o acentos', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    //Array('characteristic', 'nuevo_file_characteristic', 35, 125, 'EDIT', 'el fichero es correcto', Array(), 'nuevo_file_characteristic_empty_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 34, 130, 'EDIT', 'el fichero es correcto', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('characteristic', 'nuevo_file_characteristic', 35, 131, 'EDIT', 'tamaño menor al máximo', Array('BoasTardes.pdf',Array('application/pdf'),20000000), 'nuevo_file_characteristic_max_size_file_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 35, 132, 'EDIT', 'tamaño menor al máximo', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    Array('characteristic', 'nuevo_file_characteristic', 36, 133, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.jpeg',Array('image/jpeg'),10000), 'nuevo_file_characteristic_file_type_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 36, 134, 'EDIT', 'tipo de fichero pdf, doc o docx', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    //Array('characteristic', 'nuevo_file_characteristic', 38, 133, 'EDIT', 'Nombre, tipo y tamaño correcto.', Array(), 'nuevo_file_characteristic_empty_KO'),
    Array('characteristic', 'nuevo_file_characteristic', 37, 135, 'EDIT', 'Nombre, tipo y tamaño correcto.', Array('BoasTardes.pdf', Array('application/pdf'), 10000), true),

    /*SEARCH */
    //file_characteristic
    Array('characteristic', 'file_characteristic', 50, 136, 'SEARCH', 'tamaño nombre > 100', Array('a'.repeat(101),Array('application/pdf'),10000), 'file_characteristic_name_max_size_KO'),
    Array('characteristic', 'file_characteristic', 50, 137, 'SEARCH', 'tamaño nombre > 100', Array('a'.repeat(100),Array('application/pdf'),10000), true),
    Array('characteristic', 'file_characteristic', 51, 138, 'SEARCH', 'alfabeticos o con espacios o ñ o acentos', Array('BoasTardes.pdf',Array('application/pdf'),10000), true),
    
);