import React from "react";
import Category from "../components/SecNavbar";
import AllProducts from "../pages/productCategory/AllProducts";
import Accessories from "../pages/productCategory/Accessories";
import Consoles from "../pages/productCategory/Consoles";
import Proccessors from "../pages/productCategory/Proccessors";
import {Route, Routes  } from "react-router-dom";


function Categories() 
{
    return (
        <div>
            <Category/>
            <Routes>
             <Route path='/' element={<AllProducts/>}></Route>
             <Route path='/accessories' element={<Accessories/>}></Route>
             <Route path='/consoles' element={<Consoles/>}></Route>
             <Route path='/proccessors' element={<Proccessors/>}></Route>
      </Routes>
        </div>
    )   
}

export default Categories;