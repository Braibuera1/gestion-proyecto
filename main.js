const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const {simple,intermedia,maxima} = require("./Complejidades")

const t1 = new Tarea("1", 3, simple);
const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6, simple),
  new TareaCompuesta("2.2", 8, [new Tarea("2.2.1", 3, simple), new Tarea("2.2.2", 4, simple)], intermedia),
], maxima);
const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6, simple),
  new Tarea("3.2", 3, intermedia),
], maxima);
const t4 = new TareaCompuesta("4", 15, [
  new Tarea("4.1", 6, simple), new Tarea("4.2", 8, simple), new Tarea("4.3", 12, simple), new Tarea("4.4", 16, simple)
], maxima);

proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);
proyecto.agregarTarea(t4);

proyecto.mostrarTareas(25);
console.log(`Duracion Total: ${proyecto.getDuracion()}`);
