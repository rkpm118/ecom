import React, { useEffect } from 'react'
import { useProductData } from '../context/product'
import { useParams } from 'react-router-dom'
 

function SingleProduct() {
  let {id}=useParams()
  let url = 'https://api.pujakaitem.com/api/products'
  let {singleProductFetch,singleProduct}=useProductData()
  console.log(singleProduct)
  
  useEffect(()=>{
       singleProductFetch(`${url}?id=${id}`)
  },[])
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct