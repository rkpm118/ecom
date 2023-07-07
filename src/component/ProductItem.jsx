import React from 'react'
import { useFilterContext } from '../context/filtercontext'
import GridView from './GridView'
import ListView from './ListView'

function ProductItem() {
  const { filter_products, setGridView, grid_view } = useFilterContext()
  console.log('this is the filterproduct and this is the for allproduct form product list ', filter_products, setGridView, grid_view)
  if (grid_view) {
    return <GridView products={filter_products} />
  }
  if (grid_view === false) {
    return <ListView products={filter_products} />
  }
  return (
    <div>ProductItem</div>
  )
}

export default ProductItem