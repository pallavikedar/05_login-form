import React from "react";
import {useState} from "react";
import "./App.css";
import Validation from "./validation";

function App() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className="App">
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
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}
        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
