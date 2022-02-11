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

const SignUpFormInputs = ({signUpValues, onChange}) => {
    return (
        <Wrapper>
            <Input
                placeholder='imię'
                name='firstname'
                value={signUpValues.firstname}
                onChange={onChange}
            />
            <ErrorMessage />
            <Input
                placeholder='nazwisko'
                name='lastname'
                value={signUpValues.lastname}
                onChange={onChange}
            />
            <ErrorMessage />
            <Input
                type='email'
                placeholder='email'
                name='email'
                value={signUpValues.email}
                onChange={onChange}
            />
            <ErrorMessage />
            <Input
                placeholder='telefon'
                name='phone'
                value={signUpValues.phone}
                onChange={onChange}
            />
            <ErrorMessage />
            <Input
                type='password'
                placeholder='hasło'
                name='password'
                value={signUpValues.password}
                onChange={onChange}
            />
            <ErrorMessage />
            <Input
                type='password'
                placeholder='powtórz hasło'
                name='passwordConfirmation'
                value={signUpValues.passwordConfirmation}
                onChange={onChange}
            />
            <ErrorMessage />
        </Wrapper>
    );
};

export default SignUpFormInputs;