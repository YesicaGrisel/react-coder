import "./ItemCount.css";

import{useState} from 'react'
 

 function ItemCount(){

const [count, setCount] = useState(1)

 
  const handleCount= () => {
     setCount(count + 1)
  }
 
   
   const handleLessCount= () => {
    setCount(count - 1 )
    if (handleLessCount<setCount)return setCount (1)
    }
  

return(
  <>
  <label
  >
  <button
   className=' button'

 onClick={handleLessCount}
 >-</button>
 <div>
  {count}
  </div>
  <button 
className='button'
  onClick={handleCount}>+</button>
  
  </label>
  </>
)

}
export default ItemCount