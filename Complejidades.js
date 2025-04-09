/*
Definimos las clases ComplejidadSimple, ComplejidadIntermedia y ComplejidadMaxima

Cada cada clase tendra como atributo un "nombre". 
Las clases ComplejidadIntermedia y ComplejidadMaxima tendran el atributo "extra", con el porcentaje a aumentar.  

*/


class ComplejidadSimple{

    constructor(){
        this.nombre = "Simple";
    }
    get Nombre(){
        return this.nombre;
    }

    calcularCosto(duracion, valor){ // "calcularCosto" le ingresan dos parametros: duracion y valor
        return duracion * valor;   // Devuelve la multiplicación de ambos valores, entrega el costo en una tarea de complejidad simple 
    }
}

class ComplejidadIntermedia{
    constructor(){
        this.nombre = "Intermedia";
        this.extra = 1.05;
    }
    
    get Nombre(){
        return this.nombre;
    }

    calcularCosto(duracion, valor){
        return duracion * valor * this.extra; // Devuelve la multiplicación de ambos valores con el extra agregado 
    }
}

class ComplejidadMaxima{
    constructor(){
        this.nombre = "Maxima";
        this.extra = 1.07;
    }

    get Nombre(){
        return this.nombre;
    }

    /*
    El metodo calcularCosto de la clase ComplejidadMaxima 
    */
    calcularCosto(duracion, valor){
        const costo = duracion * valor * this.extra; //Guarda en una constante el costo + el extra
        return duracion <= 10 ? costo : costo + Math.floor(duracion/10) * 1000; // Si la duracion es menor o igual a 10 devuelve el costo calculado, sino se agrega 1000 * la cantidad de veces que el tiempo exceda 10 unidades
    }
}

module.exports = {simple : new ComplejidadSimple, intermedia : new ComplejidadIntermedia, maxima : new ComplejidadMaxima}