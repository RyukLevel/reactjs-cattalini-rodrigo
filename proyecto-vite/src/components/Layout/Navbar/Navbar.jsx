import './Navbar.css'
import logo from '../../../assets/imagenes/logo_pixel_warrios.png'
import { CartWitget } from '../../CartWitget/CartWitget'
import {Link, NavLink} from "react-router-dom"
import React, { useState } from 'react';


export const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

return(
<header>
<img src={logo} alt="" className='logo_navbar' />
<nav>
<ul>
    <Link to="/" className='menu_navbar'>Inicio</Link>
    <Link to="productos" className='menu_navbar'>Productos</Link>
    <Link to= "categoria/sony" className='menu_navbar_mini'>Sony</Link>
    <Link to= "categoria/microsoft" className='menu_navbar_mini'>Microsoft</Link>
    <Link to= "categoria/nintendo" className='menu_navbar_mini'>Nintendo</Link>
    <Link to= "categoria/sega" className='menu_navbar_mini'>Sega</Link>
    <Link to= "categoria/atari" className='menu_navbar_mini'>Atari</Link>
    <Link to="contacto" className='menu_navbar'>Contacto</Link>

</ul>
</nav>
<CartWitget/>
</header>
)
}
export default Navbar;
