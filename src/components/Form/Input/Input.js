import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    width: 100%;
    min-height: ${props => props.as && '250px'};
    resize: none;
    //margin-bottom: 20px;
    padding: 2px 5px;
    outline: 0;
    border-width: 0 0 1px;
    font-size: 16px;
    background-color: white;
    
  
  :focus {
    border-bottom-color: forestgreen;
  }
`

const Input = ({type, placeholder, name, value, onChange, disabled, as}) => {
    return (
        <InputField
            type={type ? type : 'text'}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            as={as}
        />
    );
};

export default Input;