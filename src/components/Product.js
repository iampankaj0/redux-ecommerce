import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSingleProduct = async () => {
      setLoading(true);
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(response);
      try {
        setProduct(response);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getSingleProduct();
  }, []);

  return <div>Product</div>;
};

export default Product;
