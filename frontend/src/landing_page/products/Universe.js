import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {

  const navigate = useNavigate()
    const gotToNewPage=()=>{
      navigate("/signup");
    }
  return (

    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Stockora Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 ">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media/streakLogo.png" style={{width:"130px"}} />
          <p className="text-small text-muted">Algo & Strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" style={{width:"130px"}} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" style={{width:"130px"}}/>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" style={{width:"130px"}}/>
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png"style={{width:"130px"}} />
          <p className="text-small text-muted">Insurance</p>
        </div>
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

export default Universe;
