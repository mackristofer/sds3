import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";

function Routs() {
    return (
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Home/>}/>
                
        <Route  path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        
        </BrowserRouter>
    );
  }
  
  export default Routs;