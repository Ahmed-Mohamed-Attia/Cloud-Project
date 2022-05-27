import React from "react";
import '../styles/Category.css';
import { Link } from "react-router-dom";
// import { useLocation } from 'react-router-dom'

function SecNavbar()
{    
    return(
        <div className='secondNavbar'>
            <div className='leftSide'>
                <Link to=''>All</Link>
                <Link to='proccessors'>Proccessors</Link>
                <Link to='accessories'>Accessories</Link>
                <Link to='consoles'>Consoles</Link>
            </div>
    </div>
    )
}
export default SecNavbar