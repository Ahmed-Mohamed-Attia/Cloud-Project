import React, { Component } from "react";
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'; //Allows for server-side rendering.
import 'react-owl-carousel2/src/owl.theme.default.css';
import {AllList} from '../productParts/productList';
import ProductItem from "../productParts/productItem";
import Navbar from '../components/Navbar';

class Home extends Component
{
    options = {
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
    state={
        products : [],
        recommended:[]
    }

    componentDidMount()
    {
        axios.get("http://localhost/test/")
        .then(res=>{
            this.setState(
                {
                    products: res.data
                }
            )
        }
        )

        axios.get("http://localhost/test/recommendation.php")
        .then(res=>{
            this.setState(
                {
                    recommended: res.data
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
                {/* // Start Slider  */}
                <div class="slider">
                <h3 className="text-left py-2" id="pro">Recommended</h3>
                    <OwlCarousel options={this.options} >
                        {
                            this.state.recommended.map((item,key)=>{
                                return <div className="owl-item">
                                    <div class="product_image">
                                        <img src={item.img} />
                                    </div>
                                    <div class="product_title">
                                        <a href={"/product/"+item.id}>{item.name}</a>
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
                            this.state.products.map((item,key)=>{
                                return(
                                    <ProductItem id={item.id} image={item.img} name={item.name} price={item.price} description={item.description}></ProductItem>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home








































// function Home() 
// {
//     const options = {
//         items:5,
//         nav: true,
//         rewind: true,
//         autoplay: true,
//         margin:2,
//         loop:true,
//         autoplay:true,
//         autoplayTimeout:1000,
//         autoplayHoverPause:true,
//     };
//     return (
        

//     )   
    
// }
