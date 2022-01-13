import React, { Component } from 'react'
import breadcrumb from './images/breadcrumb.png'
import {getVegetablesData} from './VegetablesData'
import {getFruitsData} from './FruitsData'
import {getMeatData} from './MeatData'
import {getBerriesData} from './BerriesData'

import { Link, NavLink, Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
class Shop extends React.Component{

    state = {
        Vdata: getVegetablesData(),
        Fdata: getFruitsData(),
        Mdata: getMeatData(),
        Bdata: getBerriesData(),
        CartItemsData : [],
      };
      
      handleSubmit = (img,name,price) =>{
        const data = {name,price,img};
        this.setState({CartItemsData:data})
        console.log(data)
        fetch('http://localhost:5000/cart/add' , {
          method : 'POST',
          headers : {"Content-Type":"application/json"},
          body : JSON.stringify(data)
        }).then(()=>{
          console.log('data added to cart')
        })
       
     }
    
    
    render() {
        return (
            <div>
                <img src={breadcrumb} className='img-fluid' alt="" />
                <h1 class="fw-bold text-white" style={{position: "relative", top: "-70px", fontFamily: "cairo"}}>OGANI SHOP</h1>
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
  <a  href="#scrollspyHeading3" class="list-group-item list-group-item-action">Fresh Meat</a>
  <a  href="#scrollspyHeading1" class="list-group-item list-group-item-action">Vegetables</a>
  <a  href="#scrollspyHeading2" class="list-group-item list-group-item-action">Fruit and nut gifts</a>
  <a  href="#scrollspyHeading4" class="list-group-item list-group-item-action">Fresh Berries</a>
</ul>
    </div>
  </div>
 
</div>

<div>

<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Added To Cart</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <span className=''>Title: {this.state.CartItemsData.name} <br /> Price:  {this.state.CartItemsData.price}</span>
        
      </div>
      <div class="modal-footer">
      <a href="/cart"><button type="button" class="btn btn-primary">Show Cart</button></a>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
      
    </div>
  </div>
</div>

<h2 className="fw-bolder ms-5 mt-5 " id="scrollspyHeading1" style={{fontFamily:"cairo"}}>Vegetables</h2>
<div className="d-flex justify-content-between mb-3 flex-wrap align-content-between ms-5">
{this.state.Vdata.map((d) => (
        <div class=" mb-3 p-3" style={{width: "18rem"}}>
            
  <img style={{  height:'210px'}} src={d.pic} class="card-img-top" alt="..."/>
  <div class="">
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.title}</p>
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.price}$</p>
    <button type='button' className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontFamily:"cairo"}} onClick={()=>this.handleSubmit(d.pic,d.title,d.price)}>Add To Cart</button>


  </div>
  </div>

    ))}
</div>
<hr />
<h2 className="fw-bolder ms-5 mt-5 " id="scrollspyHeading2" style={{fontFamily:"cairo"}}>Fruits</h2>
<div className="d-flex justify-content-between mb-3 flex-wrap align-content-between ms-5">
{this.state.Fdata.map((d) => (
        <div class=" mb-3 p-3" style={{width: "18rem"}}>
            
  <img style={{  height:'210px'}} src={d.pic} class="card-img-top" alt="..."/>
  <div class="">
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.title}</p>
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.price}$</p>
    <button type='button' className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontFamily:"cairo"}} onClick={()=>this.handleSubmit(d.pic,d.title,d.price)}>Add To Cart</button>



  </div>
  
  </div>

    ))}
    
</div>
<hr />

<h2 className="fw-bolder ms-5 mt-5 " id="scrollspyHeading3" style={{fontFamily:"cairo"}}>Meat</h2>
<div className="d-flex justify-content-between mb-3 flex-wrap align-content-between ms-5">
{this.state.Mdata.map((d) => (
        <div class=" mb-3 p-3" style={{width: "18rem"}}>
            
  <img style={{  height:'210px'}} src={d.pic} class="card-img-top" alt="..."/>
  <div class="">
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.title}</p>
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.price}$</p>
    <button type='button' className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontFamily:"cairo"}} onClick={()=>this.handleSubmit(d.pic,d.title,d.price)}>Add To Cart</button>


  </div>
  </div>

    ))}
</div>
<hr />

<h2 className="fw-bolder ms-5 mt-5 " id="scrollspyHeading4" style={{fontFamily:"cairo"}}>Berries</h2>
<div className="d-flex justify-content-between mb-3 flex-wrap align-content-between ms-5">
{this.state.Bdata.map((d) => (
        <div class=" mb-3 p-3" style={{width: "18rem"}}>
            
  <img style={{  height:'210px'}} src={d.pic} class="card-img-top" alt="..."/>
  <div class="">
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.title}</p>
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.price}$</p>
    <button type='button' className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontFamily:"cairo"}} onClick={()=>this.handleSubmit(d.pic,d.title,d.price)}>Add To Cart</button>


  </div>
  </div>

    ))}
</div>
</div>
</div>

<Footer />

            </div>
        )
    }

}

export default Shop;