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

  mostrarTarea(n) {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Complejidad: ${this.complejidad.nombre} - Costo: ${this.costo(n)}`);
  }

  costo(valor){
    return this.complejidad.calcularCosto(this.duracion,valor);
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

  mostrarTarea(n) {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Complejidad: ${this.complejidad.nombre} - Costo: ${this.costo(n)}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea(n));
  }

  costo(valor){
    const costo = this.complejidad.calcularCosto(this.duracion,valor);
    return this.tareas.length < 3 ? costo : costo * 1.04;
  }
}

module.exports = { Tarea, TareaCompuesta };
