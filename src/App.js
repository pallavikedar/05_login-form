import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <form>
        <div className="label">
          <label>Username</label>
        </div>

        <div className="input">
          <input type="text" placeholder="username" />
        </div>

        <div className="label">
          <label>Password</label>
        </div>
        <div className="input">
          <input type="password" placeholder="password" />
        </div>
        <div className="button">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
