import React from "react";
import { useState } from "react";
import "./login.css"


function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };
  const Validation = (values) =>{
    let errors={}
    if(!values.username){
        errors.username="please enter a username"
    }
    else if(values.username.length<5){
        errors.username="username must be at least 5 characters"
    }
    else if(values.username.length>=5){
        errors.username="great"
    }

    if(!values.password){
        errors.password="please enter a password"
    }
    else if(values.username.length<9){
        errors.password="password must be at least 9 characters"
    }
    else if (values.password.length>=9){
        errors.password="great"
    }
    return errors;
}
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="label">
          <label>Username</label>
        </div>

        <div className="input">
          <input
            type="text"
            value={values.username}
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
        </div>
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        <div className="label">
          <label>Password</label>
        </div>
        <div className="input">
          <input
            type="password"
            value={values.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
