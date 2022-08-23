import React from "react";
import styled from "styled-components";
import CustomInput from "../re-use/CustomInput";

const LoginMain = styled.div`
  background: #f7f7f7;
  height: calc(100vh - 78px);
  overflow-y: auto;
`;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormChild = styled.div`
  width: 50%;

  @media (max-width: 991px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 575px) {
    width: 100%;
  }
`;

const Login = () => {
  return (
    <LoginMain>
      <h5 className="my-4 text-center bold text-uppercase">Login</h5>
      <LoginForm className="container">
        <FormChild>
          <CustomInput type="text" placeholder="email" />
          <CustomInput type="password" placeholder="password" />
          <button className="btn btn-outline-dark d-block mx-auto mt-3">
            LOGIN
          </button>
        </FormChild>
      </LoginForm>
    </LoginMain>
  );
};

export default Login;
