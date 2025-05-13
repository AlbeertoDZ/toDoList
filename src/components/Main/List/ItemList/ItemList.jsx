import React from "react";
import './ItemList.css'

const ItemList = ({data, remove}) => {
  const {day, task, category, priority} = data;
  return <article className="toDoCard">
    <h4>Day: {day}</h4>
    <p>Tarea: {task}</p>
    <p>Caterogia {category}</p>
    <p>Prioridad: {priority}</p>
    <button className="squareBtn" onClick={remove}>Borrar</button>
    
  </article>;
};

export default ItemList;
