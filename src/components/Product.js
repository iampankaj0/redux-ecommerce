import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { addCart } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch()

  const addProduct = (data) =>{
    dispatch(addCart(data))
  }




  const getProduct = async () => {
    setLoading(true);
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    try {
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const Loading = () => {
    return (
    <div className="col-md-6">
      Loading...
    </div>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img className="d-block mx-auto" src={data.image} alt={data.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{data.category}</h4>
          <h1 className="display-5">{data.title}</h1>
          <p className="lead fw-bolder">
            Rating {data.rating && data.rating.rate}
            <i className="fa fa-star ms-1"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {data.price}</h3>
          <p className="lead"> {data.description} </p>
          <button onClick={()=> addProduct(data)} className="btn btn-outline-dark px-4 py-2 mr-3">Add To Cart</button>
          <NavLink to="/cart" className="btn btn-dark px-4 py-2">Go To Cart</NavLink>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
