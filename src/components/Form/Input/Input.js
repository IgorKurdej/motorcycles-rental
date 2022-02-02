import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    width: 60%;
    margin-bottom: 10px;
    padding: 5px;
    outline: 0;
    border-width: 0 0 2px;
    font-size: 16px;
    font-weight: 100;
  
  :focus {
    border-bottom-color: forestgreen;
  }
`

const Input = ({type, placeholder, name, value, onChange}) => {
    return (
        <InputField
            type={type ? type : 'text'}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;