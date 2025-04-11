class Entidad_Abstracta {

    constructor(nombreEntidad, estructura){
        this.nombreEntidad = nombreEntidad;
        this.estructura = estructura;
    }

    change_value_IU(atributo, valor){
        console.warn(`Metodo change_value_IU no implementado para ${atributo}.`);
        return valor;
    }
}