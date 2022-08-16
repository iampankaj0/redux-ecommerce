import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
  return (
    <section className="shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
          <a className="navbar-brand fw-bold fs-4" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <a href="#" className="btn btn-outline-dark">
                <i className="fa fa-sign-in mr-1"></i> Login
              </a>
              <a href="#" className="btn btn-outline-dark ml-2">
                <i className="fa fa-user-plus mr-1"></i> Register
              </a>
              <a href="#" className="btn btn-outline-dark ml-2">
                <i className="fa fa-shopping-cart mr-1"></i> Cart (0)
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
