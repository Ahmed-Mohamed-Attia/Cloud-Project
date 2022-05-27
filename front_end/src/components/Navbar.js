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
            <Link to='/'>Home</Link>
            <Link to='/Categories'>Categories</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
    )
}
export default Navbar