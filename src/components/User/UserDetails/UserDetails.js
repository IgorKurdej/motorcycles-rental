import React, {useState, useRef} from 'react';
import * as S from './UserDetails.style'
import {users} from "../../../assets/Data";
import UserDetailInput from "../UserDetailInput/UserDetailInput";

const user = {
    Imię: 'Jan',
    Nazwisko: 'Kowalski',
    Wiek: 23,
    Telefon: '123123123',
    Email: 'jan.kowalski@gmail.com',
    Hasło: 'P@ssw0rd!',
    isLogged: true
}

const UserDetails = () => {

    const [userData, setUserData] = useState(user);
    const [toggleChange, setToggleChange] = useState(true);

    const handleInputChange = e => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        });
    }

    return (
        <S.Wrapper>
            {/*<S.ContentWrapper>*/}
                <S.UserImage src='https://img.myloview.pl/fototapety/user-icon-human-person-symbol-avatar-login-sign-700-258992656.jpg' />
                <UserDetailInput initialValue={user.Imię} value={userData.Imię} handleInputChange={handleInputChange}>
                    Imię
                </UserDetailInput>
                <UserDetailInput value={userData.Nazwisko} handleInputChange={handleInputChange}>
                    Nazwisko
                </UserDetailInput>
                <UserDetailInput value={userData.Wiek} handleInputChange={handleInputChange}>
                    Wiek
                </UserDetailInput>
                <UserDetailInput value={userData.Telefon} handleInputChange={handleInputChange}>
                    Telefon
                </UserDetailInput>
                <UserDetailInput value={userData.Email} handleInputChange={handleInputChange}>
                    Email
                </UserDetailInput>
                <UserDetailInput protected value={userData.Hasło} handleInputChange={handleInputChange}>
                    Hasło
                </UserDetailInput>
            {/*</S.ContentWrapper>*/}
        </S.Wrapper>
    );
};

export default UserDetails;