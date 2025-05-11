import React from "react";



const ItemList = ({data, remove}) => {
  const {day, task, category, priority} = data;
  return <article>
    <h4>Day: {day}</h4>
    <p>Tarea: {task}</p>
    <p>Caterogia {category}</p>
    <p>Proridad: {priority}</p>
    <button className="delete" onClick={remove}>Borrar</button>
    
  </article>;
};

export default ItemList;
