import React from "react";
import Products from "./Products";
import image from '../assets/hero-bg.webp'

const Home = () => {
  return (
    <div>
      <div className="card border-0">
        <img className="card-img" src={image} alt="Card image" />
        {/* <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div classNameName="container">

          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        </div> */}
      </div>
      <Products />
    </div>
  );
};

export default Home;
