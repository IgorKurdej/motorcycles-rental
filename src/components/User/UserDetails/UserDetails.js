import React, {useState, useRef, useEffect} from 'react';
import UserDetailInput from "../UserDetailInput/UserDetailInput";
import axios from "axios";
import * as S from './UserDetails.style'

const UserDetails = ({ userData, setUserData, updatedUser, setUpdatedUser }) => {
    const [toggleUserUpdate, setToggleUserUpdate] = useState(false);

    const handleInputChange = e => {
        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value
        });
    }

    const handleDiscardChanges = () => {
        setUpdatedUser(userData);
        setToggleUserUpdate(false);
    };

    const onSubmit = e => {
        e.preventDefault();
        setUserData(updatedUser);
        setToggleUserUpdate(false);

        axios
            .put("https://motorcycle-rental.herokuapp.com/updateUser", updatedUser)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    return (
        <S.Wrapper>
            <S.UserImage src='https://img.myloview.pl/fototapety/user-icon-human-person-symbol-avatar-login-sign-700-258992656.jpg' />
            <S.ContentWrapper onSubmit={onSubmit}>
                {
                    !toggleUserUpdate ? (
                            <S.ButtonWrapper>
                                <S.EditButton onClick={() => setToggleUserUpdate(true)}>edytuj</S.EditButton>
                            </S.ButtonWrapper>
                        ) : (
                            <S.EditButtonsWrapper>
                                <S.EditButton type="submit">zapisz</S.EditButton>
                                <S.EditButton cancel onClick={handleDiscardChanges}>odrzuć</S.EditButton>
                            </S.EditButtonsWrapper>
                        )
                }
                {
                    //TODO dodać jakas lepsza walidacje
                    Object.entries(updatedUser)
                        .filter(([key]) => key !== 'id')
                        .map(([ key, val ]) => (
                            <UserDetailInput
                                key={key}
                                name={key}
                                value={val}
                                handleInputChange={handleInputChange}
                                toggleUserUpdate={toggleUserUpdate}
                            />
                        ))
                }
            </S.ContentWrapper>
        </S.Wrapper>
    );
};

export default UserDetails;
