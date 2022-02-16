import React, {useState, useEffect} from 'react';
import axios from "axios";
import * as S from './User.style'
import UserDetails from "./UserDetails/UserDetails";
import AppContext from "../../context";
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";

const User = () => {
    const [userReservation, setUserReservation] = useState([]);

    useEffect(() => {
        axios
            .post('http://localhost:3001/userReservation', { userId: 1 })
            .then(res => setUserReservation(res.data))
    }, [])

    const deleteReservation = (id) => {
        axios
            .delete(`http://localhost:3001/deleteReservation/${id}`)
            .then(() => {
                setUserReservation(userReservation.filter(item => {
                    return item.id !== id;
                }))
            })
    }

    return (
        <S.Wrapper>
            <S.LeftSide>
                <UserDetails />
            </S.LeftSide>
            <S.ReservationList>
                <h2>Twoje rezerwacje</h2>
                <S.ScrollList>
                    {
                        userReservation.map(item => <MotorcycleItem
                            key={item.id}
                            reservationData={item}
                            deleteRes={deleteReservation}
                            reservation
                        />)
                    }
                </S.ScrollList>
            </S.ReservationList>
        </S.Wrapper>
    );
};

export default User;