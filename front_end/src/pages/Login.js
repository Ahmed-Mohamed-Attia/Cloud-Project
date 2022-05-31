import React from "react";
import loginImg from "../assets/logo1.png";
import { Link } from "react-router-dom";

function Login()
{
  return( 
  <div className="base-container" >
     <div className="header">Login</div>
     <div className="content">
       <div className="image">
         <img src={loginImg} />
       </div>
       <div className="form">
         <form method="POST" action="http://localhost/test/login.php"> 
            <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" placeholder="password" />
                    </div>
                    <button class="btn btn-primary " id="submit" type="submit" >
     Login                    
    </button>

         </form>
        
       </div>
     </div>
     
     
    <a><Link to='/Signup'>Signup</Link>  </a>
     
   </div>);
}
export default Login;



 