import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png"


 const Login = ({setIsLoggedIn}) => {

    return (

    <Template  
     title=" Welcome Back" 
     desc1="build skill for today , tomorrow and beyond."
    desc2=" Education to future-proof  your career. "
    image={loginImg}     
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    
    />
    )
  }
  
  export default Login;
  