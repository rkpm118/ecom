import React from 'react'
import Button from './CommonTemplate/Button'
 
import { BsInstagram,BsYoutube,BsGithub } from "react-icons/bs";

function Footer() {
   
  return (
     <div className="container-fluid   d-flex  flex-column  position-fixed bottom-0 mt-5 ms-0 me-0" style={{width:"100%",background:"yellow"}}>
     {/* //1 */}
        <div className="row bg-light d-flex justify-content-between rounded-1 position-absolute  top-0 start-50  translate-middle" style={{width:"800px"}}>
            <div className="col-3 ms-5">
                <p>Ready to get started? tailk to us today</p>
            </div>
            <div className="col-2 me-5">
                <Button btnName="GET STARTED"/>
            </div>
        </div>
        {/* //2 */}
        <div className="row p-5 d-flex  flex-grow-1 justify-content-around " style={{backgroundColor:"blue",color:"white"}}>
           <div className='col-md-2'>
            <p>Utsav Kumar Jha</p> 
            <p>Aldus PageMaker including versions of Lorem Ipsum.</p>
           </div>
           <div className='col-md-2'>
            <h5>Subscribe to get important updates</h5>
            <form>
                <input type='text' placeholder='YOUR E-MAIL'/>
                <Button btnName="SUBSCRIBE"/>
            </form>
           </div>
           <div className='col-md-2'>
            <p>Folllow Us</p>
            <p><BsGithub/> </p>
            <p><BsInstagram/> </p>
            <p><BsYoutube/> </p>
           </div>
           <div className='col-md-2'>
            <p>Call Us</p>
            <h5>63500XXXXX</h5>
           </div> 
        </div>
     </div>
  )
}

export default Footer