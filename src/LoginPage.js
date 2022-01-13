import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import breadcrumb from './images/breadcrumb.png'
import * as Yup from "yup";
import logo from './images/logo.png';
import Header from "./Header";
import Footer from "./Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
});

class LoginPage extends React.Component {
  handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  render() {
    return (
        
        <div className="">
          <img src={breadcrumb} className='img-fluid' alt="" />
                 <h1 class="fw-bold text-white" style={{position: "relative", top: "-70px", fontFamily: "cairo"}}>LOGIN</h1>

        <img src={logo} alt=""  className="mb-5 mt-5" style={{}}/>
        
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                
                <div class="mb-3">
    Email <br /> 
                <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
  </div>
                <div className="mb-3">
                  Password <br />
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                
                </div>
                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>

        <Footer />
        </div>

      
    );
  }
}

export default LoginPage;
