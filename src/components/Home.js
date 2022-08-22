import React from "react";
import Products from "./Products";
import image from '../assets/hero-bg.webp'

const Home = () => {
  return (
    <div>
      <div class="card border-0">
        <img class="card-img" src={image} alt="Card image" />
        {/* <div class="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">

          <h5 class="card-title">Card title</h5>
          <p class="card-text">
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
