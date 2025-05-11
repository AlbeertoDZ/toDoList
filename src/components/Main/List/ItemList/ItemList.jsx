import React from "react";

const ItemList = ({data}) => {
  const {day, task, category, priority} = data;
  return <article> Tareas por realizar:
    <p>{day}</p>
    <p>{task}</p>
    <p>{category}</p>
    <p>{priority}</p>
    <button>ADD</button>
    
  </article>;
};

export default ItemList;
