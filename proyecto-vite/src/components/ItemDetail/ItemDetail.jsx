import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext";

export const ItemDetail = ({id, nombre, descripcion, precio, stock, imagen, categoria}) => {    
  
  const {addToCart} = useCartContext();
  const infoAgregada = (contador) => {
    addToCart({id, nombre, descripcion, precio, imagen}, contador)        
    if (contador < 1){
        console.log(`Seleccione la cantidad de productos para agregar al carrito`)  
    }
    if (contador === 1){
        console.log(`se agregó ${contador} producto al carrito`)  
    }if (contador > 1){
      console.log(`se agregaron ${contador} productos al carrito`)
    }else{            
    }}

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
        <ItemCount infoAgregada={infoAgregada}/>        
</div> 
  )
}



