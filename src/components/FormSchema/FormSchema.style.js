import styled from 'styled-components';
import {Link} from "react-router-dom";

export const FormWrapper = styled.div`
  margin: 150px 0 25px 0;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  
  @media (max-width: 750px) {
    margin-top: 50px;
  }
`

export const FormTitle = styled.p`
  margin-bottom: 20px;
  font-size: 30px;
`

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
`;

// ---------------------------- BUTTON ------------------------------------
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  width: 60%;
`

export const Button = styled.button`
  //width: ${props => props.modal ? '50%' : '100%'};
  width: ${props => props.cancel ? '60%' : '100%'};
  margin-top: ${props => props.cancel ? '10px' : '20px'};
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

export const NavLink = styled(Link)`
  width: 100%;
  display: flex;
  text-decoration: none;
  justify-content: center;
`;