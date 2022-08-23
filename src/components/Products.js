import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  // Filter Data with Category Name
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5 flex-wrap">
          <button
            onClick={() => setFilter(data)}
            className="btn btn-outline-dark ml-0 m-1"
          >
            All
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="btn btn-outline-dark m-1"
          >
            Men's Clothing
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="btn btn-outline-dark m-1"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="btn btn-outline-dark m-1"
          >
            Jewelery
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="btn btn-outline-dark m-1"
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" key={product.id}>
              <div className="card p-4">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">{product.price}</p>
                  <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="">
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
