import React, { Component } from 'react'
import breadcrumb from './images/breadcrumb.png'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import {FaBusinessTime } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import Footer from './Footer';
class Contact extends React.Component{

    render() {
        return (
            <div>
                <img src={breadcrumb} className='img-fluid' alt="" />
                 <h1 class="fw-bold text-white" style={{position: "relative", top: "-70px", fontFamily: "cairo"}}>CONTACT US</h1>
            
            <div className="row">
                <div className="col-md-3 fs-2" ><FaPhoneAlt /><br /> PHONE <br /><span className='fs-6'>+01-3-8888-6868</span></div>
                <div className="col-md-3 fs-2" ><FaLocationArrow /><br /> ADDRESS <br /><span className='fs-6'>60-49 Road 11378 New York</span></div>
                <div className="col-md-3 fs-2" ><FaBusinessTime /><br /> OPEN TIME <br /><span  className='fs-6'>10:00 am to 23:00 pm</span></div>
                <div className="col-md-3 fs-2" ><FaMailBulk /><br /> EMAIL <br /><span className='fs-6'>hello@ogani.com</span></div>
            </div>

            <div>
                
            </div>
            <Footer />
            </div>
        )
    }

}
export default Contact;