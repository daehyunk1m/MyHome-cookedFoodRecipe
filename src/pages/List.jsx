import React from "react";
import styled from "styled-components";
import { colors } from "../lib/constants/colors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import Post from "../components/list/Post";


const List = () => {
  const navigate = useNavigate()
  // const recipeContents = useSelector((module) => module.recipe.recipe) 
  
  return(
    <div>
      <Header />
      <BtnWrap>
          <TestBtn color={colors.black}
            onClick={() => navigate(`/api/postlist/create`)}
          >등록하기</TestBtn>
      </BtnWrap>
      <PostContainer>
        <Post /><Post /><Post /><Post />
        <Post />
      </PostContainer>
    </div>
  )
};

export default List;

const PostContainer = styled.div`
  width: 95vw;
  margin: auto;
  
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  
`

const BtnWrap = styled.div`
  width: 100vw;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TestBtn = styled.button`
  width: 15%;
  height: 40%;
  border: none;
  border-radius: 6px;
  background-color: ${props => props.color};

  color: white;
  font-size: 1rem;
  font-weight: 900;

  &:hover{
        font-weight: 900;
        background-color: ${colors.red};
        color: white;
        cursor: pointer;
    }

  
`
