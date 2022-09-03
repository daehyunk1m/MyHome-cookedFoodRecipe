import React from "react";
import styled from "styled-components";
import SignupForm from "../components/SignupForm";
import Header from "../components/Header";

const Signup = () => {
  return (
    <StAddForm>
      <Header />
      <SignupForm />
    </StAddForm>
  );
};

export default Signup;

const StAddForm = styled.div`
  padding-top: 140px;
`;