import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  //background-color: #838282;
`

export const MotorcycleWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px -2px black;
  padding: 0 20px;
  border-radius: 10px;
`

export const ArrowWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: forestgreen;
  display: flex;
  align-items: center;
  justify-content:center;
  border-radius: 50%;
  color: white;
  margin: 50px;
  cursor: pointer;
`

export const ContentWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DotsWrapper = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`

export const Dot = styled.div`
  height: 12px;
  width: 12px;
  background-color: ${props => props.className === 'active' ? 'forestgreen' : '#a9a7a7'};
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
`