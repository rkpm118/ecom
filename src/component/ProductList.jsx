import React from 'react'
import FilterSection from './FilterSection'
import Sort from './Sort'
import ProductItem from './ProductItem'
import { useFilterContext } from '../context/filtercontext'
import Products from './Products'

function ProductList() {
    const { filter_products, all_products } = useFilterContext()
    console.log('this is the filterproduct and this is the for allproduct form product list ', filter_products, all_products)
    return (
        <div className='container'>
            <div className="row">
                {/* //this is the for the filtersectinon  */}
                <div className="col-4">
                    <FilterSection />
                </div>
                {/* //  this is the for the sort section */}
                <div className="col-8">
                    <div className='row'>
                        <div className="col-12">
                            <Sort />
                        </div>
                        {/* //this is the for the product item */}
                        <div className="col-12">




                             {/*<div className="row justify-content-evenly">
                                {filter_products ? filter_products.map((data) => {
                                    return <Products product={data} key={data.id} />
                                }) : null}
                            </div> */}





                            <ProductItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList