import React from 'react';
import styled from 'styled-components';
import FormSignupLogin from "../components/FormSignupLogin/FormSignupLogin";

const Wrapper = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  justify-content: center;
`

const Login = () => {
    return (
        <Wrapper>
            <FormSignupLogin />
        </Wrapper>
    );
};

export default Login;