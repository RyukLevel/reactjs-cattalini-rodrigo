import './ItemCount.css'
import { useState } from "react";

export const ItemCount = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => {
        if (contador > 0) {
          setContador(contador - 1);
        }
      };     

    const infoAgregada = () => {     
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
        <>
      <div className="Item-Count">        
      <button className='Button-Count' onClick={decrementar}>-</button>
        <p>{contador}</p>                
        <button className='Button-Count' onClick={incrementar}>+</button>
      </div>      
      <button onClick={infoAgregada}>Agregar al carrito</button>
      </>      
    );    
}