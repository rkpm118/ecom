import React from 'react'

function Products(props) {
  console.log('props',props)
  return (
    <>
     <div className='col-md-3'>
      <div>
        <img src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid'/>
      </div>
      <div>
        <p>iPhone x</p>
        <p>3444444</p>

      </div>
     </div>
    <div className='col-md-3'></div>
    <div className='col-md-3'></div>
    </>
   
  )
}

export default Products