import React from 'react';
import styled from 'styled-components';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

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
`;

const Label = styled.label`
  width: 100%;
  padding: 12px 0 2px;
  color: forestgreen;
`

const FormInput = ({
   type,
   value,
   placeholder,
   name,
   disabled,
   as,
   register,
   minDate,
   maxDate,
   label,
   onChange,
   errMessage,
   required
}) => {
    return (
        <>
            { label && <Label>{label}</Label> }
            {
                register ?
                    <InputField
                        type={type ? type : 'text'}
                        placeholder={placeholder}
                        {...register(name)}
                    /> :
                    <InputField
                        type={type ? type : 'text'}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        disabled={disabled}
                        as={as}
                        min={minDate}
                        max={maxDate}
                        onChange={onChange}
                        required={required}
                    />
            }
            { !label && <ErrorMessage message={errMessage} /> }
        </>
    );
};

export default FormInput;