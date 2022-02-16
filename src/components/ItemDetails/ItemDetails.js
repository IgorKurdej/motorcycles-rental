import React from 'react';
import DescriptionItem from "./DescriptionItem/DescriptionItem";
import * as S from './ItemDetails.style'
import {Link} from "react-router-dom";
import axios from "axios";

const units = {
    moc: 'KM',
    pojemność: 'cm',
    cena: ' zł'
};

const ItemDetails = ( props ) => {
    const {marka, model, pojemność, moc, rok, cena, booking, motorcycleData, reservationData, reservation} = props;

    const dateConvert = date => {
        let splitDate = date
            .split('.')
            .map((numb, idx) => idx % 2 !== 0 ? Number(numb) - 1 : Number(numb));

        const reservationStartDate = new Date(splitDate[2], splitDate[1], splitDate[0]);
        const oneDay = 24 * 60 * 60 * 1000;

        const today = new Date();
        const myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);

        return (reservationStartDate - myToday) / oneDay;
    }



    return (
        reservation ? (
            <S.DetailsWrapper reservation>
                {/* DescriptionWrapper jako osobny komponent, jak w form InputsWrapper!!! */}
                <S.DescriptionWrapper booking reservation>
                    <DescriptionItem value={dateConvert(reservationData.startDate) > 0 ? 'W trakcie' : 'Zakończone'} reservation>Status</DescriptionItem>
                    <DescriptionItem value={reservationData.marka} reservation>Marka</DescriptionItem>
                    <DescriptionItem value={reservationData.model} reservation>Model</DescriptionItem>
                    <DescriptionItem value={reservationData.startDate} reservation>Data odbioru</DescriptionItem>
                    <DescriptionItem value={reservationData.endDate} reservation>Data zwrotu</DescriptionItem>
                    <DescriptionItem value={reservationData.price} reservation unit={units.cena} hr>Cena</DescriptionItem>
                    {
                        dateConvert(reservationData.startDate) > 0 > 0 &&
                            <S.ReservationButtonWrapper>
                                <S.ReservationButton edit>Edytuj</S.ReservationButton>
                                <S.ReservationButton onClick={() => props.deleteReservation(reservationData.id)}>Anuluj</S.ReservationButton>
                            </S.ReservationButtonWrapper>
                    }
                </S.DescriptionWrapper>
            </S.DetailsWrapper>
        ) : (
            booking ? (
                <S.DetailsWrapper>
                    <S.DescriptionWrapper booking>
                        <DescriptionItem value={marka}>Marka</DescriptionItem>
                        <DescriptionItem value={model}>Model</DescriptionItem>
                        <DescriptionItem value={rok}>Rok produkcji</DescriptionItem>
                        <DescriptionItem value={moc} unit={units.moc}>Moc silnika</DescriptionItem>
                        <DescriptionItem value={pojemność} unit={units.pojemność}>Pojemność silnika</DescriptionItem>
                        <DescriptionItem value={cena} unit={units.cena}>Cena za dzień</DescriptionItem>
                    </S.DescriptionWrapper>
                </S.DetailsWrapper>
            ) : (
                <S.DetailsWrapper>
                    <S.ModelWrapper>
                        <h1>{marka}</h1>
                        <h1>{model}</h1>
                    </S.ModelWrapper>
                    <S.DescriptionWrapper>
                        <DescriptionItem offer value={rok} >Rok produkcji</DescriptionItem>
                        <DescriptionItem offer value={moc} unit={units.moc}>Moc silnika</DescriptionItem>
                        <DescriptionItem offer value={pojemność} unit={units.pojemność} hr>Pojemność silnika</DescriptionItem>
                    </S.DescriptionWrapper>
                    <S.ReservationWrapper>
                        <p>Cena za dzień: {cena} zł</p>
                        <Link to='/rezerwacja' state={{motorcycle: props}}>
                            <button>Zarezerwuj</button>
                        </Link>
                    </S.ReservationWrapper>
                </S.DetailsWrapper>
            )
        )
    );
};

export default ItemDetails;


// <S.DetailsWrapper>
//     <S.DescriptionWrapper reservation>
//         {
//             Object.entries(props.user)
//                 .map(item =>
//                     <DescriptionItem key={item[0]} value={item[1]}>
//                         {item[0]}
//                     </DescriptionItem>
//                 )
//         }
//     </S.DescriptionWrapper>
// </S.DetailsWrapper>