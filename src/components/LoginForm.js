import React, { useState } from "react";
import { AiOutlineEye ,   AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

        const LoginForm  = ({ setIsLoggedIn })  => {

          const navigate = useNavigate();
   
      const [ formData ,  setFormData ] = useState ({
        email: "" , password : "" 
          })
                

      const [ showPassword , setShowPassword ]  = useState(false) ;

       function changeHandler (event ) {
            setFormData ( ( prevData) => (
            {
                 ...prevData,
                [event.target.name]:event.target.value 

            }
            ))

       }
       
        function submitHandler(event) {
      event.preventDefault();
      setIsLoggedIn(true);
      toast.success("Logged In");
      console.log(" printing formData");
      console.log(formData)
      navigate("/dashboard");
  }

    return (
    
   <form  onSubmit={submitHandler}   className="flex flex-col w-full mt-6 gap-y-4" >

       <label className=" w-full ">

        <p  className="  text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
            Email Address <sup  className="text-pink-200"> * </sup>
        </p>
        <input
              required
              type="email"
              name="email"
            //   id="email"
            value={formData.email}
              onChange={changeHandler}
              
                 placeholder="Enter email id"
                 className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        >
        </input>

       </label>

       
       <label className=" w-full relative " >

        <p   className="  text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] "  >
             Password <sup  className="text-pink-200" >*</sup>
        </p>
        <input
               required
              type= { showPassword ? ("text") : ("password")}
              name="password"
            //   id="email"
           
              value={formData.password}
              onChange={changeHandler}
           placeholder="Enter password"
           className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        
        >
        </input>
       

        <span className=" absolute right-3 top-[38px] cursor-pointer  "
          onClick={ () =>  setShowPassword ( (prev) => !prev )  }    >

            {showPassword ? 
            ( <AiOutlineEyeInvisible  className={24}  fill='#AFB2BF'   /> ) : 
            ( <AiOutlineEye          className={24}  fill='#AFB2BF'   />  ) 
             }                      
        
        </span>
        <Link  to="#"  > 
             <p   className="text-xs mt-1 text-blue-100   max-w-max  ml-auto"   > Forgot Password </p>
        </Link>

       <button   className=" bg-yellow-50 rounded-[8px] w-full font-medium text-richblack-900 px-[12px] py-[8px] mt-6 ">
        Sign in
       </button>



       </label>




   </form>
    )
  }
  
  export default LoginForm;
  




