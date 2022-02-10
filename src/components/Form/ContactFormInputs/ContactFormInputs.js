import React from 'react';
import Input from "../Input/Input";
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
            <Input
                placeholder='tytuł'
                name='title'
                value={contactValues.title}
                onChange={onChange}
            />
            <Input
                as='textarea'
                placeholder='wiadomość'
                name='message'
                value={contactValues.message}
                onChange={onChange}
            />
        </Wrapper>
    );
};

export default ContactFormInputs;