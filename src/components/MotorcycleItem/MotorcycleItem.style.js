import styled from 'styled-components';
import {medium} from "../../Responsive";

export const Wrapper = styled.div`
    width: ${props => props.booking ? '60%' : '100%' };
    height: ${props => props.reservation ? '250px' : '350px'};
    //height: 100%;
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
      height: ${props => props.offer && '700px'};
    }
`;



export const ImageWrapper = styled.div`
    width: ${props => props.booking ? '100%' : '50%'};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1200px) {
      height: ${props => props.offer && '280px'};
    }
`;

export const MotoImg = styled.img`
  height: ${({reservation}) => reservation ?  '65%' : '100%'};
`;