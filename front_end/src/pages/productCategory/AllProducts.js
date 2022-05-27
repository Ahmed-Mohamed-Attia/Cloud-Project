import React from "react";
import { AllList } from "../../productParts/productList";
import ProductItem from "../../productParts/productItem";
import { placements } from "@popperjs/core";

function AllProducts()
{
    return(
        <div className="container">
            <div className="product">
                <h3 className="text-left py-2" id="pro">All</h3>
                <div className="row justify-content-center text-left" >
                    
                {AllList.map((pl)=>{
                        return (
                            <ProductItem id={pl.id} image={pl.image} name={pl.name} price={pl.price} description={pl.description}></ProductItem>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AllProducts;