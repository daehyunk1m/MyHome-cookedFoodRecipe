import React from "react";
import styled from "styled-components";

const Post = () => {

  return(
    <div>
      <div>닉네임</div>
      <StImg/>
      <div>
        <div>❤️</div>
        <div>99</div>
      </div>
      <div>title</div>
    </div>
  )
}

export default Post;

const StImg = styled.img`
  width: 15vw;
  height: 15vh;

  background-color: blue;
`