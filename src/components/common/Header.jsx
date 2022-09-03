import React from "react";
import styled from "styled-components";
import logo from '../../assets/logo.svg';
import { colors } from "../../lib/constants/colors";


const Header = () => {
  return (
    <HeaderWrap color={colors.warmgray}>
      <HeaderLogo src={logo} alt="logo" />
      <h1>나의 집밥 레시피</h1>
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
  width: 100vw;
  min-height: fit-content;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  background-color: ${props => props.color};
`

const HeaderLogo = styled.img`     
  
  height: 8vmin;
 
  pointer-events: none;
`

const UserWrap = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const StUser = styled.div`
  margin: 10px;
`