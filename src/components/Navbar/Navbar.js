import React, {useState} from 'react';
import {useLocation} from "react-router";
import * as S from './Navbar.style';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
    const {pathname} = useLocation();
    const splitPathname = pathname.split('/');

    return (
        <S.NavbarContainer extendNavbar={extendNavbar}>
            <S.NavbarInnerContainer>
                <S.LeftContainer>
                    <S.NavbarLinkContainer>
                        <S.NavbarLink
                            className={splitPathname[1] === '' && 'active'}
                            to="/">Home</S.NavbarLink>
                        <S.NavbarLink
                            className={splitPathname[1] === 'oferta' && 'active'}
                            to="/oferta">Oferta</S.NavbarLink>
                        <S.NavbarLink
                            className={splitPathname[1] === 'kontakt' && 'active'}
                            to="/kontakt">Kontakt</S.NavbarLink>
                        <S.NavbarLink
                            className={splitPathname[1] === 'konto' && 'active'}
                            to="/konto">Twoje konto</S.NavbarLink>
                        <S.NavbarLink
                            className={splitPathname[1] === 'logowanie' && 'active'}
                            to="/logowanie">Zaloguj się</S.NavbarLink>
                        <S.OpenLinksButton
                            onClick={() => setExtendNavbar(curr => !curr)}
                        >
                            {
                                extendNavbar ? <MenuOpenIcon fontSize={"large"} /> : <MenuIcon fontSize={"large"} />
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
                    <S.NavbarContainer>
                        <S.NavbarExtendedContainer>
                            <S.NavbarLinkExtended to="/">Home</S.NavbarLinkExtended>
                            <S.NavbarLinkExtended to="/products">Products</S.NavbarLinkExtended>
                            <S.NavbarLinkExtended to="/contact">Contact us</S.NavbarLinkExtended>
                            <S.NavbarLinkExtended to="/about">About</S.NavbarLinkExtended>
                        </S.NavbarExtendedContainer>
                    </S.NavbarContainer>
                )
            }
        </S.NavbarContainer>
    );
};

export default Navbar;