import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 15%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 20px;
  
  @media (max-width: 1650px) {
    width: 20%;
  }
  
  @media (max-width: 1200px) {
    height: 120px;
    padding-bottom: 0;
    flex-direction: row;
    width: 90%;
    justify-content: center;
  }
  
  @media (max-width: 800px) {
    width: 100%;
  }
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
    
    @media (max-width: 1200px) {
        margin: 18px 0;
    }
  }
  
  input:focus {
    border-bottom-color: forestgreen;
  }
  
  @media (max-width: 1200px) {
    width: 30%;
    margin: 0 30px;
  }
  
  @media (max-width: 800px) {
    width: 40%;
  }
`;

export const FiltersSection = styled.div`
  margin-bottom: 20px;
  
  @media (max-width: 1200px) {
    display: none;
  }
  
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
  
  @media (max-width: 1200px) {
    display: none;
  }
`

export const SortSection = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    width: 30%;
    margin: 0 30px;
  }
  
  
  @media (max-width: 800px) {
    width: 35%;
  }
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