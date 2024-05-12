import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({id, nombre, descripcion, precio, stock, imagen, categoria}) => {    
  return (
    <div className="item">
    <>
        <img src={imagen} alt={nombre} />
        </>
    <>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        </>            
    <>
        <h3>Usd: {precio}</h3>
        </>
        <ItemCount/>        
</div> 
  )
}



