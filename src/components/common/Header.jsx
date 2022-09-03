import React from "react";
import styled from "styled-components";
import logo from '../../assets/logo.svg';
import { colors } from "../../lib/constants/colors";


const Header = () => {
  return (
    <HeaderWrap color={colors.warmgray}>
      <HeaderLogo src={logo} alt="logo" />
      <HeaderTitle color={colors.green}>나의 집밥 레시피</HeaderTitle>
      <UserWrap>
        <StUser>닉네임</StUser>
        <StUser>로그인</StUser>
        <StUser>회원가입</StUser>
      </UserWrap>
    </HeaderWrap>
  )
}

export default Header;

const HeaderWrap = styled.div`
  height: 10vh;
  width: 100vw;
  min-height: fit-content;
  padding: 0px 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${props => props.color};
  /* pointer: cursor; */
`

const HeaderLogo = styled.img`     
  
  height: 8vmin;
 
  pointer-events: none;
`

const HeaderTitle = styled.h1`
  /* height: fit-content; */
  font-size: 6vw; 
  color: ${props => props.color};
  
  @media screen and (max-width: 800px){
   font-size : 10vw;
  }
`

const UserWrap = styled.div`
  width: 18vw;
  display: flex;
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 800px){

    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 48
    }
    https://fonts.google.com/icons
  } */
  
`

const StUser = styled.div`
  min-width: fit-content;
  margin: 6px;
  font-size: 0.8rem;
`