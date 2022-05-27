import React from "react";
import { ConsolesList } from "../../productParts/productList";
import ProductItem from "../../productParts/productItem";

function Consoles()
{
    return(
        <div className="container">
            <div className="product">
                <h3 className="text-left py-2" id="pro">Consoles</h3>
                <div className="row justify-content-center text-left" >
                {ConsolesList.map((pl)=>{
                        return (
                            <ProductItem id={pl.id} image={pl.image} name={pl.name} price={pl.price} description={pl.description}></ProductItem>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Consoles;