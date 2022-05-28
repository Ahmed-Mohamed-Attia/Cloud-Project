import React from "react";

import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css'


import logo from '../assets/logo1.png';
import { Link } from "react-router-dom";
import '../styles/style.css'
function Navbar()
{
    return(
        
        <div className='navbar'> 
        <div className='leftSide'>
            <img src={logo} alt='logo' />
        </div>
        <div className='rightSide'>
            <Link to='/Home'>Home</Link>
            <Link to='/Categories'>Categories</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/'>Log Out</Link>

            <form class="form-inline my-2 my-lg-0" method="GET" action="index.php">
            <input class="form-control mr-sm-2" name="k" type="search" placeholder="Search" aria-label="Search"/>
        </form>

        </div>
    </div>
    )
}
export default Navbar