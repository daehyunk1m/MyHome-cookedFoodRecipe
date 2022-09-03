import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Post from "../components/list/Post";
import { colors } from "../lib/constants/colors";


const List = () => {
  
  return(
    <FirstDiv>
      <Header/>
      List 페이지 <br/>
      <TestBtn color={colors.red}>red</TestBtn>
      <TestBtn color={colors.green}>green</TestBtn>
      <TestBtn color={colors.yellow}>yellow</TestBtn>
      <TestBtn color={colors.pink}>pink</TestBtn>
      <Post></Post>
    </FirstDiv>
  )
  

  
}

export default List;

const FirstDiv = styled.div`
  height: 100vh;
  /* background-color: green; */
`

const TestBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: ${props => props.color};
`
