import React, { use } from "react";
import ItemList from "./ItemList/ItemList";
import data from "./data.js"

const List = () => {

  
  const paintData = (datos) => datos.map((item, index) => <ItemList key={index} data={item} />);
    
  // Estado inicial
  // useState crea un estado de memoria
  const [items, setItems] = useState(data);

  con

  return <section>List
    <h3>Componentes de la lista</h3>
    {/* <ItemList data={datos[0]}/>
    <ItemList data={datos[1]}/>
    <ItemList data={datos[2]}/>
    <ItemList data={datos[3]}/> */}
    {paintData(datos)}
  </section>;
};

export default List;
