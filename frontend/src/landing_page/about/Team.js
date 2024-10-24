import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/vikalppareek.jpeg"
            style={{ borderRadius: "70%", width: "60%" }}
          />
          <h4 className="mt-5">Vikalp Pareek</h4>
          <h6>Co-Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Stockora was founded by Vikalp Pareek and Yogesh Yadav, two passionate 
          individuals with a shared vision of making trading more accessible, 
          transparent, and empowering for everyone.
          </p>
          <p>
           We are a CSE Student of Amity University. Together, we recognized the 
           need for a user-friendly trading platform that caters to both newcomers
           and seasoned traders. Stockora was born from our desire to create a 
           space where users can access real-time data, cutting-edge tools, and 
           seamless trading features, all in one place.
          </p>
          <p>Playing Cricket is his zen.</p>
          <p>
          Connect on <a href="https://www.instagram.com/pareek.vikalp_28/" style={{ textDecoration: "none" }}>Instagram</a> /
          {" "}
            <a href="https://www.linkedin.com/in/vikalppareek/" style={{ textDecoration: "none" }}>Linkedin</a> /
          {" "} 
             <a href="https://github.com/vikalppareek" style={{ textDecoration: "none" }}>Github</a> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
