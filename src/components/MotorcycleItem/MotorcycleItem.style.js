import styled from 'styled-components';
import {medium} from "../../Responsive";

export const Wrapper = styled.div`
    width: ${props => props.booking ? '60%' : '100%' };
    height: ${props => props.reservation ? '250px' : '350px'};
    border-bottom: ${props => props.reservation && '1px solid lightgray'};
    display: flex;
    flex-direction: ${props => props.booking && 'column'};
    animation: appear .5s ease;
    
    @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    
    @media (max-width: 1200px) {
      flex-direction: ${props => props.offer && 'column'};
      align-items: ${props => props.offer && 'center'};
      height: ${props => props.offer && '500px'};
    }
    
    @media (max-width: 1100px) {
      flex-direction: ${props => props.booking && 'row'};
      width: ${props => props.booking && '100%'};
    }
    
    @media (max-width: 750px) {
      display: ${props => props.booking && 'none'};
    }
    
    @media (max-width: 700px) {
      flex-direction: ${props => props.reservation && 'column'};
      height: ${props => props.reservation && '400px'};
    }
    
    @media (max-width: 660px) {
      margin-bottom: ${props => props.offer && '20px'};
    }
`;

export const ImageWrapper = styled.div`
    width: ${props => props.booking ? '100%' : props.reservation ? '30%' : '50%'};
    margin-right: ${props => props.reservation && '30px'};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1100px) {
      width: ${props => props.booking && '50%'};
    }
    
    @media (max-width: 700px) {
      width: ${props => props.reservation && '100%'};
    }
`;

export const MotoImg = styled.img`
  height: ${({reservation}) => reservation ?  '65%' : '100%'};
  
  @media (max-width: 1650px) {
      height: ${props => props.offer && '300px'};
  }
  
  @media (max-width: 1300px) {
    height: ${props => props.booking && '300px'};
  }
  
  @media (max-width: 900px) {
    //height: ${props => props.booking && '250px'};
  }
  
  @media (max-width: 700px) {
      height: ${props => props.reservation && '180px'};
  }
  
`;

export const Hr = styled.hr`
  @media (max-width: 1200px) {
      margin-top: 25px;
  }
`