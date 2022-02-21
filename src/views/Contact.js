import React from 'react';
import styled from "styled-components";
import FormContact from "../components/FormContact/FormContact";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Contact = () => {
    return (
        <Wrapper>
            <FormContact />
        </Wrapper>
    );
};

export default Contact;