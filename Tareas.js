class Tarea {
  constructor(codigo, duracion, complejidad) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = complejidad;
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

   /*
  Se agrega el tipo de complejidad y el costo en el metodo mostrarTarea
  */ 
  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Complejidad: ${this.complejidad.Nombre} - Costo: ${this.costo()}`);
  }

  /*
  Se agrega el metodo costo() 
  */ 
  costo(){
    return this.complejidad.calcularCosto(this.duracion);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = [], complejidad) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.complejidad = complejidad;
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }
  /*
  Se agrega el tipo de complejidad y el costo en el metodo mostrarTarea
  */ 
  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Complejidad: ${this.complejidad.Nombre} - Costo: ${this.costo()}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }

  /*
  Se agrega el metodo costo() 
  */ 
  costo(){
    const costo = this.complejidad.calcularCosto(this.duracion);
    return this.tareas.length <= 3 ? costo : costo * 1.04; // Si la cantidad de subtareas directas es mayor a 3 entonces se agrega un 4% extra 
  }
}

module.exports = { Tarea, TareaCompuesta };
