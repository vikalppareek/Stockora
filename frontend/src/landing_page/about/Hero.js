import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We kick-started operations on the 15th of August, 2024 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company <b>"Stockora"</b>
            which seems like a blend of two words: "Stock" and  perhaps a stylized
            suffix "ora." This could be derived from "ora," which in
            Latin means "hour" or "time." Putting it together, Stockora can be
            interpreted as "a platform for stocks in a timely or
            modern way."  
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have made
            us the biggest stock broker in India.
          </p>
          <p>
            At Stockora, we believe in empowering traders—whether you're a seasoned
            professional or just starting your journey. Our platform is designed to
            provide a seamless trading experience with cutting-edge tools,real-time
            market data, and advanced analytics.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            {/* <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a> */}
            We prioritize transparency, security, and user-friendly navigation
            to help you make informed decisions in a dynamic market environment.
            Stockora offers a wide range of financial instruments, including stocks,
            commodities, and more, ensuring diverse opportunities for all our users.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us. Join Stockora today and take control of your financial future
            with confidence.


          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
