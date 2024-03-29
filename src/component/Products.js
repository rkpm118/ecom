import React from 'react'
import { Form, NavLink } from 'react-router-dom'
import FormatPrice from './FormatPrice'

function Products({product}) {

  let {image,name,price,id,category}=product
  return (
    <>
   
     <div className='col-md-3 position-relative'>
      <div>
      <span className="badge rounded-pill bg-light text-dark   position-absolute top-10 end-0  ">{category}</span>
      <NavLink to={`/singleproduct/${id}`}> <img src={image} className='img-fluid'/>
      
      </NavLink>  
      </div>
      <div>
        <p>{name}</p>
        <p>{<FormatPrice price={price}/>}</p>

      </div>
     </div>
    
    </>
   
  )
}

export default Products