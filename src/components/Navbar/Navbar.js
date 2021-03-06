import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import * as S from './Navbar.style';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {Link, Navigate} from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";

const Navbar = () => {
    const [isUserLogged, setIsUserLogged] = useState(sessionStorage.length);
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [toggleDd, setToggleDd] = useState(false);
    const {pathname} = useLocation();
    const splitPathname = pathname.split('/');

    const user = JSON.parse(sessionStorage.getItem('user'));

    useEffect(() => {
        setIsUserLogged(sessionStorage.length)
    }, [sessionStorage])

    const handleExtendedNavbarLinkClick = () => setExtendNavbar(false);
    const clearSessionStorage = () => {
        sessionStorage.clear()
        window.location.reload(false);
    }


    return (
        <S.NavbarContainer extendNavbar={extendNavbar}>
            <S.NavbarInnerContainer>
                <S.LeftContainer>
                    <S.NavbarLinkContainer>
                        <S.NavbarLink
                            className={splitPathname[1] === '' && 'active'}
                            to="/">Strona główna</S.NavbarLink>
                        <S.NavbarLink
                            className={(splitPathname[1] === 'oferta' || splitPathname[1] === 'rezerwacja') &&  'active'}
                            to="/oferta">Oferta</S.NavbarLink>
                        <S.NavbarLink
                            className={splitPathname[1] === 'kontakt' && 'active'}
                            to="/kontakt">Kontakt</S.NavbarLink>
                        {
                            isUserLogged ? (
                                user.role === 'user' ? (
                                    <>
                                        <S.NavbarLink
                                            className={(splitPathname[1] === 'user' || splitPathname[1] === 'rezerwacje') && 'active'}
                                            to="/user"
                                            onMouseEnter={() => setToggleDd(true)}
                                            onMouseLeave={() => setToggleDd(false)}
                                        >
                                            Twoje konto
                                            {
                                                toggleDd && <Dropdown />
                                            }
                                        </S.NavbarLink>
                                        <S.LogoutButton onClick={clearSessionStorage}>
                                            <S.NavbarLink to="/">Wyloguj</S.NavbarLink>
                                        </S.LogoutButton>
                                    </>
                                ) : (
                                    <>
                                        <S.NavbarLink
                                            className={(splitPathname[1] === 'users') && 'active'}
                                            to='/users'
                                        >
                                            Użytkownicy
                                        </S.NavbarLink>
                                        <S.NavbarLink
                                            className={(splitPathname[1] === 'motorcycles' || splitPathname[1] === 'motorcycle') && 'active'}
                                            to="/motorcycles"
                                        >
                                            Motocykle
                                        </S.NavbarLink>
                                        <S.LogoutButton onClick={clearSessionStorage}>
                                            <S.NavbarLink to="/">Wyloguj</S.NavbarLink>
                                        </S.LogoutButton>
                                    </>
                                )
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
                            <S.NavbarLinkExtended onClick={handleExtendedNavbarLinkClick} to="/">Strona głowna</S.NavbarLinkExtended>
                            <S.NavbarLinkExtended onClick={handleExtendedNavbarLinkClick} to="/oferta">Oferta</S.NavbarLinkExtended>
                            <S.NavbarLinkExtended onClick={handleExtendedNavbarLinkClick} to="/kontakt">Kontakt</S.NavbarLinkExtended>
                            {
                                isUserLogged ? (
                                    <>
                                        <S.NavbarLinkExtended onClick={handleExtendedNavbarLinkClick} to="/user">Twoje dane</S.NavbarLinkExtended>
                                        <S.NavbarLinkExtended onClick={handleExtendedNavbarLinkClick} to="/rezerwacje">Twoje rezerwacje</S.NavbarLinkExtended>
                                        <S.NavbarLinkExtended onClick={() => {
                                            handleExtendedNavbarLinkClick()
                                            clearSessionStorage()
                                        }} to="/"
                                        >
                                            Wyloguj
                                        </S.NavbarLinkExtended>
                                    </>
                                ) : (
                                    <S.NavbarLinkExtended onClick={handleExtendedNavbarLinkClick} to="/logowanie">Zaloguj się</S.NavbarLinkExtended>
                                )
                            }
                        </S.NavbarExtendedContainer>
                    </S.NavbarContainer>
                )
            }
        </S.NavbarContainer>
    );
};

export default Navbar;