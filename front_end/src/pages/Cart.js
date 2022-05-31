import {AllList} from '../productParts/productList';
import ProductItem from "../productParts/productItem";
import Navbar from '../components/Navbar';
import React, { Component } from "react";
import axios from 'axios';

class Cart extends Component
{
    state={
        products : []
        
    }
    
    componentDidMount()
    {
        axios.get("http://localhost/test/cart.php")
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
               
            <Navbar/>
            
        
       
        {/* Start products */}
        <div className="container ">
                    <div className="product">
                        <h3 className="text-left py-2" id="pro">My Cart</h3>
                        <div className="row justify-content-center text-left">
                        {
                            this.state.products.map((item,key)=>{
                                return(
                                    <ProductItem id={item.id} image={item.img} name={item.name} price={item.price} description={item.description}></ProductItem>
                                );
                            })
                        }
                        </div>
                    </div>
                    <button class="btn btn-primary buttonGray " id="submit" type="submit">
                               check out
                            </button>
                </div>

            </div>        
       ) 
    }

}

export default Cart;

// function Cart()
// {
    
//     return(
//         <div className="Content">
//             <Navbar/>
//             <h3 className="text-left py-2" id="pro">My Cart</h3>
//         </div>
            
//     );
// }