import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../../lib/constants/colors";

const Post = ({nickname, title, likecnt, url}) => {

  return(
    <PostContainer>
      <p>닉넴{nickname}</p>
      <StImg/>
      {url}
      <LikectnWrap>
        <LikeSymbol >❤️</LikeSymbol>
        <LikeCtnN>100{likecnt}</LikeCtnN>
      </LikectnWrap>
      <h3>타이틀{title}</h3>
    </PostContainer>
  )
}

export default Post;

const PostContainer = styled.div`
width: fit-content;
height: fit-content;
padding: 20px;
margin: 10px;
/* border: 2px solid ${colors.warmgray}; */
border-radius: 7px;
border: 0.5px solid gray;
border: 0.3px solid white;
box-shadow: 0px 0px 10px 4px rgba(100, 100, 100, 0.1);
`

const StImg = styled.img`
  width: 20vw;
  height: 20vh;

  background-color: blue;
`

const LikectnWrap = styled.div`
  display: flex;
  align-items: center;
`;

const heart = keyframes`
  from{
    filter: brightness(700%);
  }
  to{
    filter: brightness(100%);
  }
`;
const LikeSymbol = styled.div`

  cursor: pointer;  
  :hover {
    animation: ${heart} 0.3s linear ;
  }
`;


const LikeCtnN = styled.div`
  margin-top: 2px;
  margin-left: 6px;
  color: ${colors.black};
  font-weight: bold;
`