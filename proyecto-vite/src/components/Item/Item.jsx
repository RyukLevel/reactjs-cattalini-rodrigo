import './Item.css'
import {Link} from "react-router-dom"



export const Item = ({id,nombre,descripcion,precio,imagen}) => {
  return (
    
<div className="item">
        <>
            <img src={imagen} alt={nombre} />
            </>
        <>
            <h3>{nombre}</h3>
            {/* <p>{descripcion}</p> */}
            </>
        <>
            <Link to={`/productos/${id}`}>Ver Detalles</Link>
            </>                           
</div>      
  )
}


