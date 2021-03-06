import React, {useEffect, useState} from 'react';
import * as S from './UserItem.style';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalConfirmation from "../../ModalConfirmation/ModalConfirmation";
import axios from "axios";
import MotorcycleItem from "../../MotorcycleItem/MotorcycleItem";

const UserItem = ({ user, deleteFn }) => {
    const {id, firstname, lastname, email, phone} = user;

    const [toggleModalConfirmation, setToggleModalConfirmation] = useState(false);
    const [toggleReservationList, setToggleReservationList] = useState(false);

    return (
        <S.Wrapper onClick={() => setToggleReservationList(!toggleReservationList)}>
            {
                toggleModalConfirmation &&
                    <ModalConfirmation
                        title={`Czy na pewno chcesz usunąć ${firstname} ${lastname}?`}
                        acceptFn={() => deleteFn(id)}
                        discardFn={() => setToggleModalConfirmation(false)}
                    />
            }
            <S.Id>
                <p>#{id}</p>
            </S.Id>
            <S.Name>
                <p>{firstname} {lastname}</p>
            </S.Name>
            <S.Email>
                <p>{email}</p>
            </S.Email>
            <S.Phone>
                <p>+48 {phone}</p>
            </S.Phone>
            <DeleteIcon onClick={() => setToggleModalConfirmation(true)} color={'inherit'} />
        </S.Wrapper>
    );
};

export default UserItem;