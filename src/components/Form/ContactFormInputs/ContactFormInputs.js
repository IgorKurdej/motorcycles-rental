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

const ContactFormInputs = ({contactValues, onChange}) => {
    return (
        <Wrapper>
            <Input
                type='email'
                placeholder='email'
                name='email'
                value={contactValues.email}
                onChange={onChange}
            />
            <ErrorMessage />
            <Input
                placeholder='tytuł'
                name='title'
                value={contactValues.title}
                onChange={onChange}
            />
            <ErrorMessage/>
            <Input
                as='textarea'
                placeholder='wiadomość'
                name='message'
                value={contactValues.message}
                onChange={onChange}
            />
            <ErrorMessage />
        </Wrapper>
    );
};

export default ContactFormInputs;