import buy from '../../assets/imagenes/icons-buy.png'
import './CartWitget.css'

export const CartWitget = () => {

  return (    
    <div className='section-carrito'>
        <img src={buy} alt="carrito de compra"/>
        <span className="carrito-contador"> 3</span>
    </div>

  )
}
