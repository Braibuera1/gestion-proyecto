
class ComplejidadSimple{
    constructor(){
        this.nombre = "Simple";
    }
    calcularCosto(tiempo, valor){
        return tiempo * valor;
    }
}

class ComplejidadIntermedia{
    constructor(){
        this.nombre = "Intermedia";
        this.extra = 1.05;
    }
    calcularCosto(tiempo, valor){
        return tiempo * valor * this.extra;
    }
}

class ComplejidadMaxima{
    constructor(){
        this.nombre = "Maxima";
        this.extra = 1.07;
    }
    calcularCosto(tiempo, valor){
        const costo = tiempo * valor * this.extra;
        return tiempo <= 10 ? costo : costo + Math.floor(tiempo/10) * 1000;
    }
}

module.exports = {simple : new ComplejidadSimple, intermedia : new ComplejidadIntermedia, maxima : new ComplejidadMaxima}