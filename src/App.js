import React from "react";
import Login from "./components/login"
import Register from "./components/register"
import {BrowserRouter,Routes,Route} from "react-router-dom";




function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      
      <Route path="*" element={<div>not found</div>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
