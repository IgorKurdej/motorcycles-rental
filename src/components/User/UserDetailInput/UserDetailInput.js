import React, {useRef, useState} from 'react';
import * as S from "./UserDetailInput.style";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const labels = {
    firstname: 'Imię',
    lastname: 'Nazwisko',
    phone: 'Telefon',
    password: 'Hasło',
    email: 'Email'
}

const UserDetailInput = ({ name, value, handleInputChange, toggleUserUpdate }) => {
    const inputEl = useRef(null);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const handlePasswordVisibility = () => {
        setIsPasswordHidden(!isPasswordHidden);
        !isPasswordHidden ?
            inputEl.current.type = 'password' :
            inputEl.current.type = 'text'
    }

    return (
        <>
            <S.Label>{labels[name]}</S.Label>
            <S.InputWrapper>
                <S.Input
                    protected={name === 'password'}
                    ref={inputEl}
                    type={
                        name === 'password' ? 'password' : name === 'email' ? 'email' : 'text'
                    }
                    value={value}
                    name={name}
                    onChange={handleInputChange}
                    disabled={!toggleUserUpdate}
                    required
                />
                {
                    name === 'password' &&
                        <S.Button onClick={handlePasswordVisibility} visibility='true' >
                            {
                                isPasswordHidden ? <VisibilityIcon fontSize={"small"} /> : <VisibilityOffIcon fontSize={"small"} />
                            }
                        </S.Button>
                }
            </S.InputWrapper>
        </>
    );
};

export default UserDetailInput;