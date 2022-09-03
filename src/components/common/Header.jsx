import React from "react";
import styled from "styled-components";
import logo from '../../assets/logo.svg';
import { colors } from "../../lib/constants/colors";


const Header = () => {
  return (
    <HeaderWrap color={colors.warmgray}>
      <HeaderLogo src={logo} alt="logo" />
      <h1>Header</h1>7
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
  background-color: ${props => props.color};
`

const HeaderLogo = styled.img`     
  
  height: 12vmin;
  pointer-events: none;
`