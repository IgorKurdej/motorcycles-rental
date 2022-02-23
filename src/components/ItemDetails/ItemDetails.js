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
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    return Math.round((new Date(date) - myToday) / oneDay);
}

const convertDateToInputDate = date => date.toLocaleString().split(',').shift().split('.').reverse().join('-');

const ItemDetails = ( props ) => {
    const {marka, model, pojemność, moc, rok, cena, booking, reservationData, reservation} = props;

    const [isUpdate, setIsUpdate] = useState(false);
    const [reservationUpdateValues, setReservationUpdateValues] = useState({
        ...reservationData
    });

    useEffect(() => {
        let countDays = (new Date(reservationUpdateValues.endDate) - new Date(reservationUpdateValues.startDate)) / (1000 * 3600 * 24);

        setReservationUpdateValues({
            ...reservationUpdateValues,
            'price': countDays * reservationUpdateValues.cena === 0 ?
                reservationUpdateValues.cena :
                countDays * reservationUpdateValues.cena
        });
    }, [reservationUpdateValues.startDate, reservationUpdateValues.endDate]);

    const handleReservationUpdate = e => setReservationUpdateValues({ ...reservationUpdateValues, [e.target.name]: e.target.value });

    const updateReservation = () => {
        axios
            .put("https://motorcycle-rental.herokuapp.com/updateReservation", reservationUpdateValues)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    }

    return (
        reservation ? (
            <S.DetailsWrapper reservation>
                <S.DescriptionWrapper booking reservation>
                    <DescriptionItem value={dateConvert(reservationData.startDate) > 0 ? 'W trakcie' : 'Zakończone'} reservation>Status</DescriptionItem>
                    <DescriptionItem value={reservationData.marka} reservation>Marka</DescriptionItem>
                    <DescriptionItem value={reservationData.model} reservation>Model</DescriptionItem>
                    {
                        isUpdate ? (
                                <>
                                    <DescriptionItem
                                        reservation
                                        value={
                                            <input
                                                type='date'
                                                name='startDate'
                                                onChange={handleReservationUpdate}
                                                min={convertDateToInputDate(new Date())}
                                                max={reservationUpdateValues.endDate}
                                                value={reservationUpdateValues.startDate}
                                            />
                                        }
                                    >
                                        Nowa data odbioru
                                    </DescriptionItem>
                                    <DescriptionItem
                                        reservation
                                        value={
                                            <input
                                                type='date'
                                                name='endDate'
                                                onChange={handleReservationUpdate}
                                                min={reservationUpdateValues.startDate || convertDateToInputDate(new Date())}
                                                value={reservationUpdateValues.endDate}
                                            />
                                        }
                                    >
                                        Nowa data zwrotu
                                    </DescriptionItem>
                                    <DescriptionItem
                                        value={reservationUpdateValues.price}
                                        reservation unit={units.cena}
                                    >
                                        Nowa cena
                                    </DescriptionItem>
                                </>
                            ) : (
                                <>
                                    <DescriptionItem value={reservationData.startDate} reservation>Data odbioru</DescriptionItem>
                                    <DescriptionItem value={reservationData.endDate} reservation>Data zwrotu</DescriptionItem>
                                    <DescriptionItem value={reservationData.price} reservation unit={units.cena}>Cena</DescriptionItem>
                                </>
                            )
                    }
                    {
                        dateConvert(reservationData.startDate) > 0 && (
                            isUpdate ? (
                                <S.ReservationButtonWrapper>
                                    <S.ReservationButton onClick={(e) => {
                                        setIsUpdate(false)
                                        updateReservation()
                                    }} edit>Zapisz</S.ReservationButton>
                                    <S.ReservationButton onClick={() => {
                                        setIsUpdate(false);
                                        setReservationUpdateValues({...reservationData});
                                    }}
                                    >
                                        Anuluj zmiany
                                    </S.ReservationButton>
                                </S.ReservationButtonWrapper>
                            ) : (
                                <S.ReservationButtonWrapper>
                                    <S.ReservationButton onClick={() => setIsUpdate(true)} edit>Edytuj</S.ReservationButton>
                                    <S.ReservationButton onClick={() => props.deleteReservation(reservationData.id)}>Anuluj rezerwacje</S.ReservationButton>
                                </S.ReservationButtonWrapper>
                            )
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