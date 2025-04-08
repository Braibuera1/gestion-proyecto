class Proyecto {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  getDuracion() {
    return this.tareas.reduce((acum, tarea) => acum + tarea.getDuracion(), 0);
  }

  mostrarTareas(valor) {
    this.tareas.forEach((tarea) => tarea.mostrarTarea(valor));
  }

  cleanTareas() {
    this.tareas = [];
  }
}

module.exports = new Proyecto();
