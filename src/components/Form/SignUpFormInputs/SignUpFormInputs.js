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

const SignUpFormInputs = ({signUpValues, onChange, register, errors}) => {
    return (
        <Wrapper>
            <Input
                placeholder='imię'
                name='firstname'
                register={register}
                // value={signUpValues.firstname}
                // onChange={onChange}
            />
            <ErrorMessage message={errors.firstname?.message}/>
            <Input
                placeholder='nazwisko'
                name='lastname'
                register={register}
                // value={signUpValues.lastname}
                // onChange={onChange}
            />
            <ErrorMessage message={errors.lastname?.message}/>
            <Input
                placeholder='email'
                name='email'
                register={register}
                // value={signUpValues.email}
                // onChange={onChange}
            />
            <ErrorMessage message={errors.email?.message}/>
            <Input
                placeholder='telefon'
                name='phone'
                register={register}
                // value={signUpValues.phone}
                // onChange={onChange}
            />
            <ErrorMessage message={errors.phone?.message}/>
            <Input
                type='password'
                placeholder='hasło'
                name='password'
                register={register}
                // value={signUpValues.password}
                // onChange={onChange}
            />
            <ErrorMessage message={errors.password?.message}/>
            <Input
                type='password'
                placeholder='powtórz hasło'
                name='passwordConfirmation'
                register={register}
                // value={signUpValues.passwordConfirmation}
                // onChange={onChange}
            />
            <ErrorMessage message={errors.passwordConfirmation?.message}/>
        </Wrapper>
    );
};

export default SignUpFormInputs;