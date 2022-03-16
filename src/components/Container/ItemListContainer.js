import ItemCount from "../ItemCount/ItemCount"
import Item from "../Container/Item"
import ItemList from "./ItemList"
function ItemListContainer({greeting}) {
  return (
    <>
    <div>{greeting}</div>
    <div><ItemCount/></div>
    <div><Item/></div>

    
    </>
  )
}

export default ItemListContainer