import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";
// import Navbar from "../Navbar";
// import Footer from "../Footer";

function HomePage() {
  return (
    <>
      {/* <Navbar /> it is already used in index.js for all components*/}  
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
