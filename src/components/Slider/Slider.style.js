import styled from 'styled-components';
import {medium} from "../../Responsive";

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${medium({
    height: '650px',
  })}
`

export const MotorcycleWrapper = styled.div`
  width: 100%;
  //min-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px -2px black;
  padding: 20px;
  border-radius: 10px;
`

export const ArrowWrapper = styled.div`
  min-width: 40px;
  height: 40px;
  background-color: forestgreen;
  display: flex;
  align-items: center;
  justify-content:center;
  border-radius: 50%;
  color: white;
  margin: 50px;
  cursor: pointer;
  
  @media (max-width: 700px) {
    //position: absolute;
  }
`

export const ContentWrapper = styled.div`
  width: 1250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${medium({
    height: '550px'
  })}
`

export const DotsWrapper = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  padding-bottom: 50px;
`

export const Dot = styled.div`
  height: 12px;
  width: 12px;
  background-color: ${props => props.className === 'active' ? 'forestgreen' : '#a9a7a7'};
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
`