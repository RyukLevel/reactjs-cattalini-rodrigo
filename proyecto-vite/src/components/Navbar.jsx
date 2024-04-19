import './Navbar.css'
import logo from '../assets/imagenes/logo_pixel_warrios.png'

const Navbar = () => {
return(
<>
<nav>
<img src={logo} alt="" className='logo_navbar' />
<ul>
    <li>Inicio</li>
    <li>Productos</li>
    <li>Contacto</li>
</ul>
<p>Carrito</p>
</nav>
</>
)
}
export default Navbar;
