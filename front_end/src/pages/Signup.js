import React, { useState } from "react";
import loginImg from "../assets/logo1.png";
import { Link } from "react-router-dom";
import axios from 'axios';


function Signup() 
{
  const url = ""
  const [data, setData] = useState({
    name : "",
    email: "",
    password:"",
    phone:"",
    location:"",
  }

  )



 return(

  <div className="base-container" >
  <div className="header">Register</div>
  <div className="content">
    <div className="image">
      <img src={loginImg} />
    </div>
    <div className="form">
      <form>

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
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" placeholder="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input type="text" name="location" placeholder="location" />
      </div>
      <button class="btn btn-primary " id="submit" type="submit" >
          <Link to='/'>Register</Link>                    
      </button>
        
      </form>

    </div>
  </div>
 
  
  
</div>

 ); 
}

export default Signup;

