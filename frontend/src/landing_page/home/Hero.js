import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Hero() {
   
    const navigate = useNavigate()
  
    const gotToNewPage=()=>{
      navigate("/signup");
    }
  
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button onClick={() => gotToNewPage()}  
          className="p-2 btn btn-primary fs-5 mb-5 "
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
