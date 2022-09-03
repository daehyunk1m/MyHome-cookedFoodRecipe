import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../lib/constants/colors";
import Header from "../common/Header";

const LogIn = () => {
// const [value, setValue] = useState('');
// const { loginId, password } = input
// const user = {
//   loginId: "",
//   password: ""
// };

  return(
    <div>
      <Header/>
      <div>
        <div>
          <label htmlFor="loginId">아이디</label>
          <input name="loginId" id="loginId" type="text" />
          <label htmlFor="password">비밀번호</label>
          <input name="password" id="password" type="password" />
          <button color={colors.green}>로그인</button>
        </div>
        <hr/>
        <button color={colors.yellow}>카카오톡으로 로그인</button>
      </div>
    </div>
  )
}

export default LogIn;

const StLabel = styled.label`
  
`