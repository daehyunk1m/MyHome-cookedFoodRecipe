import React from "react";
import styled from "styled-components";
import logo from '../../assets/logo.svg';
import { colors } from "../../lib/constants/colors";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrap color={colors.warmgray}>
      
      <HeaderLogo src={logo} alt="logo" onClick={() => navigate(`/api/postlist`)}/>

      <HeaderTitle color={colors.green} onClick={() => navigate(`/api/postlist`)}>나의 집밥 레시피</HeaderTitle>
      <UserWrap>
        <StUser >닉네임</StUser>
        <UserNav onClick={() => {navigate(`/auth/signup`)}}>로그인</UserNav>
        <UserNav onClick={() => {navigate(`/auth/login`)}}>회원가입</UserNav>
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
  
`

const HeaderLogo = styled.img`     
  height: 8vmin;
  cursor: pointer;
  `

  const HeaderTitle = styled.h1`
  font-size: 5.5vw; 
  color: ${props => props.color};
  cursor: default;
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
  cursor: default;
`
const UserNav = styled(StUser)`
  cursor: pointer;
`