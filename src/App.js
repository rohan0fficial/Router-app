 

import { Route , Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

 function App  ()  {

  const [ isLoggedIn , setIsLoggedIn ] = useState(false);


  return (
  
  <div  className="w-screen h-screen flex flex-col bg-richblack-800"    >   

    
    <Navbar  isLoggedIn={isLoggedIn}   setIsLoggedIn={ setIsLoggedIn}  ></Navbar>
  
    <Routes>

     <Route  path="/"             element={<Home   setIsLoggedIn={ setIsLoggedIn}  ></Home>}             ></Route>
     <Route  path="/signup"      element={<Signup   setIsLoggedIn={ setIsLoggedIn}  ></Signup>}  ></Route>
     <Route  path="/login"        element={<Login  setIsLoggedIn={ setIsLoggedIn}  ></Login>}     ></Route>

     <Route  path="/dashboard"   element={
     <PrivateRoute isLoggedIn={isLoggedIn} >
         <Dashboard></Dashboard>
     </PrivateRoute>
     }
       ></Route>
   
    </Routes>


  </div>
  )
}

export default App;
