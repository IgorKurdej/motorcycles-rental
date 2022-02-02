import React from 'react';
import styled from 'styled-components';
import Form from "../components/Form/Form";

const Wrapper = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  justify-content: center;
  //background-color: black;
`

const Login = () => {
    return (
        <Wrapper>
            <Form />
        </Wrapper>
    );
};

export default Login;