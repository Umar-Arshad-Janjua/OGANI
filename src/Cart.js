import breadcrumb from './images/breadcrumb.png'

import React, { Component } from 'react'
import axios from 'axios';
import Footer from './Footer';
import CustomerInfo from './CustomerInfo';
import {Link} from "react-router-dom"
export default class Cart extends Component {
    
    state = {
        cartItems : [],
        totalPrice : 0,
    }


    componentDidMount(){

        fetch('http://localhost:5000/cart')
        .then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data)
            this.setState({cartItems:data})
            console.log(this.state.cartItems)


            let totalPrice = 0; 
            if(data){
                for (let i = 0; i < data.length; i++) {
                    totalPrice = totalPrice +  data[i].price;
                }
            }
            
           
          this.setState({totalPrice:totalPrice})
          console.log(totalPrice)
        })

        
        
    }

    handleDelete = (id) =>{
        console.log(id);
        axios.delete('http://localhost:5000/cart/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        cartItems : this.state.cartItems.filter(el => el._id !== id)
    })
     
     
    }

    render() {

        return (
            <div>
                <img src={breadcrumb} className='img-fluid' alt="" />
                <h1 class="fw-bold text-white" style={{position: "relative", top: "-70px", fontFamily: "cairo"}}>OGANI CART</h1>


                <div className='container'>
                    <div className="row">
                    <h2 className='fw-bold' style={{fontFamily: 'cairo'}}>Total ITEMS:{this.state.cartItems.length}</h2>
                    <h2 className='fw-bold' style={{fontFamily: 'cairo'}}>Total Price:{this.state.totalPrice}$</h2>

                        {this.state.cartItems.map(cartitem=>{
                            return(
                               <div>
                                <div class="card w-75 container p-3">
                                <div class="card-body p-3">
                                  <h5 style={{fontFamily: 'cairo'}} class="card-title fw-bold">Title:{cartitem.name}</h5>
                                  <p style={{fontFamily: 'cairo'}} class="card-text fw-bold">Price:{cartitem.price}</p>
                                 <a href="/cart"> <button class="btn btn-danger" onClick={()=>this.handleDelete(cartitem._id)}>Delete</button></a>
                                </div>
                              </div> 
                             
                              </div>
                            )
                           
                        })}
                         <Link to='/customerinfo'> <button class="btn btn-success mt-5">Check Out</button></Link>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

