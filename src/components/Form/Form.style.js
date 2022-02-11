import styled from 'styled-components';
import {Link} from "react-router-dom";

export const FormWrapper = styled.div`
  margin-top: 100px;
  width: 550px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 70px 0;
  background-color: white;
  border-radius: 10px;
`

export const FormTitle = styled.p`
  margin-bottom: 20px;
  font-size: 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Checkout = styled.div`
  width: 60%;
  height: 50px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  
  p {
    font-size: 18px;
    font-weight: ${props => props.price && '700'};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  width: 60%;
`

export const NavLink = styled(Link)`
  width: 100%;
  display: flex;
  text-decoration: none;
  justify-content: center;
`;

export const Button = styled.button`
  width: ${props => props.modal ? '50%' : '100%'};
  margin: ${props => props.confirm ? '10px 0 0 0' : '15px 0 30px'};
  padding: 7px 0;
  border: ${props => props.cancel ? '3px solid #be2020' : '3px solid forestgreen'};
  background-color: transparent;
  font-size: 16px;
  color: ${props => props.cancel ? '#be2020' : 'forestgreen'};
  font-weight: 500;
  cursor: pointer;
  
  :hover {
    background-color: ${props => props.cancel ? '#be2020' : 'forestgreen'};
    color: white;
  }
`;

export const ChangeFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const ChangeFormButton = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  font-size: 16px;
  margin: 5px 0;
  cursor: pointer;
  color: forestgreen;
`;

export const ContactModal = styled.div`
  width: 500px;
  height: 80px;
  background-color: #caf6cb;
  border: 3px solid forestgreen;
  border-radius: 5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  
  p {
    color: forestgreen;
    font-size: 18px;
  }
  
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