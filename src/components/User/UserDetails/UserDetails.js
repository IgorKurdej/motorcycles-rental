import React, {useState, useRef, useEffect} from 'react';
import * as S from './UserDetails.style'
import {users} from "../../../assets/Data";
import UserDetailInput from "../UserDetailInput/UserDetailInput";

const UserDetails = ({ userData }) => {
    const [user, setUser] = useState({});
    const [toggleChange, setToggleChange] = useState(true);

    const labels = {
        firstname: 'imię',
        lastname: 'nazwisko',
        phone: 'telefon',
        password: 'hasło',
        email: 'email'
    }

    const handleInputChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    return (
        <S.Wrapper>
            <S.UserImage src='https://img.myloview.pl/fototapety/user-icon-human-person-symbol-avatar-login-sign-700-258992656.jpg' />
            {
                Object.entries(userData)
                    .filter(([key, val]) => key !== 'id')
                    .map(([ key, val ]) => (
                        <UserDetailInput key={key} name={key} value={val} handleInputChange={handleInputChange} protected={key === 'password' && true}>
                            {labels[key]}
                        </UserDetailInput>
                    ))
            }
        </S.Wrapper>
    );
};

export default UserDetails;