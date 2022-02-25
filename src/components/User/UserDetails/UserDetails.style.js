import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentWrapper = styled.form`
  width: 40%;
  min-width: 350px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const UserImage = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 5px solid green;
  margin: 80px 0 30px 0;
  
  @media (max-width: 1100px) {
    margin-top: 50px;
    width: 160px;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const EditButton = styled.button`
  border: none;
  background-color: white;
  text-align: right;
  padding: 0 10px;
  font-size: 16px;
  color: ${props => props.cancel ? 'red' : 'forestgreen'};
  text-decoration: underline;
  cursor: pointer;
`;

export const EditButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`