import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar.js";
import Product from "./components/Product";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </div>
  );
};

export default App;
