import React, {useEffect, useState} from 'react';
import axios from "axios";
import * as S from "./UserReservations.style";
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";

const UserReservations = () => {
    const user = JSON.parse(sessionStorage.user);

    const [userReservation, setUserReservation] = useState([]);

    useEffect(() => {
        axios
            .get(`https://motorcycle-rental.herokuapp.com/userReservation/${user.id}`)
            .then(res => setUserReservation(res.data));
    }, []);

    const deleteReservation = (id) => {
        axios
            .delete(`https://motorcycle-rental.herokuapp.com/deleteReservation/${id}`)
            .then(() => {
                setUserReservation(userReservation.filter(item => {
                    return item.id !== id;
                }))
            })
    }

    return (
        <S.Wrapper>
            <S.ReservationList>
                <h2>Twoje rezerwacje</h2>
                <S.ScrollList>
                    {
                        userReservation
                            .sort((m1, m2) => m2.id - m1.id)
                            .map((item, idx) =>
                                <MotorcycleItem
                                    key={item.id}
                                    reservationData={item}
                                    deleteRes={deleteReservation}
                                    userReservation={userReservation[idx]}
                                    reservation
                                />
                            )
                    }
                </S.ScrollList>
            </S.ReservationList>
        </S.Wrapper>
    );
};

export default UserReservations;