import React, {useState, useRef, useEffect} from 'react';
import * as S from './UserDetails.style'
import {users} from "../../../assets/Data";
import UserDetailInput from "../UserDetailInput/UserDetailInput";
import EditIcon from '@mui/icons-material/Edit';

const UserDetails = ({ userData }) => {
    const user = JSON.parse(sessionStorage.user);

    const [updatedUser, setUpdatedUser] = useState({...userData});
    const [toggleUserUpdate, setToggleUserUpdate] = useState(false);

    const handleInputChange = e => {
        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value
        });
    }

    return (
        <S.Wrapper>
            <S.UserImage src='https://img.myloview.pl/fototapety/user-icon-human-person-symbol-avatar-login-sign-700-258992656.jpg' />
            {
                !toggleUserUpdate ?
                    <S.EditButtonsWrapper>
                        <S.EditButton onClick={() => setToggleUserUpdate(true)}>edytuj</S.EditButton>
                    </S.EditButtonsWrapper> :
                    <S.EditButtonsWrapper>
                        <S.EditButton onClick={() => setToggleUserUpdate(false)}>zapisz</S.EditButton>
                        <S.EditButton cancel onClick={() => setToggleUserUpdate(false)}>odrzuć</S.EditButton>
                    </S.EditButtonsWrapper>
            }
            {
                <UserDetailInput
                    userData={userData}
                    handleInputChange={handleInputChange}
                    toggleUserUpdate={toggleUserUpdate}
                />

            }
        </S.Wrapper>
    );
};

export default UserDetails;