import React from "react";
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import {BrowserRouter,Routes,Route} from "react-router-dom";
  




function App() {
  
  return (
    <BrowserRouter>
    <Routes>

     
      <Route path="*" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      
     

    </Routes>
    </BrowserRouter>
  );
}

export default App;
