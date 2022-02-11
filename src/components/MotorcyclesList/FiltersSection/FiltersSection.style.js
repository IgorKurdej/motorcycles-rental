import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 15%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 20px;
`

export const Label = styled.label`
    font-size: 18px;
    font-weight: 500;
`

export const SearchSection = styled.div`
  padding-bottom: 20px;
  
  input {
    width: 100%;
    height: 32px;
    font-size: 15px;
    padding: 5px;
    margin: 10px 0;
    outline: 0;
    border-width: 0 0 1px;
  }
  
  input:focus {
    border-bottom-color: forestgreen;
  }
`;

export const FiltersSection = styled.div`
  margin-bottom: 20px;
`;

export const CheckboxOptions = styled.div`
  margin: 10px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #a09f9f;
  cursor: pointer;
  margin: 5px 0;
`

export const SortSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SortTitleWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export const OrderByButton = styled.button`
  border: none;
  background: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: forestgreen;
  cursor: pointer;
`

export const Select = styled.select`
  height: 32px;
  margin-top: 10px;
  outline: 0;
  border-width: 0 0 1px;
  background-color: white;
  
 
  :focus {
    border-bottom-color: forestgreen;
  }
  
  
`;

export const SelectOption = styled.option`
  text-indent: 5px;
  :hover {
    background-color: yellow;
  }
  
`