import React, {useRef, useState} from 'react';
import * as S from "./UserDetailInput.style";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const labels = {
    firstname: 'Imię',
    lastname: 'Nazwisko',
    phone: 'Telefon',
    password: 'Hasło',
    email: 'Email'
}

const UserDetailInput = ({userData, toggleUserUpdate, handleInputChange}) => {
    const inputEl = useRef(null);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const handlePasswordVisibility = () => {
        setIsPasswordHidden(!isPasswordHidden);
        !isPasswordHidden ?
            inputEl.current.type = 'password' :
            inputEl.current.type = 'text'
    }

    return (
        <S.Wrapper>
            <S.InputWrapper>
                {
                    Object.entries(userData)
                        .filter(([key, val]) => key !== 'id')
                        .map(([ key, val ]) =>
                            <>
                                <S.Label>{labels[key]}</S.Label>
                                <S.Input
                                    protected={key === 'password'}
                                    ref={inputEl}
                                    type={key === 'password' ? 'password' : 'text'}
                                    value={val}
                                    name={key}
                                    onChange={handleInputChange}
                                    disabled={!toggleUserUpdate} />
                            </>
                        )
                }

                {/*<S.Input*/}
                {/*    protected={props.name === 'password'}*/}
                {/*    ref={inputEl}*/}
                {/*    type={props.name === 'password' ? 'password' : 'text'}*/}
                {/*    value={props.value}*/}
                {/*    name={props.name}*/}
                {/*    onChange={props.handleInputChange}*/}
                {/*    disabled={!props.toggleUserUpdate}*/}
                {/*/>*/}
                {
                    userData.name === 'password' &&
                        <S.Button onClick={handlePasswordVisibility} visibility='true' >
                            {
                                isPasswordHidden ? <VisibilityIcon fontSize={"small"} /> : <VisibilityOffIcon fontSize={"small"} />
                            }
                        </S.Button>
                }
            </S.InputWrapper>
        </S.Wrapper>
    );
};

export default UserDetailInput;