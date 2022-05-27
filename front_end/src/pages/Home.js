import React from "react";

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'; //Allows for server-side rendering.
import 'react-owl-carousel2/src/owl.theme.default.css';
import {AllList} from '../productParts/productList';
import ProductItem from "../productParts/productItem";
function Home() 
{
    const options = {
        items:5,
        nav: true,
        rewind: true,
        autoplay: true,
        margin:2,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
    };
    return (
        <div className="Content">             
            {/* // Start Slider  */}
            <div class="slider">
                <OwlCarousel options={options} >
                    {
                        AllList.map((item,key)=>{
                            return <div className="owl-item">
                                <div class="product_image">
                                    <img src={item.image} />
                                </div>
                                <div class="product_title">
                                    <a href="#">{item.name}</a>
                                </div>
                            </div>
                        })
                    }
                </OwlCarousel>
            </div>
                <br />
            {/* Start products */}
            <div className="container ">
                <div className="product">
                    <h3 className="text-left py-2" id="pro">Products</h3>
                    <div className="row justify-content-center text-left">
                    {
                        AllList.map((item,key)=>{
                            return(
                                <ProductItem id={item.id} image={item.image} name={item.name} price={item.price} description={item.description}></ProductItem>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )   
    
}
export default Home