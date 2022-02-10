import React from 'react';
import Input from "../Input/Input";
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
            <Input
                placeholder='nazwisko'
                name='lastname'
                value={signUpValues.lastname}
                onChange={onChange}
            />
            <Input
                type='email'
                placeholder='email'
                name='email'
                value={signUpValues.email}
                onChange={onChange}
            />
            <Input
                placeholder='telefon'
                name='phone'
                value={signUpValues.phone}
                onChange={onChange}
            />
            <Input
                type='password'
                placeholder='hasło'
                name='password'
                value={signUpValues.password}
                onChange={onChange}
            />
            <Input
                type='password'
                placeholder='powtórz hasło'
                name='passwordConfirmation'
                value={signUpValues.passwordConfirmation}
                onChange={onChange}
            />
        </Wrapper>
    );
};

export default SignUpFormInputs;