import React from 'react'
import FilterSection from './FilterSection'
import Sort from './Sort'
import ProductItem from './ProductItem'

function ProductList() {
  return (
           <div className='container'>
            <div className="row">
                <div className="col-4">
                    <FilterSection/>
                </div>
                <div className="col-8">
                    <div className='row'>
                        <div className="col-12">
                            <Sort/>
                        </div>
                        <div className="col-12">
                           <ProductItem/>
                        </div>
                    </div>
                </div>
            </div>
           </div>
  )
}

export default ProductList