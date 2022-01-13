import React, { Component } from 'react'
import Footer from './Footer'
import breadcrumb from './images/breadcrumb.png'
import p1 from './images/blog1.png'
import p2 from './images/blog2.png'
import p3 from './images/blog3.png'
import p4 from './images/blog4.png'
class Blogs extends React.Component{

    render() {
        return (
            
            <div >
                 <img src={breadcrumb} className='img-fluid' alt="" />
                 <h1 class="fw-bold text-white" style={{position: "relative", top: "-70px", fontFamily: "cairo"}}>BLOG</h1>
<div className='' style={{position:'relative', left:'100px'}} >
            <div className="row">
                <div className="col-md-6">
                <div class="" style={{width:'70%'}} >
  <a href="#"><img src={p1} class="card-img-top img-fluid rounded"  alt="..."/></a>
  <div class="card-body">
      <h4 style={{fontFamily: "cairo"}} className="fw-bolder">Cooking tips make cooking simple</h4>
      <p className='fw-lighter'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
    
  </div>
</div>
                </div>
                <div className="col-md-6">
                <div class="" style={{width:'70%'}} >
  <a href="#"><img src={p2} class="card-img-top img-fluid rounded"  alt="..."/></a>
  <div class="card-body">
  <h4 style={{fontFamily: "cairo"}} className='fw-bolder'>Tips You To Balance
Nutrition Meal Day</h4>
<p className='fw-lighter'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
  </div>
</div>
                </div>
             
            </div>
            <div className="row mt-5 ">
                <div className="col-md-6">
                <div class="" style={{width:'70%'}} >
  <a href="#"><img src={p3} class="card-img-top img-fluid rounded"  alt="..."/></a>
  <div class="card-body">
  <h4 style={{fontFamily: "cairo"}} className='fw-bolder'>09 Kinds Of Vegetables
Protect The Liver</h4>
<p className='fw-lighter'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
  </div>
</div>
                </div>
                <div className="col-md-6">
                <div class=""  style={{width:'70%'}}>
  <a href="#"><img src={p4} class="card-img-top img-fluid rounded"  alt="..."/></a>
  <div class="card-body">
  <h4 style={{fontFamily: "cairo"}} className='fw-bolder'>The Moment You Need To Remove Garlic From The Menu</h4>
  <p className='fw-lighter'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>

  </div>
</div>
                </div>
               
                </div>
                
            </div>

            <Footer />
            </div>
           
        )
    }

}

export default Blogs;