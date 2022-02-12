import React from 'react';
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
`

const ContactFormInputs = ({register, errors}) => {
    return (
        <Wrapper>
            <Input
                placeholder='email'
                name='email'
                register={register}
            />
            <ErrorMessage message={errors.email?.message} />
            <Input
                placeholder='tytuł'
                name='title'
                register={register}
            />
            <ErrorMessage message={errors.title?.message} />
            <Input
                as='textarea'
                placeholder='wiadomość'
                name='message'
                register={register}
            />
            <ErrorMessage message={errors.message?.message} />
        </Wrapper>
    );
};

export default ContactFormInputs;