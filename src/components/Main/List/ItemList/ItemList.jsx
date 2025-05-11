import React from "react";

const ItemList = ({data}) => {
  const {title, description} = data;
  return <article> Tareas por realizar:
    <h4>{title}</h4>
    <p>{description}</p>
    <button>ADD</button>
    
  </article>;
};

export default ItemList;
