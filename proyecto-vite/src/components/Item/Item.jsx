import { IoBagHandleOutline } from 'react-icons/io5'
import './Item.css'
export const Item = ({id,nombre,descripcion,precio,imagen}) => {
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
            <button>Ver Detalles</button>
            </>                   
        <>
            <h3>Usd: {precio}</h3>
            </>  
</div>      
  )
}


