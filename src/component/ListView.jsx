import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './CommonTemplate/Button'

function ListView({ products }) {

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                {products.map((data) => {
                    const { id, name, image, price, description } = data
                    return <>
                        <div className="col-5">
                            <div className="card">
                                <div className="card-body">
                                    <img src={image} alt={name} className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="card">
                                <div className="card-body">
                                    <p>{name}</p>
                                    <p>{price}</p>
                                    <p>{description.slice(0, 90)}...</p>
                                    <NavLink to={`/singleproduct/${id}`}><Button btnName="Read more"></Button></NavLink>
                                </div>

                            </div>
                        </div>
                    </>
                })}

            </div>
        </div>
    )
}

export default ListView