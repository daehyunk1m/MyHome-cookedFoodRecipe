import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { colors } from "../lib/constants/colors";


const List = (props) => {
  
  return(
    <FirstDiv>
      <Header/>
      List 페이지 <br/>
      <TestBtn color={colors.red}></TestBtn>
      <TestBtn color={colors.green}></TestBtn>
      <TestBtn color={colors.yellow}></TestBtn>
      <TestBtn color={colors.pink}></TestBtn>
    </FirstDiv>
  )
  

  
}

export default List;

const FirstDiv = styled.div`
  background-color: green;
`

const TestBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: ${props => props.color};
`
