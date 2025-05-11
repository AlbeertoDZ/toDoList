import React, { useState, useRef } from "react";
import ItemList from "./ItemList/ItemList";
import data from "./data.js"

const List = () => {

  // Estado inicial
  // useState crea un estado de memoria
  const [items, setItems] = useState(data);
  
  //Estado inicial del formulario
  const [values, setValues] = useState({
    day: "",
    task: "",
    category: "",
    priority: "",
  });

  // const inputRef = useRef("");

  // const handleButtonClick = () => {
  //   alert(`Valor del input: ${inputRef.current.value}`);
  // }

  // pintar los datos
  const paintData = () => items.map((item, index) => <ItemList key={index} data={item} remove={() => removeItem(index)} />);
  
  // Eliminar todos los items
  const removeAllItems = () => setItems([]);

  // Resetear los items
  const resetItems = () => setItems(data);
  
  // Agregar un nuevo item
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  }

  // Eliminar un item
  const removeItem = (i) => {
    const remainingItems = items.filter((item, index) => index !== i);
    setItems(remainingItems);
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    addItem(values);
  }

  return <section>
    <h3>Componentes de la lista</h3>
    {/* <ItemList data={datos[0]}/>
    <ItemList data={datos[1]}/>
    <ItemList data={datos[2]}/>
    <ItemList data={datos[3]}/> */}

    <form onSubmit={handleSubmit}>
      <label htmlFor="day">Día</label>
      <input type="text" name="day" placeholder="Día" onChange={handleChange} /><br />
      
      <label htmlFor="task">Tarea</label>
      <input type="text" name="task" placeholder="Tarea" onChange={handleChange} /><br />

      <label htmlFor="category">Categoría</label>
      <input type="text" name="category" placeholder="Categoría" onChange={handleChange} /><br />

      <label htmlFor="priority">Prioridad</label>
      <input type="text" name="priority" placeholder="Prioridad" onChange={handleChange} /><br />

      {values.day && values.task && values.category && values.priority ? 
      <button className="deleteItem" type="submit">Agregar</button> : 
      <p>Rellena todos los campos para poder enviar</p>}
      
      </form>

    {paintData()}

    <div className="buttons">
    <button className="deleteList" onClick={removeAllItems}>Eliminar todo</button>
    <button className="resetList" onClick={resetItems}>Resetear</button>
    <button className="deleteTask" onClick={() => removeItem(0)}>Eliminar una tarea</button>
    </div>

  </section>;
};

export default List;
