import React from 'react';
import * as S from './User.style'
import UserDetails from "./UserDetails/UserDetails";
import AppContext from "../../context";
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";

const motorcycle = {
    id: 1,
    marka: 'BMW',
    model: '1250GS',
    pojemność: 1254,
    moc: 13,
    rok: 2021,
    cena: 300,
    img: 'https://motocyklem.pl/img/BMWR1200GS.png'
};

const reservation = {
    status: 'W trakcie',
    // status: 'Zakończone',
    start: '12.02.2022',
    koniec: '15.02.2022',
    cena: 900
}

const reservation2 = {
    // status: 'W trakcie',
    status: 'Zakończone',
    start: '12.02.2022',
    koniec: '15.02.2022',
    cena: 900
}

const User = () => {
    return (
        <S.Wrapper>
            <S.LeftSide>
                <UserDetails />
            </S.LeftSide>
            <S.ReservationList>
                <h2>Twoje rezerwacje</h2>
                <S.ScrollList>
                    <MotorcycleItem motorcycleData={motorcycle} reservationData={reservation} reservation />
                    <MotorcycleItem motorcycleData={motorcycle} reservationData={reservation} reservation />
                    <MotorcycleItem motorcycleData={motorcycle} reservationData={reservation2} reservation />
                    <MotorcycleItem motorcycleData={motorcycle} reservationData={reservation2} reservation />
                    <MotorcycleItem motorcycleData={motorcycle} reservationData={reservation2} reservation />
                    <MotorcycleItem motorcycleData={motorcycle} reservationData={reservation2} reservation />
                    <MotorcycleItem motorcycleData={motorcycle} reservationData={reservation2} reservation />
                    <MotorcycleItem motorcycleData={motorcycle} reservationData={reservation2} reservation />
                    <MotorcycleItem motorcycleData={motorcycle} reservationData={reservation2} reservation />
                </S.ScrollList>
            </S.ReservationList>
        </S.Wrapper>
    );
};

export default User;