import {Home} from './components/Home/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from './components/Layout/Navbar/Navbar.jsx'
import {Footer} from './components/Layout/Footer/Footer.jsx'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx'
import {Productos} from './components/Productos/Productos.jsx'
import {Error} from './components/Error/Error.jsx'
import {EnConstruccion} from './components/Error/EnConstruccion.jsx'

function App() {
  return (
 <BrowserRouter>
<Navbar/>
 <Routes>
  <Route path="/" element= {<Home/>}/>
  <Route path= "/productos" element={<ItemListContainer/>}/>
  <Route path= "/categoria/:categoriaId" element={<ItemListContainer/>}/>
  <Route path= "/contacto" element={<EnConstruccion/>}/>
  <Route path="*" element={<h2><Error/></h2>} />
 </Routes>
<Footer/>
 </BrowserRouter> 
  );
};

export default App
