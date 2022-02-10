import React from 'react';
import Input from "../Input/Input";
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
            <Input
                type='password'
                placeholder='hasło'
                name='password'
                value={loginValues.name}
                onChange={onChange}
            />
        </Wrapper>
    );
};

export default LoginFormInputs;