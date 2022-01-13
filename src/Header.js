import React, { Component } from 'react'
import logo from './images/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import HomePage from './HomePage';
import Shop from './Shop';
import Pages from './Pages';
import Blogs from './Blog';
import Contact from './Contact';
import LoginPage from './LoginPage';
import CustomerInfo from './CustomerInfo';
import Cart from './Cart';
import './styles.css';
class Header extends React.Component{

render(){

return(


  <Router>
    
<div>

<nav class="  navbar navbar-expand-lg" style = {{background: ''}}>
<img src={logo} className="me-5 ms-5" alt="" />
  <div class="container-fluid container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse container menu-item ms-5" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5 justify-content-center">
        <li class="nav-item">
          <Link class="nav-link text-dark active me-3 fw-bold" style={{fontFamily:"cairo"}} to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-dark me-3 fw-bold" style={{fontFamily:"cairo"}} to="shop">SHOP</Link>
        </li>
        
      
        <li class="nav-item">
          <Link class="nav-link text-dark me-3 fw-bold" style={{fontFamily:"cairo"}} to="blog">BLOG</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-dark me-3 fw-bold" style={{fontFamily:"cairo"}} to="contact">CONTACT</Link>
        </li>

        

        
        
      </ul>

      <ul className='navbar-nav mb-2 mb-lg-0 ms-5 menu-item'>
      <li class="nav-item">
          <Link class="nav-link text-dark me-3 fw-bold fs-4" style={{fontFamily:"cairo"}} to="./cart"><FaShoppingCart/></Link>
        </li>
      <li class="nav-item ms-5 fw-bolder" >
          <Link class="nav-link text-dark me-3 fw-bold fs-4" style={{fontFamily:"cairo"}} to="loginpage">LOGIN</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

<Routes>
<Route  path='/' element={<HomePage/>}></Route>
      <Route  path='/blog' element={<Blogs/>}></Route>
      <Route  path='contact' element={<Contact/>}></Route>
      <Route  path='pages' element={<Pages/>}></Route>
      <Route  path='shop' element={<Shop/>}></Route>
      <Route path='/loginpage' element={<LoginPage/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/customerinfo' element={<CustomerInfo/>}></Route>
    </Routes> 
         

</div>
</Router>

)

} 


}

export default Header;

