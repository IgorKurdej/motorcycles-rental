import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 12px;
  width: 100%;
  color: red;
  height: 14px;
  padding: 0 5px;
  text-align: right;
  margin-bottom: 2px;
`

const ErrorMessage = ({ message }) => (
    <Wrapper>{message}</Wrapper>
);

export default ErrorMessage;