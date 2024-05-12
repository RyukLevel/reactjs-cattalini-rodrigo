import './ItemListContainer.css'
import {useState, useEffect } from 'react'
import {getProductos, getProductosByCategoria} from '../../utils/MockData'
import {ItemList} from '../ItemList/ItemList'
import {Spinner} from '../Spinner/Spinner'
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {
const [products, setProductos] = useState([])
const [productosfiltrados, setProductosFiltrados] = useState([])
const [loading, setloading] = useState(true);
const {categoriaId} = useParams();
console.log(categoriaId)

  useEffect(() => {
    setloading(true);
    if (categoriaId) {
      getProductosByCategoria(categoriaId)
      .then((filtrado) => {
        setProductos(filtrado)
        setloading(false)
      })
    }
    else{
    getProductos()
    .then((listadoProductos) => {            
      setProductos(listadoProductos)
      setloading(false)
    })     
    .catch((error) => {
      console.log(error)
    })}}   
,[categoriaId]);
  
    
  return (
    <main>
    <h1>Bienvenidos al mundo Gamer</h1>
    {loading === true ? (
    <Spinner/>) : (
    <div>
    <ItemList productsList={products}/>    
    </div>    
    )}  
  </main>
  );
}   
