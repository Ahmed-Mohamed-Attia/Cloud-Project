import React from "react";
import {AllList} from '../productParts/productList';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import Navbar from '../components/Navbar';

function ProductInfo (props) {

    const successAlert = () => {
        Swal.fire({  
            title: 'Good job!',  
            text: 'added to cart successfully',
            icon: 'success'
          }); 
    }

    let cart = [];
    
    let { id } = useParams();
    let product_data = AllList.filter(product => product.id == id) ;
    return (
        <div>
            <Navbar/> 
                <div className="container">
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid" src={"../"+product_data[0].image} />
                                </div>
                                <div className="col-md-6 product_details">   
                                <h3>{product_data[0].name} </h3> 
                                <br/>    
                                <p>{product_data[0].price} L.E</p> 
                                <br/>    
                                <p>{product_data[0].description} </p>
                                <br/>    
                                <button  className="btn btn-primary buy-button" onClick={successAlert}>Add to cart</button>
                                    <cartAlert name={product_data[0].name} />
                                </div>
                            </div>
                        </div>

        </div>
        
    )
    
}

export default ProductInfo