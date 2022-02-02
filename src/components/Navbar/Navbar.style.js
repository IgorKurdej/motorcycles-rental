import styled from 'styled-components';
import {Link} from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${({extendNavbar}) => extendNavbar ? "100vh" : "0"};
    background-color: #000;
    display: flex;
    flex-direction: column;
    z-index: 10;
    
    @media (min-width: 700px) {
      height: 80px;
    }
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
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  font-family: Arial, sans-serif;
  text-decoration: none;
  margin: 10px;
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: #fff;
  font-size: x-large;
  font-family: Arial, sans-serif;
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