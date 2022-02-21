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
    border-color: #797878;
    font-size: 16px;
    background-color: white;
    
  :focus {
    border-bottom-color: forestgreen;
  }
`

const Input = ({type, value, placeholder, name, disabled, as, register}) => {
    return (
        <InputField
            type={type ? type : 'text'}
            placeholder={placeholder}
            value={value}
            name={name}
            disabled={disabled}
            as={as}
            autoComplete="nope"
            register={register}
        />
    );
};

export default Input;