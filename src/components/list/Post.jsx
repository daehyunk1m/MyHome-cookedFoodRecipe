import React from "react";
import styled from "styled-components";

const Post = ({nickname, title, likecnt, url}) => {

  return(
    <div>
      <p>{nickname}</p>
      <StImg/>
      {url}
      <div>
        <div >❤️</div>
        <div>{likecnt}</div>
      </div>
      <div>{title}</div>
    </div>
  )
}

export default Post;

const StImg = styled.img`
  width: 20vw;
  height: 20vh;

  background-color: blue;
`