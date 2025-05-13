import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import data from "./data.js";
import { v4 as uuidv4 } from "uuid";
import "./List.css";

const List = () => {
  // Estado inicial
  const [items, setItems] = useState(data);

  // Estado para manejar el tiempo
  const [timer, setTimer] = useState(null);

  // Estado inicial del formulario
  const [values, setValues] = useState({
    day: "",
    task: "",
    category: "",
    priority: "",
  });

  // Estado para mostrar el mensaje de "tarea añadida"
  const [showMessage, setShowMessage] = useState(false);

  // pintar los datos
  const paintData = () =>
    items.map((item, index) => (
      <ItemList key={uuidv4()} data={item} remove={() => removeItem(index)} />
    ));

  // Eliminar todos los items
  const removeAllItems = () => setItems([]);

  // Resetear los items
  const resetItems = () => setItems(data);

  // Agregar un nuevo item
  const addItem = (newItem) => {
    setItems([...items, newItem]);
    setShowMessage(true); // Muestra el mensaje
    setTimeout(() => setShowMessage(false), 5000); // Oculta el mensaje después de 5 segundos
  };

  // Eliminar un item
  const removeItem = (i) => {
    const remainingItems = items.filter((item, index) => index !== i);
    setItems(remainingItems);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    addItem(values);
    setValues({
      day: "",
      task: "",
      category: "",
      priority: "",
    });
    if (timer) clearTimeout(timer); // Limpia el temporizador al enviar
  };

  // Reinicia el temporizador cada vez que los valores cambian
  useEffect(() => {
    if (values.day || values.task || values.category || values.priority) {
      if (timer) clearTimeout(timer);
      const newTimer = setTimeout(() => {
        setValues({
          day: "",
          task: "",
          category: "",
          priority: "",
        });
      }, 20000); // 20 segundos
      setTimer(newTimer);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [values]);

  return (
    <section>
      <h3>Componentes de la lista</h3>

      {showMessage && <p className="successMessage">Tarea añadida 😊</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="day">Día</label>
        <select
          name="day"
          value={values.day}
          onChange={handleChange}
        >
          <option value="">Selecciona un día</option>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
        <br />

        <label htmlFor="task">Tarea</label>
        <input
          type="text"
          name="task"
          placeholder="Tarea"
          value={values.task}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="category">Categoría</label>
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={values.category}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="priority">Prioridad</label>
        <select
          name="priority"
          value={values.priority}
          onChange={handleChange}
        >
          <option value="">Selecciona una prioridad</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
        <br />

        {values.day && values.task && values.category && values.priority ? (
          <button className="btnSubmit" type="submit">
            Agregar
          </button>
        ) : (
          <p>Rellena todos los campos para poder enviar</p>
        )}
      </form>

      <section id="sectionItems">{paintData()}</section>

      <div className="buttons">
        <button className="deleteList" onClick={removeAllItems}>
          Eliminar todo
        </button>
        <button className="resetList" onClick={resetItems}>
          Resetear
        </button>
        <button className="deleteTask" onClick={() => removeItem(0)}>
          Eliminar una tarea
        </button>
      </div>
    </section>
  );
};

export default List;
