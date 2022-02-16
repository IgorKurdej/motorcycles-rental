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

const SignUpFormInputs = ({register, errors}) => {
    return (
        <Wrapper>
            <Input
                placeholder='Imię'
                name='firstname'
                register={register}
            />
            <ErrorMessage message={errors.firstname?.message}/>
            <Input
                placeholder='Nazwisko'
                name='lastname'
                register={register}
            />
            <ErrorMessage message={errors.lastname?.message}/>
            <Input
                placeholder='Email'
                name='email'
                register={register}
            />
            <ErrorMessage message={errors.email?.message}/>
            <Input
                placeholder='Telefon'
                name='phone'
                register={register}
            />
            <ErrorMessage message={errors.phone?.message}/>
            <Input
                type='password'
                placeholder='Hasło'
                name='password'
                register={register}
            />
            <ErrorMessage message={errors.password?.message}/>
            <Input
                type='password'
                placeholder='Powtórz hasło'
                name='passwordConfirmation'
                register={register}
            />
            <ErrorMessage message={errors.passwordConfirmation?.message}/>
        </Wrapper>
    );
};

export default SignUpFormInputs;