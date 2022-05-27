import React from "react";


function ProductItem (props) {
    return (
        <div className="card col-md-3 text-center" >
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.price} L.E <br/> </p>
                <p className="card-text">{props.description} <br/> </p>
                <a href={"/product/"+props.id} className="btn btn-primary buy-button">Add To Cart</a>
            </div>
        </div>
    )
    
}

export default ProductItem