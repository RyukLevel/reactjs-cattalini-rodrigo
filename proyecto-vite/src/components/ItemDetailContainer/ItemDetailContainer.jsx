import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProductosById } from "../../utils/MockData";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner } from "../Spinner/Spinner";

export const ItemDetailContainer = () => {
    const {productoId} = useParams ();
    const [product, setProduct] = useState([])
    const [loading, setloading] = useState(true);

    useEffect(() => {    
        setloading(true);
        getProductosById(productoId)
        .then((listadoProductos) => {            
          setProduct(listadoProductos)
          setloading(false)          
        })     
        .catch((error) => {
          setloading(false)
          console.log(error)
        })},
        [productoId]);

        return loading === true ? (
            <Spinner/>) : (
            <div>
            <ItemDetail {...product}/>
            </div>    
            )
    }
  
    
      