import './ItemCount.css'
import { useState } from "react";

export const ItemCount = ({infoAgregada}) => {
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => {
        if (contador > 0) {
          setContador(contador - 1);
        }
      };     


    
    return (
        <>
      <div className="Item-Count">        
      <button className='Button-Count' onClick={decrementar}>-</button>
        <p>{contador}</p>                
        <button className='Button-Count' onClick={incrementar}>+</button>
      </div>      
      <button onClick={()=>infoAgregada(contador)}>Agregar al carrito</button>
      </>
    );    
}