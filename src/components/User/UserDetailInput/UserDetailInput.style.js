import styled from 'styled-components';

export const Label = styled.label`
  font-size: 20px;
  margin: 12px 0 8px;
  width: 100%;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding-right: 6px;
`

export const InputWrapper = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  padding: 10px 15px;
  font-size: 18px;
  border: ${props => props.protected ? 'none' : '1px solid lightgray'};
  border-radius: 5px;
  
  :focus {
    outline: none;
  }
`