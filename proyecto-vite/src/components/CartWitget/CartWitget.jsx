import buy from '../../assets/imagenes/icons-buy.png';
import './CartWitget.css';
import {useCartContext} from '../../context/CartContext';

export const CartWitget = () => {
const {totalCant} = useCartContext();

  return (    
    <div className='section-carrito'>
        <img src={buy} alt="carrito de compra"/>
        <span className="carrito-contador">{totalCant}</span>
    </div>
  );
}
