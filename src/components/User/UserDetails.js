import React, {useState, useEffect} from 'react';
import UserDetailInput from "./UserDetailInput/UserDetailInput";
import axios from "axios";
import * as S from './UserDetails.style'

const UserDetails = () => {
    const user = JSON.parse(sessionStorage.user);

    const [toggleUserUpdate, setToggleUserUpdate] = useState(false);
    const [userData, setUserData] = useState({});
    const [updatedUserData, setUpdatedUserData] = useState({});

    useEffect(() => {
        axios
            .get(`https://motorcycle-rental.herokuapp.com/user/${user.id}`)
            .then(res => {
                setUserData(res.data[0])
                setUpdatedUserData(res.data[0])
            })
    }, [])

    const handleInputChange = e => {
        setUpdatedUserData({
            ...updatedUserData,
            [e.target.name]: e.target.value
        });
    }

    const handleDiscardChanges = () => {
        setUpdatedUserData(userData);
        setToggleUserUpdate(false);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setUserData(updatedUserData);
        setToggleUserUpdate(false);

        axios
            .put("https://motorcycle-rental.herokuapp.com/updateUser", updatedUserData)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    return (
        <S.Wrapper>
            <S.UserImage src='https://img.myloview.pl/fototapety/user-icon-human-person-symbol-avatar-login-sign-700-258992656.jpg' />
            <S.ContentWrapper onSubmit={handleSubmit}>
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
                    Object.entries(updatedUserData)
                        .filter(([key]) => key !== 'id' && key !== 'role')
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
