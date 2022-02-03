import React, {useState} from 'react';
import * as S from './Navbar.style';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
    return (
        <S.NavbarContainer extendNavbar={extendNavbar}>
            <S.NavbarInnerContainer>
                <S.LeftContainer>
                    <S.NavbarLinkContainer>
                        <S.NavbarLink to="/">Home</S.NavbarLink>
                        <S.NavbarLink to="/oferta">Oferta</S.NavbarLink>
                        <S.NavbarLink to="/kontakt">Kontakt</S.NavbarLink>
                        <S.NavbarLink to="/konto">Twoje konto</S.NavbarLink>
                        <S.NavbarLink to="/logowanie">Zaloguj się</S.NavbarLink>
                        <S.OpenLinksButton
                            onClick={() => setExtendNavbar(curr => !curr)}
                        >
                            {
                                extendNavbar ? <>&#10005;</> : <>&#8801;</>
                            }
                        </S.OpenLinksButton>
                    </S.NavbarLinkContainer>
                </S.LeftContainer>
                <S.RightContainer>
                    {/*<S.Logo src={LogoImg} />*/}
                </S.RightContainer>
            </S.NavbarInnerContainer>
            {
                extendNavbar && (
                    <S.NavbarExtendedContainer>
                        <S.NavbarLinkExtended to="/">Home</S.NavbarLinkExtended>
                        <S.NavbarLinkExtended to="/products">Products</S.NavbarLinkExtended>
                        <S.NavbarLinkExtended to="/contact">Contact us</S.NavbarLinkExtended>
                        <S.NavbarLinkExtended to="/about">About</S.NavbarLinkExtended>
                    </S.NavbarExtendedContainer>
                )
            }
        </S.NavbarContainer>
    );
};

export default Navbar;