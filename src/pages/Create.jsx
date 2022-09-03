import React from "react";
import styled from "styled-components";
import CreateForm from "../components/CreateForm";
import Header from "../components/Header";

const Create = () => {
  return (
    <StAddForm>
      <Header />
      <CreateForm />
    </StAddForm>
  );
};

export default Create;

const StAddForm = styled.div`
  padding-top: 140px;
`;