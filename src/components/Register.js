import React from "react";
import styled from "styled-components";
import CustomInput from "../re-use/CustomInput";

const RegisterMain = styled.div`
  background: #f7f7f7;
  height: calc(100vh - 78px);
  overflow-y: auto;
`;

const RegisterForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormChild = styled.div`
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 575px) {
    display: block;
  }
`;

const Register = () => {
  return (
    <RegisterMain>
      <h5 className="my-4 text-center bold text-uppercase">Register</h5>
      <RegisterForm className="container">
        <FormChild>
          <FormRow>
            <CustomInput type="text" placeholder="Type your name..." />
            <CustomInput type="email" placeholder="Type your email..." />
          </FormRow>
          <FormRow>
            <CustomInput type="text" placeholder="Type your id..." />
            <CustomInput type="text" placeholder="Type your designation..." />
          </FormRow>
          <FormRow>
            <CustomInput type="password" placeholder="Enter password" />
            <CustomInput type="password" placeholder="Re-Enter Password" />
          </FormRow>
          <button className="btn btn-outline-success d-block mx-auto mt-3">
            REGISTER
          </button>
        </FormChild>
      </RegisterForm>
    </RegisterMain>
  );
};

export default Register;
