import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const state = useSelector((state)=> state.handleCart)
  return (
    <section className="shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            My Collection
          </NavLink>
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
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in mr-1"></i> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ml-2">
                <i className="fa fa-user-plus mr-1"></i> Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ml-2">
                <i className="fa fa-shopping-cart mr-1"></i> Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
