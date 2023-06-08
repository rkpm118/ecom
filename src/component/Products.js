import React from 'react'
import { NavLink } from 'react-router-dom'

function Products({product}) {
  let {image,name,price,id}=product
  return (
    <>
   
     <div className='col-md-3'>
      <div>
      <NavLink to={`/singleproduct/${id}`}> <img src={image} className='img-fluid'/></NavLink>  
      </div>
      <div>
        <p>{name}</p>
        <p>{price}</p>

      </div>
     </div>
    
    </>
   
  )
}

export default Products