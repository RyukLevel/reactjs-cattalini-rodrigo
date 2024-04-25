import './Navbar.css'
import logo from '../../assets/imagenes/logo_pixel_warrios.png'
import { CartWitget } from '../CartWitget/CartWitget'

const Navbar = () => {
return(
<header>
<img src={logo} alt="" className='logo_navbar' />
<nav>
<ul>
    <li>Inicio</li>
    <li>Productos</li>
    <li>Contacto</li>
</ul>
</nav>
<CartWitget/>
</header>
)
}
export default Navbar;
