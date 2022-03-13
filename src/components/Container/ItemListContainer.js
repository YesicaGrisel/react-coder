import ItemCount from "../ItemCount/ItemCount"


function ItemListContainer({greeting}) {
  return (
    <>
    <div>{greeting}</div>
    <div><ItemCount/></div>
    </>
  )
}

export default ItemListContainer