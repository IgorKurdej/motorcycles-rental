import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    width: 60%;
    min-height: ${props => props.as && '250px'};
    resize: none;
    margin-bottom: 10px;
    padding: 5px;
    outline: 0;
    border-width: 0 0 2px;
    font-size: 17px;
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