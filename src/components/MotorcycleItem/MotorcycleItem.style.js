import styled from 'styled-components';

export const Wrapper = styled.div`
    //width: ${props => props.booking ? '60%' : '100%' };
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
`;

export const ImageWrapper = styled.div`
     // height: ${props => props.offer ? '100%' : '50%'};
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MotoImg = styled.img`
  height: ${({reservation}) => reservation ?  '80%' : '100%'};
`;