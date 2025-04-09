const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const {simple,intermedia,maxima} = require("./Complejidades")

describe("Duracion Proyecto", () => {
  let t1;
  let t2;
  let t3;

  beforeEach(() => {
    t1 = new Tarea("1", 3, simple);
    t2 = new TareaCompuesta("2", 15, [
      new Tarea("2.1", 6, intermedia),
      new TareaCompuesta("2.2", 8, [
        new Tarea("2.2.1", 3, simple),
        new Tarea("2.2.2", 4, simple),
        new Tarea("2.2.3", 5, simple),
        new Tarea ("2.2.4", 8, simple)
      ], maxima),
    ], maxima);
    t3 = new TareaCompuesta("3", 7, [new Tarea("3.1", 6, intermedia), new Tarea("3.2", 3, simple)], intermedia);

    proyecto.agregarTarea(t1);
    proyecto.agregarTarea(t2);
    proyecto.agregarTarea(t3);
  });

  afterEach(() => {
    proyecto.cleanTareas();
  });

  test("La duración total de la tarea 1 debería ser 3", () => {
    expect(t1.getDuracion()).toBe(3);
  });

  test("La duración total de la tarea 2 debería ser 49", () => {
    expect(t2.getDuracion()).toBe(49);
  });

  test("La duración total de la tarea 3 debería ser 16", () => {
    expect(t3.getDuracion()).toBe(16);
  });

  test("La duración total del proyecto debería ser 68", () => {
    expect(proyecto.getDuracion()).toBe(68);
  });

  test("La tarea tarea 2 es de complejidad máxima y su costo debería ser 1401,25", () => {
    expect(t2.complejidad.Nombre).toBe("Maxima");
    expect(t2.costo()).toBe(1401.25);
  });

  test("La tarea tarea 2.2 es de complejidad máxima y su costo debería ser 222.56", () => {
    expect(t2.tareas[1].complejidad.Nombre).toBe("Maxima");
    expect(t2.tareas[1].costo()).toBe(222.56);
  });
});
