import React from "react";
import styled from "styled-components";

const MainSection = styled.div`
  padding: 10px;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  font-size: 18px;
  padding: 5px;
  transition: 0.4s;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #fff;
    box-shadow: 2px 2px 2px 0px #d9d9d9;
  }
`;

const CustomInput = ({ type, onChange, placeholder }) => {
  return (
    <MainSection>
      <Input type={type} onChange={onChange} placeholder={placeholder} />
    </MainSection>
  );
};

export default CustomInput;
