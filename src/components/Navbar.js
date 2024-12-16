import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";


  const Navbar = (props) => {

  
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn= props.setIsLoggedIn;

    return (
    
    <div  className="flex justify-evenly  items-center w-11/12 py-4 mx-auto max-w-[1160px] ">   
  
        <Link  to="/"   >

        <img  src={logo} alt="Logo" width={160} height={32}  loading="lazy"  ></img>
 
         </Link>
  
    

      <nav>
      
      <ul  className="flex  gap-x-4  text-richblack-100">
        <li>
         <Link  to="/"     >Home</Link>
        </li>
        <li>
        <Link  to="/"   >About</Link>
        </li>
        <li>
        <Link   to="/"     >Contact</Link>
        </li>
      </ul>

      </nav>


    {/*  login----logout------signup-------dashboard----- */}
    <div  className="flex items-center gap-x-4">

         { !isLoggedIn &&
            <Link to="/login"  > 
            <button  className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border boredr-richblack-700 "
            > Log in </button>
            </Link>
        }

      

         { !isLoggedIn &&
            <Link to="signup"  >
              <button   className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border boredr-richblack-700 "
              > Sign up  </button>
             </Link>
            }

        { isLoggedIn &&
            <Link to="/"    > 

              <button  onClick = { () => {
              setIsLoggedIn(false);
              toast.success("Logged out ");
              }}   className="bg-richblack-800  text-richblack-100  py-[8px] px-[12px] rounded-[8px] border boredr-richblack-700 "
               > Log out </button>

            </Link>
        }
       
        { isLoggedIn &&
            <Link to="dashboard"   >
              <button   className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border boredr-richblack-700 "
              > Dashboard  </button>
             </Link>
        }
    </div>





  
     </div>
    )
  }
  
  export default Navbar
  










  
// const Navbar = (props) => {

//   let isLoggedIn = props.isLoggedIn;
//   let setIsLoggedIn = props.setIsLoggedIn;

// return (
//   <div className='flex justify-evenly'>

//       <Link to="/"> 
//           <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
//       </Link>

//       <nav>
//           <ul className='flex gap-3'>
//               <li>
//                   <Link to="/">Home</Link>
//               </li>
//               <li>
//                   <Link to="/">About</Link>
//               </li>
//               <li>
//                   <Link to="/">Contact</Link>
//               </li>
//           </ul>
//       </nav>

//       {/* Login - SignUp - LogOut - Dashboard */}
//       <div className='flex ml-5 mr-3 gap-3'>
//           { !isLoggedIn &&
//               <Link to="/login">
//                   <button>
//                       Login
//                   </button>
//               </Link>
//           }
//           { !isLoggedIn &&
//               <Link to="/signup">
//                   <button >
//                       Sign Up
//                   </button>
//               </Link>
//           }
//           { isLoggedIn &&
//               <Link to="/">
//                   <button onClick={() => {
//                       setIsLoggedIn(false);
//                       toast.success("Logged Out");
//                   }}>
//                       Log Out
//                   </button>
//               </Link>
//           }
//           { isLoggedIn &&
//               <Link to="/dashboard">
//                   <button>
//                       Dashboard
//                   </button>
//               </Link>
//           }
//       </div>
    
//   </div>
// )
// }

// export default Navbar
