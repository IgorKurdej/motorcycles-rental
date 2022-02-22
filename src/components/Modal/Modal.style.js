import styled from "styled-components";

export const ModalStatus = styled.div`
  width: 500px;
  height: 80px;
  background-color: ${props => props.error ? '#f88383' : '#caf6cb'};
  border: ${props => props.error ? '3px solid #990505' : '3px solid forestgreen'};
  border-radius: 5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  font-size: 18px;
  color: ${props => props.error ? '#990505' : 'forestgreen'};
    
  @keyframes slide {
    0% {
      opacity: 0;
    }
    70% {
      transform: translateY(120px);
    }
    100% {
      transform: translateY(110px);
      opacity: 1;
    }
  }
  
  top: 0;
  animation: slide 0.75s ease forwards;
`