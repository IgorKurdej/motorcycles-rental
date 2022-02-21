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

const LoginFormInputs = ({register, errors}) => {
    return (
        <Wrapper>
            <Input
                type='email'
                placeholder='email'
                name='email'
                register={register}
                // value={loginValues.name}
                // onChange={onChange}
            />
            <ErrorMessage message={errors.email?.message}/>
            <Input
                type='password'
                placeholder='hasło'
                name='password'
                register={register}
                // value={loginValues.name}
                // onChange={onChange}
            />
            <ErrorMessage message={errors.password?.message}/>
        </Wrapper>
    );
};

export default LoginFormInputs;