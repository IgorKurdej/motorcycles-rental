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
            .post('https://motorcycle-rental.herokuapp.com/userReservation', { userId: 10 })
            .then(res => setUserReservation(res.data))
    }, [])

    const deleteReservation = (id) => {
        axios
            .delete(`https://motorcycle-rental.herokuapp.com/${id}`)
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
                        userReservation.map((item, idx) => <MotorcycleItem
                            key={item.id}
                            reservationData={item}
                            deleteRes={deleteReservation}
                            userReservation={userReservation[idx]}
                            reservation
                        />)
                    }
                </S.ScrollList>
            </S.ReservationList>
        </S.Wrapper>
    );
};

export default User;