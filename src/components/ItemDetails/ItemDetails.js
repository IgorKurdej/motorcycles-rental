import React, {useEffect, useState} from 'react';
import DescriptionItem from "./DescriptionItem/DescriptionItem";
import * as S from './ItemDetails.style'
import {Link} from "react-router-dom";
import axios from "axios";
import ModalConfirmation from "../ModalConfirmation/ModalConfirmation";

const units = {
    power: 'KM',
    capacity: 'cm',
    price: ' zł'
};

const dateConvert = date => {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    return Math.round((new Date(date) - myToday) / oneDay);
}

const convertDateToInputDate = date => date.toLocaleString().split(',').shift().split('.').reverse().join('-');

const ItemDetails = ( props ) => {
    const {brand, model, capacity, power, year, price, booking, reservationData, reservation} = props;

    const [toggleModalConfirmation, setToggleModalConfirmation] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [reservationUpdateValues, setReservationUpdateValues] = useState({
        ...reservationData
    });

    useEffect(() => {
        let countDays = (new Date(reservationUpdateValues.endDate) - new Date(reservationUpdateValues.startDate)) / (1000 * 3600 * 24);

        setReservationUpdateValues({
            ...reservationUpdateValues,
            'finalPrice': countDays * reservationUpdateValues.price === 0 ?
                reservationUpdateValues.finalPrice :
                countDays * reservationUpdateValues.price
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
                    <DescriptionItem value={reservationData.brand} reservation>Marka</DescriptionItem>
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
                                        Data odbioru
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
                                        Data zwrotu
                                    </DescriptionItem>
                                    <DescriptionItem
                                        value={reservationUpdateValues.finalPrice}
                                        reservation unit={units.price}
                                    >
                                        Nowa cena
                                    </DescriptionItem>
                                </>
                            ) : (
                                <>
                                    <DescriptionItem value={reservationUpdateValues.startDate} reservation>Data odbioru</DescriptionItem>
                                    <DescriptionItem value={reservationUpdateValues.endDate} reservation>Data zwrotu</DescriptionItem>
                                    <DescriptionItem value={reservationUpdateValues.finalPrice} reservation unit={units.price}>Cena</DescriptionItem>
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
                                        Anuluj
                                    </S.ReservationButton>
                                </S.ReservationButtonWrapper>
                            ) : (
                                <S.ReservationButtonWrapper>
                                    <S.ReservationButton onClick={() => setIsUpdate(true)} edit>Edytuj</S.ReservationButton>
                                    <S.ReservationButton onClick={() => setToggleModalConfirmation(true)}>Anuluj</S.ReservationButton>
                                    {
                                        toggleModalConfirmation &&
                                        <ModalConfirmation
                                            title='Czy na pewno chcesz usunąć rezerwacje?'
                                            acceptFn={() => props.deleteReservation(reservationData.id)}
                                            discardFn={() => setToggleModalConfirmation(false)}
                                        />
                                    }
                                </S.ReservationButtonWrapper>
                            )
                        )


                    }
                </S.DescriptionWrapper>
            </S.DetailsWrapper>
        ) : (
            booking ? (
                <S.DetailsWrapper booking>
                    <S.DescriptionWrapper booking>
                        <DescriptionItem value={brand}>Marka</DescriptionItem>
                        <DescriptionItem value={model}>Model</DescriptionItem>
                        <DescriptionItem value={year}>Rok produkcji</DescriptionItem>
                        <DescriptionItem value={power} unit={units.power}>Moc silnika</DescriptionItem>
                        <DescriptionItem value={capacity} unit={units.capacity}>Pojemność silnika</DescriptionItem>
                        <DescriptionItem value={price} unit={units.price}>Cena za dzień</DescriptionItem>
                    </S.DescriptionWrapper>
                </S.DetailsWrapper>
            ) : (
                <S.DetailsWrapper offer>
                    <S.ModelWrapper offer>
                        <h1>{brand}</h1>
                        <h1>{model}</h1>
                    </S.ModelWrapper>
                    <S.DescriptionWrapper offer>
                        <DescriptionItem offer value={year} >Rok produkcji</DescriptionItem>
                        <DescriptionItem offer value={power} unit={units.power}>Moc silnika</DescriptionItem>
                        <DescriptionItem offer value={capacity} unit={units.capacity} hr>Pojemność silnika</DescriptionItem>
                    </S.DescriptionWrapper>
                    <S.ReservationWrapper offer>
                        <p>Cena za dzień: {price} zł</p>
                        {
                            sessionStorage.length ? (
                                <S.BookingButton as={Link} to='/rezerwacja' state={{motorcycle: props}}>
                                    Zarezerwuj
                                </S.BookingButton>
                            ) : (
                                <S.BookingButton as={Link} to='/logowanie'>
                                    Zarezerwuj
                                </S.BookingButton>
                            )
                        }

                    </S.ReservationWrapper>
                </S.DetailsWrapper>
            )
        )
    );
};

export default ItemDetails;