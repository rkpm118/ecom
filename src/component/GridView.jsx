import React from 'react'
import Products from './Products'

function GridView({ products }) {
    return (
        <div className="row justify-content-evenly">
            {products ? products.map((data) => {
                return <Products product={data} key={data.id} />
            }) : null}
        </div>
    )
}

export default GridView