import './App.css'
// import './components/Navbar/Navbar.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'

function App() {

  const ItemListContainerProps = {
    saludo: "Nunca pares de jugar, incluso cuandos seas viejo"
  }
  return(
  <>
  <Navbar/> 
  <ItemListContainer
  { ...ItemListContainerProps}
  /> 
  </>



  )

}

export default App
