import { useEffect, useState } from "react";

const products =[
  {categoria:'mangas', nombre :'black clover',genero:'shonen', precio:550, autor:'Yūki Tabata' },
  {categoria:'mangas', nombre :'Haikyuu',genero:'Spokon', precio:550, autor:'Haruichi Furudate' },
  {categoria:'mangas', nombre :'monster',genero:'seinen', precio:550, autor:'Naoki Urasawa' },
 
]


const gFetch = new Promise ((resolve, reject)=>{
let condition =true
if (condition){

  setTimeout (()=>{
resolve (products);

  }, 2000);
}else {
  reject('400 - not found')
}

})

function Item() {


  const [ products, setProducts] =useState ([])

  useEffect(()=> {
    gFetch
    .then (result =>
 setProducts (result))
}, [])
console.log (products)

return(

<>

<div>
  {products.map ((nom)=> <li key={nom.nombre}>{nom.nombre}</li>)}
</div>
</>
);
}

export default Item