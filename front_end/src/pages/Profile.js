import React from "react";
import Navbar from '../components/Navbar';

function Profile() {
  return (
              
    <div className="Content">
      <Navbar/>
      <div className="container ">
        <div className="product">
          <div className="row justify-content-center text-left">
        
              <div className="card-body text-center">
                    <img
                        src="../imgs/1.jpg"
                        className="rounded-circle"
                        width="200px"
                        height="200px"
                      />
                    <h1 className="fs-2 mb-3 font-weight-bold">
                        Hady Hassan 
                      </h1>
                      <h1 className="fs-2 mb-3 font-weight-bold">
                         hadyhassan@gmail.com
                      </h1>
                      <h1 className="fs-2 mb-3 font-weight-bold">
                        01284630902
                      </h1>
                      <h1 className="fs-2 mb-3 font-weight-bold">
                        Elhadra
                      </h1>
              </div>

              <h3 className="text-left py-2" id="pro">History</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
