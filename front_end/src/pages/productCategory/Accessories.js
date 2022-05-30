import React, { Component } from "react";
import { AccessoriesList } from "../../productParts/productList";
import ProductItem from "../../productParts/productItem";

import axios from 'axios';

class Accessories extends Component
{
    state={
        products : []
        
    }
    componentDidMount()
    {
        axios.get("http://localhost/test/accessories.php")
        .then(res=>{
            this.setState(
                {
                    products: res.data
                }
            )
        }
        )
    }
    render()
    {
       return(
        <div className="Content">   
       
        {/* Start products */}
        <div className="container ">
                    <div className="product">
                        <h3 className="text-left py-2" id="pro">Products</h3>
                        <div className="row justify-content-center text-left">
                        {
                            this.state.products.map((item,key)=>{
                                return(
                                    <ProductItem id={item.id} image={"."+item.img} name={item.name} price={item.price} description={item.description}></ProductItem>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>        
       ) 
    }

}

export default Accessories;



// function Accessories()
// {
//     return(

//         <div className="container">
//             <div className="product">
//                 <h3 className="text-left py-2" id="pro">Accessories</h3>
//                 <div className="row justify-content-center text-left" >
//                 {AccessoriesList.map((pl)=>{
//                         return (
//                             <ProductItem id={pl.id} image={pl.img} name={pl.name} price={pl.price} description={pl.description}></ProductItem>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }