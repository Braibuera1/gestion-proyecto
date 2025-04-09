/*
Definimos las clases ComplejidadSimple, ComplejidadIntermedia y ComplejidadMaxima

Cada cada clase tendra como atributo un "nombre". 
Las clases ComplejidadIntermedia y ComplejidadMaxima tendran el atributo "extra", con el porcentaje a aumentar.  

*/

class Complejidad {
    valor = 25
}

class ComplejidadSimple extends Complejidad{
    nombre = "Simple"

    get Nombre(){
        return this.nombre;
    }

    calcularCosto(duracion){ // "calcularCosto" le ingresan dos parametros: duracion y valor
        return duracion * this.valor;   // Devuelve la multiplicación de ambos valores, entrega el costo en una tarea de complejidad simple 
    }
}

class ComplejidadIntermedia extends Complejidad{

    nombre = "Intermedia";
    extra = 1.05;
    
    get Nombre(){
        return this.nombre;
    }
    
    calcularCosto(duracion){
        return duracion * this.valor * this.extra; // Devuelve la multiplicación de ambos valores con el extra agregado 
    }
}

class ComplejidadMaxima extends Complejidad{

    nombre = "Maxima"
    extra = 1.07

    get Nombre(){
        return this.nombre;
    }

    /*
    El metodo calcularCosto de la clase ComplejidadMaxima 
    */
    calcularCosto(duracion){
        const costo = duracion * this.valor * this.extra; //Guarda en una constante el costo + el extra
        return duracion <= 10 ? costo : costo + Math.floor(duracion/10) * 1000; // Si la duracion es menor o igual a 10 devuelve el costo calculado, sino se agrega 1000 * la cantidad de veces que el tiempo exceda 10 unidades
    }
}

module.exports = {simple : new ComplejidadSimple, intermedia : new ComplejidadIntermedia, maxima : new ComplejidadMaxima}