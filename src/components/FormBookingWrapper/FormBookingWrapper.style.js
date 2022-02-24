import styled from 'styled-components';
import {medium} from "../../Responsive";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  ${medium({ 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '80px'
  })}
`;

export const MotorcycleWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  //align-items: center;
  justify-content: center;
  //flex-direction: column;
  padding-top: 100px;
  ${medium({
    width: '100%',
    height: 'auto'
  })}
`

export const FormWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  //align-items: center;
  padding-top: 80px;
  ${medium({
    width: '100%',
    height: 'auto'
  })}
`
export const Hr = styled.hr`
    height: 90%;
    text-align: justify-all;
    //margin-top: 70px;
    
    ${medium({ display: 'none' })}
`
