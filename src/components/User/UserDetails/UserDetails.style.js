import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 700px;
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

export const EditButtonsWrapper = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  width: 40%;
  background-color: white;
`