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
                <form class="form-inline my-1 my-lg-0" method="GET" action="/Categories">
                   <input class="form-control mr-sm-1" name="k" type="search" placeholder="Search" aria-label="Search" />
             </form>
            </div>
    </div>
    )
}
export default SecNavbar