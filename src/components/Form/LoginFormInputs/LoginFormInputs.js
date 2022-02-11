import React from 'react';
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
`

const LoginFormInputs = ({loginValues, onChange}) => {
    return (
        <Wrapper>
            <Input
                type='email'
                placeholder='email'
                name='email'
                value={loginValues.name}
                onChange={onChange}
            />
            <ErrorMessage />
            <Input
                type='password'
                placeholder='hasło'
                name='password'
                value={loginValues.name}
                onChange={onChange}
            />
            <ErrorMessage />
        </Wrapper>
    );
};

export default LoginFormInputs;