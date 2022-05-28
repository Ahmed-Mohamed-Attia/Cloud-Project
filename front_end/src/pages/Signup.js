import React from "react";
import loginImg from "../assets/logo1.png";
import { Link } from "react-router-dom";


function Signup() 
{
 return(

  <div className="base-container" >
  <div className="header">Register</div>
  <div className="content">
    <div className="image">
      <img src={loginImg} />
    </div>
    <div className="form">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" placeholder="password" />
      </div>
    </div>
  </div>
 
  <button class="btn btn-primary " id="submit" type="submit" >
     <Link to='/'>Register</Link>                    
    </button>
  
</div>

 ); 
}

export default Signup;

