import "./ItemCount.css";

import{useState} from 'react'
import Swal from "sweetalert2";
 function ItemCount(){

const [count, setCount] = useState(1)

 
  const handleCount= () => {
     setCount(count + 1)
  }
  
   const handleLessCount= () => {
   
    setCount(count - 1 )
    if (count<='1') return setCount(1)
  }
 const carrito =() =>{
  Swal.fire(
    'Se agrego al carrito' , 
    'Muchas gracias',
    'success'
  )
 }
 

return(
  <>
  <label
  >
   <button variant="outline-secondary"
className='button'
 onClick={handleLessCount}
>-</button>

  {count}

  <button 
className='button'
  onClick={handleCount}>+</button>
  
  </label>

  <div>

<button
className="carrito"
onClick= {carrito}>Agregar al carrito
</button>

  </div>
  </>
)

}
export default ItemCount