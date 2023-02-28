import React from "react";
import "./register.css";
import { useState } from "react";

function Register() {
    const[values, setValues] = useState({
        username:"",
        firstName:"",
        lastName:"",
        gender:"",
        password:"",
        confirmPassword:"",
        

    });
    const[errors, setErrors] = useState({
        username:"",
        firstName:"",
        lastName:"",
        gender:"",
        password:"",
        confirmPassword:"",

    })
    const handleChange = (e)=>{
        setValues({...values,[e.target.name]:e.target.value})

    }
    const handleSubmit = (e)=>{

        e.preventDefault()
        setErrors(validation(values))
    }
    const validation = (values)=>{
        let errors={}
        if(!values.username){
        errors.username="please enter a username"
    }
    else if(values.username.length<5){
        errors.username="username must be at least 5 characters"
    }
    if(!values.firstName){
        errors.firstName="please enter a first name"
    }
    else if(values.firstName.length>=3){
        errors.firstName="enter valid name"
    
    }
    if(!values.lastName){
        errors.lastName="please enter a last name"
    }
    else if(values.lastName.length>=3){
        errors.lastName="enter valid name"
    
    }
    

    if(!values.password){
        errors.password="please enter a password"
    }
    else if(values.username.length<9){
        errors.password="password must be at least 9 characters"
    }
    if(!values.gender){
        errors.gender="please select gender"
    }
    else if(values.gender.male || values.gender.female){
        errors.gender="great"
    }

    if(!values.confirmPassword){
        errors.confirmPassword="please re-enter your password"
    }
     else if(values.password !== values.confirmPassword){
        errors.confirmPassword="not matching "
    }
    

    return errors;
    }    

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="label">
          <label>Username</label>
        </div>
        <div className="input">
          <input type="text" placeholder="username" value={values.username} name="username" onChange={handleChange} />
        </div>
        {errors.username && <div style={{color:"red"}}>{errors.username}</div>}
        <div className="label">
          <label>First Name</label>
        </div>
        <div className="input">
          <input type="text" placeholder="first name"  value={values.firstName} name="firstName" onChange={handleChange} />
        </div>
        {errors.firstName && <div style={{color:"red"}}>{errors.firstName}</div>}
        <div className="label">
          <label>Last Name</label>
        </div>
        <div className="input">
          <input type="text" placeholder="last name" value={values.lastName} name="lastName" onChange={handleChange} />
        </div>
        {errors.lastName && <div style={{color:"red"}}>{errors.lastName}</div>}
        <div className="label">
          <label>Gender</label>
        </div>
        <div className="gender " onClick={handleChange}>
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
        </div>
        {errors.gender && <div style={{color:"red"}}>{errors.gender}</div>}

        <div className="label">
          <label>Password</label>
        </div>
        <div className="input">
          <input type="password" placeholder="username" value={values.password} name="password" onChange={handleChange} />
        </div>
        {errors.password && <div style={{color:"red"}}>{errors.password}</div>}
        <div className="label">
          <label>Confirm-Password</label>
        </div>
        <div className="input">
          <input type="password" placeholder="username" value={values.confirmPassword} name="confirmPassword" onChange={handleChange} />
        </div>
        {errors.confirmPassword && <div style={{color:"red"}}>{errors.confirmPassword}</div>}
        <div className="button">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
