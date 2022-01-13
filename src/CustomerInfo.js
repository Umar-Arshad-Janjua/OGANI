import React, { Component } from 'react'
import axios from 'axios'; 
import breadcrumb from './images/breadcrumb.png'
import Footer from './Footer';




class CustomerInfo extends Component {   
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
    

    constructor(props) {    
        super(props);  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.state = {    
            custAddress: '',    
            emailId: '',      
            gender: 'select',        
            city: 'select',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { custAddress, emailId, gender, city } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
            
        if (!custAddress) {    
            formIsValid = false;    
            formErrors["custAddressErr"] = "*Address is required.";    
        }    
    
            
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "*Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "*Invalid email id.";    
        }    
    
         
    
          
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "*Select gender.";    
        }    
    
           
    
           
        if (city === '' || city === "select") {    
            formIsValid = false;    
            formErrors["cityErr"] = "*Select city.";    
        }    
        
      

        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have successfully enetered details.')    
            this.setState(this.state)    
        }  
        console.log(this.state)
        axios.post('http://localhost:5000/student/add', this.state)  
        .then(res=> console.log(res.data));
    }    
    
    render() {    
    
        const { custAddressErr, emailIdErr, genderErr, cityErr } = this.state.formErrors;    
    
        return ( 
            <div>

<img src={breadcrumb} className='img-fluid' alt="" />
                <h1 class="fw-bold text-white" style={{position: "relative", top: "-70px", fontFamily: "cairo"}}>BILLING DETAILS</h1>
             
            <div className="container formDiv" >    
                <h3 style={{ textAlign: "center", fontFamily: "cairo" }} ><strong>Submit Your Details</strong></ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}> 
                    <div className="row">   
                        <div className='col-md-6'>    
                            <label htmlFor="custAddress" style={{fontFamily: "cairo"}}>Address</label>    
                            <input type="text" name="custAddress"    
                                value={this.state.custAddress}    
                                onChange={this.handleChange}   
                                placeholder="Your complete address.."    
                                className={custAddressErr ? ' showError' : ''} />    
                            {custAddressErr &&    
                                <div style={{ color: "red", paddingBottom: 10, fontFamily: "cairo" }}>{custAddressErr}</div>    
                            }    
    
                        </div>    
                        <div className='col-md-6'>    
                            <label htmlFor="emailId" style={{fontFamily: "cairo"}}>Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}   
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10, fontFamily: "cairo" }}>{emailIdErr}</div>    
                            }    
                        
                        </div>       
                           
                        <div className='col-md-6'>    
                            <label htmlFor="gender" style={{fontFamily: "cairo"}}>Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10, fontFamily: "cairo" }}>{genderErr}</div>    
                            }    
                        </div>    
                        <div className='col-md-6'>    
                            <label htmlFor="city" style={{fontFamily: "cairo"}}>City</label>    
                            <select name="city"    
                                value={this.state.city}    
                                onChange={this.handleChange}    
                                className={cityErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Lahore">Lahore</option>    
                                <option value="Islamabad">Islamabad</option>    
                                <option value="Karachi">Karachi</option>    
                            </select>    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10,fontFamily: "cairo" }}>{cityErr}</div>    
                            }    
                        </div>
                       
                        <h2 className='fw-bold mt-5' style={{fontFamily: 'cairo'}}>Total Price:{this.state.totalPrice}$</h2>
                        <input className='mt-5' type="submit" value="Submit" /> 
                        </div>   
                    </form>    
                </div>    
            </div >
            <Footer />
            </div>   
        )    
    }    
}    
    
export default CustomerInfo;