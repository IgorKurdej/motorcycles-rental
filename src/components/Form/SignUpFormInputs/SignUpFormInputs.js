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
                placeholder='imię'
                name='firstname'
                register={register}
            />
            <ErrorMessage message={errors.firstname?.message}/>
            <Input
                placeholder='nazwisko'
                name='lastname'
                register={register}
            />
            <ErrorMessage message={errors.lastname?.message}/>
            <Input
                placeholder='email'
                name='email'
                register={register}
            />
            <ErrorMessage message={errors.email?.message}/>
            <Input
                placeholder='telefon'
                name='phone'
                register={register}
            />
            <ErrorMessage message={errors.phone?.message}/>
            <Input
                type='password'
                placeholder='hasło'
                name='password'
                register={register}
            />
            <ErrorMessage message={errors.password?.message}/>
            <Input
                type='password'
                placeholder='powtórz hasło'
                name='passwordConfirmation'
                register={register}
            />
            <ErrorMessage message={errors.passwordConfirmation?.message}/>
        </Wrapper>
    );
};

export default SignUpFormInputs;