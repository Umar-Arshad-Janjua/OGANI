import React, { Component } from 'react'
import breadcrumb from './images/breadcrumb.png'
import banner from './images/banner.png'
import Footer from './Footer'
import { getData } from './CardData';
import { Link, NavLink, Router, Routes, Route } from 'react-router-dom';
import Shop from './Shop';


class HomePage extends React.Component{
  
 
    state = {
        data: getData(),
        name: this.props.banner
      };

render(){

    return(
    
        <>
        <img src={breadcrumb} className='img-fluid' alt="" />
                <h1 class="fw-bold text-white" style={{position: "relative", top: "-70px", fontFamily: "cairo"}}>OGANI HOME</h1>

        <div className ="container d-flex mb-0">

        
        <div class="accordion" id="accordionExample">
  <div class="accordion-item mt-5" style = {{width : '200px' , }}>
    <h2 class="accordion-header" id="headingOne" >
      <button class="accordion-button text-dark" style ={{background: '#7fad39'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       All Departmnets
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <ul class="list-group">
    <Link to="./shop"  class="list-group-item">Fresh Meat</Link>
  <Link to="./shop" class="list-group-item">Vegetables</Link>
  <Link to="./shop" class="list-group-item">Fruit and nut gifts</Link>
  <Link to="./shop" class="list-group-item">Fresh Berries</Link>
  

</ul>
    </div>
  </div>
 
</div>
<div class="container-fluid container">
    <img class="img-fluid ms-5 mt-5" src={banner} alt="alt text" style ={{  height:"431px"}}/>

        <h2 className="fs-4 fw-bold" style={{position:"relative" , top:"-40%", left:"-25%", fontFamily:"cairo" , color: "#7fad39" }}>Fruit Fresh</h2>
        <h2 className="fs-1 fw-bolder" style={{position:"relative" , top:"-40%", left:"-25%", fontFamily:"cairo" , color: "black" }}>{this.props.banner}Vegetables<br />
100% Organic <br /><span style={{fontFamily:"cairo"}} className=' fs-5'>Free Pickup and delivery available</span></h2>


        <Link className="btn " style={{color:'white', position:"relative" , backgroundColor :"#7fad39", top:"-40%", left:"-25%"}} to="./shop">SHOP NOW</Link>


        

    
  
</div>


        </div>
<div className="d-flex justify-content-between mb-3 align-content-between container mt-0 mb-5">
    

        {this.state.data.map((d) => (
        <div class=" mb-5 p-3" style={{width: "18rem"}}>
            
            <Link to ='/shop'><img src={d.pic} class="card-img-top" alt="..."/></Link>
  <div class="">
    <p class="fw-bold mt-2 fs-4" style={{fontFamily:"cairo"}}>{d.title}</p>
  </div>
  </div>

    ))}
    </div>
       
        
    <Footer />
        </>

      
       

    )
}


}


export default HomePage;