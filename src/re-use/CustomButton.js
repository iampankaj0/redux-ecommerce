import React from "react";
import styled from "styled-components";

const ButtonMain = styled.div`
  width: 100%;
`;
const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
  background-color: #000;
  padding: 6px 17px;
`;

const CustomButton = ({ onClick, text, className }) => {
  return (
    <ButtonMain>
      <Button onClick={onClick} className={className}>
        {text}
      </Button>
    </ButtonMain>
  );
};

export default CustomButton;
