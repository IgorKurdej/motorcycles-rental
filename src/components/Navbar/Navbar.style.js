import styled from 'styled-components';
import {Link} from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${({extendNavbar}) => extendNavbar ? "100vh" : "80px"};
    background-color: black;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    z-index: 3;
`;


export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: ${props => props.className === 'active' ? 'forestgreen' : 'white'};
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  margin: 10px;
  height: 80px;
  display: flex;
  align-items: center;

  :hover {
    color: ${props => props.className === 'active' ? '' : '#8f8e8e'};
  }
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
`

export const NavbarLinkExtended = styled(Link)`
  color: #fff;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #fff;
  font-size: 45px;
  cursor: pointer;
  
  @media (min-width: 700px) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 700px) {
    display: none;
  }
`;