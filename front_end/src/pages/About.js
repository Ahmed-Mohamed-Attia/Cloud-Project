import React from "react";

function About() {
 
  const team = [
    {
      img: "../imgs/1.jpg",
      name: "Hady Hassan Saleh",
      id: 203161,
    },
    {
      img: "../imgs/2.jpg",
      name: "Mohamed Khaled Ahmed",
      id: 203115,
    },
    {
      img: "../imgs/3.jpg",
      name: "Omar Elwazzery",
      id: 203077,
    },
    {
      img: "../imgs/4.jpg",
      name: "Yahya Mahmoud",
      id: 203165,
    },
    {
      img: "../imgs/5.jpg",
      name: "Ahmed Mohamed Attia",
      id: 203014,
    },
    {
      img: "../imgs/6.jpg",
      name: "Omar Abdelfattah",
      id: 203080,
    },
  ];
  return (
         
         
           
    <div className="Content">
      <div className="container ">
        <div className="product">
        <div className="row justify-content-center text-left">
        
        <p id="para">
            
            <h1 id="para2">Who we are</h1>
            <h4>
            we are a website that is concerned about serving the customers and helping them with getting experience
            with the hardware and everything related to the computers whether it's accessories,processors or consoles
            and helping the users to choose the best products for them and assembling their PCs.
            </h4>
            </p>
        <h1 className="text" >Our Team </h1>
            {team.map((team, key) => {
              return (
                  <div className="card col-md-3">
                    <div className="card-body text-center">
                      <img
                        src={team.img}
                        className="rounded-circle"
                        width="200"
                        height="200"
                      />
                      <h5 className="card-title mt-2 mb-1">{team.name}</h5>{" "}
                      <span className="fs-2 mb-3 font-weight-bold">
                        {team.id}
                      </span>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
