import { Item } from "../Item/Item.jsx"
export const ItemList = ({productsList}) => {    
  return (
    <div>
    {productsList.map((dato)=>{
return <Item key={dato.id} {...dato}/>        
    })}    
    </div>
  )
}
