import React, {useEffect, useState} from 'react';
import DescriptionItem from "./DescriptionItem/DescriptionItem";
import * as S from './ItemDetails.style'
import {Link} from "react-router-dom";
import axios from "axios";

const units = {
    moc: 'KM',
    pojemność: 'cm',
    cena: ' zł'
};

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

const convertDateFormat = date => {
    let splitDate = date.split('.').reverse();
    let day = splitDate.pop();
    day.length === 1 && splitDate.push('0'.concat(day));
    return splitDate.join('-');
}

const reverseDate = date => {
    return date.split('-').reverse().join('.');
}

const ItemDetails = ( props ) => {
    const {marka, model, pojemność, moc, rok, cena, booking, motorcycleData, reservationData, reservation} = props;

    const [isUpdate, setIsUpdate] = useState(false);
    const [reservationUpdateValues, setReservationUpdateValues] = useState({
        ...reservationData
    });

    const handleReservationUpdate = e => setReservationUpdateValues({ ...reservationUpdateValues, [e.target.name]: e.target.value });

    const updateReservation = (id) => {
        const obj = {
            id: id,
            startDate: reverseDate(reservationUpdateValues.startDate),
            endDate: reverseDate(reservationUpdateValues.endDate),
            price: reservationUpdateValues.price
        }
        axios
            .put("http://localhost:3001/updateReservation", obj)
            .then(res => {
                // props.userReservation.startDate = obj.startDate;
                // props.userReservation.endDate = obj.endDate;
                // props.userReservation.price = obj.price;
            })
            .catch(err => console.log(err))
    }

    return (
        reservation ? (
            <S.DetailsWrapper reservation>
                {/* DescriptionWrapper jako osobny komponent, jak w form InputsWrapper!!! */}
                <S.DescriptionWrapper booking reservation>
                    <DescriptionItem value={dateConvert(reservationData.startDate) > 0 ? 'W trakcie' : 'Zakończone'} reservation>Status</DescriptionItem>
                    <DescriptionItem value={reservationData.marka} reservation>Marka</DescriptionItem>
                    <DescriptionItem value={reservationData.model} reservation>Model</DescriptionItem>
                    {
                        isUpdate ?
                            <DescriptionItem
                                reservation
                                value={
                                    <input
                                        type='date'
                                        name='startDate'
                                        onChange={handleReservationUpdate}
                                        value={convertDateFormat(reservationUpdateValues.startDate) || reservationUpdateValues.startDate}
                                    />
                                }> Nowa data odbioru
                            </DescriptionItem> :
                            <DescriptionItem value={reservationData.startDate} reservation>Data odbioru</DescriptionItem>
                    }
                    {
                        isUpdate ?
                            <DescriptionItem
                                reservation
                                value={
                                    <input
                                        type='date'
                                        name='endDate'
                                        onChange={handleReservationUpdate}
                                        value={convertDateFormat(reservationUpdateValues.endDate) || reservationUpdateValues.endDate}
                                    />
                                }> Nowa data zwrotu
                            </DescriptionItem> :
                            <DescriptionItem value={reservationData.endDate} reservation>Data zwrotu</DescriptionItem>
                    }
                    {
                        isUpdate ?
                            <DescriptionItem value={reservationUpdateValues.price} reservation unit={units.cena} hr>Nowa cena</DescriptionItem> :
                            <DescriptionItem value={reservationData.price} reservation unit={units.cena} hr>Cena</DescriptionItem>
                    }
                    {
                        dateConvert(reservationData.startDate) > 0 &&
                            !isUpdate ? (
                                <S.ReservationButtonWrapper>
                                    <S.ReservationButton onClick={() => setIsUpdate(!isUpdate)} edit>Zarezerwuj</S.ReservationButton>
                                    <S.ReservationButton onClick={() => props.deleteReservation(reservationData.id)}>Anuluj</S.ReservationButton>
                                </S.ReservationButtonWrapper>
                            ) : (
                                <S.ReservationButtonWrapper>
                                    <S.ReservationButton onClick={() => {
                                        updateReservation(reservationData.id)
                                        setIsUpdate(!isUpdate);
                                    }} edit>Potwierdź</S.ReservationButton>
                                    <S.ReservationButton onClick={() => setIsUpdate(!isUpdate)}>Odrzuć zmiany</S.ReservationButton>
                                </S.ReservationButtonWrapper>
                            )
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