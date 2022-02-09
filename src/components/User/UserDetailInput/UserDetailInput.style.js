import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 40%;
  min-width: 400px;
  flex-direction: column;
  padding: 10px 20px;
`

export const LabelWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Label = styled.label`
  font-size: 20px;
`

export const Button = styled.button`
  width: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: ${props => props.visibility && '5px'};
  
`

export const SavingButtons = styled.div`
  display: flex;
`

export const InputWrapper = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 5px;
 
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