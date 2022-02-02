import React from 'react';
import DescriptionItem from "./DescriptionItem/DescriptionItem";
import * as S from './ItemDetails.style'
import {Link} from "react-router-dom";

const units = {
    moc: 'KM',
    pojemność: 'cm',
    cena: ' zł'
};

const ItemDetails = ( props ) => {
    const {marka, model, pojemność, moc, rok, cena, booking, motorcycleData, reservationData, reservation} = props;

    return (
        reservation ? (
            <S.DetailsWrapper reservation>
                {/* DescriptionWrapper jako osobny komponent, jak w form InputsWrapper!!! */}
                <S.DescriptionWrapper booking reservation>
                    <DescriptionItem value={reservationData.status} reservation>Status</DescriptionItem>
                    <DescriptionItem value={motorcycleData.marka} reservation>Marka</DescriptionItem>
                    <DescriptionItem value={motorcycleData.model} reservation>Model</DescriptionItem>
                    <DescriptionItem value={reservationData.start} reservation>Data odbioru</DescriptionItem>
                    <DescriptionItem value={reservationData.koniec} reservation>Data zwrotu</DescriptionItem>
                    <DescriptionItem value={reservationData.cena} reservation unit={units.cena} hr>Cena</DescriptionItem>
                    {
                        reservationData.status === 'W trakcie' &&
                        <S.ReservationButtonWrapper>
                            <S.ReservationButton edit>Edytuj</S.ReservationButton>
                            <S.ReservationButton>Anuluj</S.ReservationButton>
                        </S.ReservationButtonWrapper>
                    }
                </S.DescriptionWrapper>
            </S.DetailsWrapper>
        ) : (
            booking ? (
                <S.DetailsWrapper>
                    <S.DescriptionWrapper booking>
                        {/*{*/}
                        {/*    Object.entries(props)*/}
                        {/*        .filter(item =>*/}
                        {/*            item[0] !== 'id' &&*/}
                        {/*            item[0] !== 'img' &&*/}
                        {/*            item[0] !== 'form' &&*/}
                        {/*            item[0] !== 'reservation'*/}
                        {/*        )*/}
                        {/*        .map(([key, val]) =>*/}
                        {/*            <DescriptionItem*/}
                        {/*                key={key}*/}
                        {/*                value={val}*/}
                        {/*                unit={units[key]}*/}
                        {/*            >{key}</DescriptionItem>)*/}
                        {/*}*/}
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