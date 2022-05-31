import React , { Component } from "react";
import Navbar from '../components/Navbar';
import ProductItem from "../productParts/productItem";




import axios from 'axios';

class Profile extends Component
{
    state={
        products : [],
        user :[]
        
    }
    componentDidMount()
    {
        axios.get("http://localhost/test/history.php")
        .then(res=>{
            this.setState(
                {
                    products: res.data
                }
            )
        }
        )

        axios.get("http://localhost/test/profile.php")
        .then(res=>{
            this.setState(
                {
                    user: res.data
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
        <Navbar/>
        <div className="container ">
        <div className="product">
          <div className="row justify-content-center text-left">
        
              <div className="card-body text-center">
                {this.state.user.map((item,key)=>{
                    return(
                        <div>
                            <h1 className="fs-2 mb-3 font-weight-bold">
                                {item.name}
                         </h1>
                         <h1 className="fs-2 mb-3 font-weight-bold">
                            {item.email}
                         </h1>
                         <h1 className="fs-2 mb-3 font-weight-bold">
                           {item.phone}
                         </h1>
                         <h1 className="fs-2 mb-3 font-weight-bold">
                           {item.location}
                         </h1>

                        </div>
                    );
                })}
                    
              </div>

               
           </div>
        </div>
       </div>
                    <div className="product">
                        <h3 className="text-left py-2" id="pro">History</h3>
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
       ) 
    }

}







export default Profile;
//function Profile() {
//   return (
              
//     <div className="Content">
      // <Navbar/>
      // <div className="container ">
      //   <div className="product">
      //     <div className="row justify-content-center text-left">
        
      //         <div className="card-body text-center">
      //               <img
      //                   src="../imgs/1.jpg"
      //                   className="rounded-circle"
      //                   width="200px"
      //                   height="200px"
      //                 />
      //               <h1 className="fs-2 mb-3 font-weight-bold">
      //                   Hady Hassan 
      //                 </h1>
      //                 <h1 className="fs-2 mb-3 font-weight-bold">
      //                    hadyhassan@gmail.com
      //                 </h1>
      //                 <h1 className="fs-2 mb-3 font-weight-bold">
      //                   01284630902
      //                 </h1>
      //                 <h1 className="fs-2 mb-3 font-weight-bold">
      //                   Elhadra
      //                 </h1>
      //         </div>

               
      //      </div>
      //   </div>
      //  </div>
//     </div>
//   );
// }