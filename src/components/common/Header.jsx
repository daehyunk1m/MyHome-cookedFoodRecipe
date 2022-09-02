import React from "react";
import styled from "styled-components";
import logo from './logo.svg';


const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLogo src={logo} alt="logo" />
      <h1>Header</h1>
    </HeaderWrap>
  )
}

export default Header;

const HeaderWrap = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`

const HeaderLogo = styled.img`     
  
  height: 12vmin;
  pointer-events: none;
`