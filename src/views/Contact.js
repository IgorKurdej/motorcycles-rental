import React from 'react';
import Form from "../components/Form/Form";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Contact = () => {
    return (
        <Wrapper>
            <Form contact />
        </Wrapper>
    );
};

export default Contact;