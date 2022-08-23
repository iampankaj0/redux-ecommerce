import React from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar.js";
import Product from "./components/Product";
import Products from "./components/Products";
import Register from "./components/Register";

const App = () => {

  const options = {
    timeout: 5000,
    position: positions.TOP_CENTER,
  };

  return (
    <div>
      <Provider template={AlertTemplate} {...options}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Provider>
    </div>
  );
};

export default App;
