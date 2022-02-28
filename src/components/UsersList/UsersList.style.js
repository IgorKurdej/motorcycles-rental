import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;  
  flex-direction: column;
`

export const UserList = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
`

export const Label = styled.label`
  margin: 40px 0 10px 0;
  font-size: 18px;
`

export const Input = styled.input`
  width: 250px;
  height: 35px;
  font-size: 16px;
  padding: 0 10px;
`