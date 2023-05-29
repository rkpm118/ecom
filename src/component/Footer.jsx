import React from 'react'
import Button from './CommonTemplate/Button'

function Footer() {
   
  return (
     <div className="container-fluid bg-dark d-flex  flex-column align-items-center position-relative mt-5">
        <div className="row bg-light d-flex justify-content-between rounded-1 position-absolute  top-0 start-50  translate-middle" style={{width:"800px"}}>
            <div className="col-3 ms-5">
                <p>Ready to get started? tailk to us today</p>
            </div>
            <div className="col-2 me-5">
                <Button btnName="GET STARTED"/>
            </div>
        </div>
        <div className="row" style={{backgroundColor:"blue",color:"white"}}>
            
        </div>
     </div>
  )
}

export default Footer