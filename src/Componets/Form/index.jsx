import React from 'react'
import "./form.css"
import img6 from "../../assets/Google.svg"
import { useFormik } from 'formik';
 import { Outlet, Link } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
 import "./Form.css"
 import styled from 'styled-components';
 const ErrorMessage = styled.div`
 color: red;
 font-size: 10px;
 margin-bottom: 5px;

`;
const validate = (values) => {
  const errors = {};
  const azPhoneNumberRegExp = /^(055|050|051|070|077)[0-9]{7}$/;;
  if (!values.firstName) {
    errors.firstName = 'must be filled';
  }else if(/\s/.test(values.firstName)){
    errors.firstName = 'there is no gap'
}
   else if (values.firstName.length >= 10) {
    errors.firstName = 'cannot be longer than 10 characters.';}
    else if (values.firstName.length < 3) {
      errors.firstName = 'cannot be less than 3 characters.';}
  else if (!/^[a-zA-Z]+$/.test(values.firstName)){
    errors.firstName = 'cannot be a number and symbol';
  }

  

  if (!values.lastName) {
      errors.lastName = 'must be filled';
    }else if(/\s/.test(values.lastName)){
      errors.lastName = 'there is no gap'
  } else if (values.lastName.length >= 10) {
      errors.lastName = 'cannot be longer than 10 characters.';}
      else if (values.lastName.length < 3) {
        errors.lastName = 'cannot be less than 3 characters.';}
        else if (!/^[a-zA-Z]+$/.test(values.lastName)){
          errors.lastName = 'cannot be a number and symbol';
        }

  

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email adress';
  }
  
  if(!/[a-zA-Z]/.test(values.password)){
      errors.password = 'must be at least one character';
  }else if(!/[a-z]/.test(values.password) || !/[A-Z]/.test(values.password) || !/\d/.test(values.password)){
      errors.password="must have at least one uppercase, lowercase letter and number"
  }else if(/\s/.test(values.password)){
    errors.password = 'there is no gap'
}

  else if (values.password.length <= 6) {
      errors.password = 'cannot be less than 6 characters.';}
      
  if (!values.phone) {
      errors.phone = 'Required';
    } 
    if (!azPhoneNumberRegExp.test(values.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if(!values.agree){
     errors.agree = 'click agree'
    }

  return errors;
};


function Forms() {
  const navigate = useNavigate();
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       password:'',
       phone:'',
       agree: false
     },
     validate,
     onSubmit: values => {
       console.log(values)
       let obj={
        firstName: values.firstName,
        lastName:values.lastName,
        email:values.email,
        password:values.password,
        phone:values.phone,
       }
       localStorage.setItem("values", JSON.stringify(obj));
     },
   });
  return (
<>  <form action="" className='forms'>
            <div className='input1'>
        <label htmlFor="First name">First name</label>
        <input className="Inputs" type="text" id="firstName"
      name="firstName"
      onChange={formik.handleChange}
      value={formik.values.firstName} />
       <ErrorMessage>{formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}</ErrorMessage> <br />
        <label htmlFor="Email or phone number">Email or phone number</label>
        <input id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email} className="Inputs" />
      <br />
    <ErrorMessage>{formik.errors.email ? <div>{formik.errors.email}</div> : null}</ErrorMessage>
    <br />
        <label htmlFor="Password">Password</label>
        <input id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      value={formik.values.password} className="Inputs" />
      <ErrorMessage>{formik.errors.password ? <div>{formik.errors.password}</div> : null}</ErrorMessage>
        <input type="checkbox" style={{marginTop:"17px"}}/>
    <label htmlFor="Remember me" style={{marginLeft:"5px"}}>Remember me</label><br />
    <input type="checkbox" name='agree' />
    <label htmlFor="Remember me" style={{marginLeft:"5px"}}>I agree to all the <span>Terms</span> and <span>Privacy policy</span> </label> <br />
    <ErrorMessage>{formik.errors.agree ? <div>{formik.errors.agree}</div> : null}</ErrorMessage>
        </div>
        <div className='input2'> 
        <label htmlFor="Last name">Last name</label>
        <input type="text" className="Inputs" id="lastName"
      name="lastName"
      onChange={formik.handleChange}
      value={formik.values.lastName}/> <br />
      <ErrorMessage> {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}</ErrorMessage> <br />
        <label htmlFor="">Date of birth (MM/DD/YY)</label>
        <div className='calendar' ><input id="phone"
      name="phone"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.phone}className="Inputs" />
      <br />
    <ErrorMessage>{formik.errors.phone ? <div>{formik.errors.phone}</div> : null} <br /></ErrorMessage>
      </div>

        <label htmlFor="Confirm password">Confirm password</label>
        <input id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      value={formik.values.password} className="Inputs"/>
      <br /><ErrorMessage>{formik.errors.password ? <div>{formik.errors.password}</div> : null}</ErrorMessage>
       <Link to="/register"><span id='span'>Forgot password?</span></Link> 

        </div>
        
        
    </form>
    <button className='btn1' type="submit">Create account</button>
    <button className='btn2' onClick={()=>{
      navigate ("/contact")
    }}><img src={img6} alt="" style={{marginRight:"8px"}} />Sign-in with google</button>
    <p id='text3'>Don’t have an account?<Link to="/blog"><span> Log In</span></Link></p>
    </>
    
    
  )
}

export default Forms