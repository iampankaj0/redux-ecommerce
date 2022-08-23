import React from "react";
import { useAlert } from "react-alert";
// import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { delCart } from "../redux/action";
import sadNotification from "../assets/sadNotification.gif";

const MainDiv = styled.section`
  background: #f7f7f7;
  height: calc(100vh - 78px);
  overflow-y: auto;
`;

const HeadingTop = styled.h1`
  text-align: center;
  font-size: 18px;
  margin-bottom: 15px;
  color: #757575;
  text-transform: uppercase;
`;

const ItemSection = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
`;
const ItemImage = styled.img`
  width: 70px;
  height: auto;
  margin-right: 15px;
`;
const ItemTitle = styled.h4`
  font-size: 16px;
  color: #757575;
  margin-bottom: 10px;
`;

const TotalCost = styled.h5`
  font-size: 15px;
  color: #000;
  margin: 0;
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  background: transparent;
  border: none;
  color: red;
  font-size: 20px;
  font-weight: 500;
`;

const Cart = () => {
  const alert = useAlert();

  const cartProducts = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();
  const handleRemove = (product) => {
    dispatch(delCart(product));
    alert.success("Product Removed from Cart");
  };

  const ShowCartProducts = () => {
    return (
      <>
        {cartProducts.map((item, id) => {
          const { image, title, qty, price } = item;
          return (
            <ItemSection key={id}>
              <ItemImage src={image} alt={title} />
              <div>
                <ItemTitle>{title}</ItemTitle>
                <TotalCost className="lead fw-bold">
                  {qty} x $ {price} = $ {qty * price}
                </TotalCost>
              </div>
              <Button onClick={() => handleRemove(item)} title="Remove Item">
                x
              </Button>
            </ItemSection>
          );
        })}
      </>
    );
  };

  const NoProducts = () => {
    return (
      <div>
        <img
          className="d-block mx-auto"
          src={sadNotification}
          alt="sadNotification"
        />
        <h5 className="my-4 text-center">Your Cart is empty</h5>
      </div>
    );
  };

  return (
    <MainDiv>
      <div className="container py-4">
        <HeadingTop>cart</HeadingTop>

        {cartProducts.length === 0 && <NoProducts />}
        {cartProducts.length !== 0 && <ShowCartProducts />}
      </div>
    </MainDiv>
  );
};

export default Cart;
