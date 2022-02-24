import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import * as S from './Navbar.style';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {Link, Navigate} from "react-router-dom";

const Navbar = () => {
    const [isUserLogged, setIsUserLogged] = useState(sessionStorage.length);
    const [extendNavbar, setExtendNavbar] = useState(false);
    const {pathname} = useLocation();
    const splitPathname = pathname.split('/');

    useEffect(() => {
        setIsUserLogged(sessionStorage.length)
        // console.log(sessionStorage);
    }, [sessionStorage])

    return (
        <S.NavbarContainer extendNavbar={extendNavbar}>
            <S.NavbarInnerContainer>
                <S.LeftContainer>
                    <S.NavbarLinkContainer>
                        <S.NavbarLink
                            className={splitPathname[1] === '' && 'active'}
                            to="/">Strona główna</S.NavbarLink>
                        <S.NavbarLink
                            className={splitPathname[1] === 'oferta' && 'active'}
                            to="/oferta">Oferta</S.NavbarLink>
                        <S.NavbarLink
                            className={splitPathname[1] === 'kontakt' && 'active'}
                            to="/kontakt">Kontakt</S.NavbarLink>
                        {
                            isUserLogged ? (
                                <>
                                    <S.NavbarLink
                                        className={splitPathname[1] === 'konto' && 'active'}
                                        to="/konto"
                                    >Twoje konto</S.NavbarLink>
                                    <S.LogoutButton onClick={() => {
                                        sessionStorage.clear()
                                        window.location.reload(false);
                                    }}>
                                        <S.NavbarLink to="/">Wyloguj</S.NavbarLink>
                                    </S.LogoutButton>
                                </>
                            ) : (
                                <S.NavbarLink
                                    className={splitPathname[1] === 'logowanie' && 'active'}
                                    to="/logowanie"
                                >Zaloguj się</S.NavbarLink>
                            )

                        }
                        <S.OpenLinksButton
                            onClick={() => setExtendNavbar(curr => !curr)}
                        >
                            {
                                extendNavbar ? <MenuOpenIcon fontSize={"large"} /> : <MenuIcon fontSize={"large"} />
                            }
                        </S.OpenLinksButton>
                    </S.NavbarLinkContainer>
                </S.LeftContainer>
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