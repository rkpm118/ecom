import React from 'react'
import Button from './CommonTemplate/Button'

import { BsInstagram, BsYoutube, BsGithub } from "react-icons/bs";

function Footer() {

    return (
        <div className="container-fluid   d-flex  flex-column  position-relative bottom-0 mt-5 ms-0 me-0" style={{ width: "100%", background: "yellow" }}>
            {/* //1 */}
            <div className="row bg-light d-flex justify-content-between rounded-1 position-absolute  top-0 start-50  translate-middle" style={{ width: "800px" }}>
                <div className="col-3 ms-5">
                    <p>Ready to get started? tailk to us today</p>
                </div>
                <div className="col-2 me-5">
                    <Button btnName="GET STARTED" />
                </div>
            </div>
            {/* //2 */}
            <div className="row p-5 d-flex  flex-grow-1 justify-content-around " style={{ backgroundColor: "blue", color: "white" }}>
                <div className='col-md-2'>
                    <p>Ram Krishna</p>
                    <p>Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='col-md-2 d-flex '>
                    <h6>Subscribe to get important updates</h6>
                    <form>
                        <input type='text' placeholder='YOUR E-MAIL' />
                        <Button btnName="SUBSCRIBE" />
                    </form>
                </div>
                <div className='col-md-2 d-flex flex-column'>
                    <p>Folllow Us</p>

                    <p>  <span className="  m-2"><BsGithub /></span>
                        <a href="https://www.instagram.com/" target='_blank' style={{color:"white"}}>
                        <span className="  m-2"><BsInstagram /></span></a>
                        <a href="https://www.youtube.com/" target='_blank' style={{color:"white"}}>
                        <span className="  m-2"><BsYoutube /></span></a> </p>

                </div>
                <div className='col-md-2'>
                    <p>Call Us</p>
                    <a href="6299261814" style={{color:'white', textDecoration:"none"}}>+91 6299261814</a>
                    
                </div>
                <hr />
                <div className="row">
                    <div className='col-md-3'>
                        <p>@ {new Date().getFullYear()} Ram Krishna. All Rights Reserved</p>
                    </div>
                    <div className='col-md-3'>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDTIONS</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer