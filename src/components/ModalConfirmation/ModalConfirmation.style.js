import styled from 'styled-components';

export const Modal = styled.div`
  width: 500px;
  height: 200px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  color: black;
`

export const ButtonsWrapper = styled.div`
  
  position: absolute;
  bottom: 30px;
  display: flex;
  width: 65%;
  justify-content: space-around;
`

export const Button = styled.button`
  background-color: ${({secondary}) => secondary ? '#c60e0e' : 'forestgreen'};
  width: 140px;
  color: #f1f1f1;
  //display: flex;
  align-items: center;
  border: none;
  padding: 5px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`
