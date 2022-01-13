import React, { Component } from 'react'
import logo from './images/logo.png';

class Footer extends React.Component{

    render(){

        return(

            <div>
                 <div class="mt-5" style={{backgroundColor:"#F3F6FA"}}>
                 <img src={logo} alt=""  className='mt-4'/>
                 <p style={{fontFamily:"cairo"}} className='fw-bold'>Address: 60-49 Road 11378 New York</p>
                 <p style={{fontFamily:"cairo"}} className='fw-bold'>Phone: +65 11.188.888</p>
                 <p style={{fontFamily:"cairo"}} className='fw-bold'>Email: hello@colorlib.com</p>
                        <p className="fs-4 mt-5" style={{fontFamily:"cairo"}}>© All Rights Reserved by <a style={{textDecoration:'none'}} href="#">OGANI<i class="fa fa-love"></i></a></p>
                    </div>

            </div>

        )

    }

}

export default Footer;