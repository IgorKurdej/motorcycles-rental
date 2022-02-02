import React, {useEffect, useRef, useState} from 'react';
import * as S from "./UserDetailInput.style";

// const UserDetailInput = ({firstname, children}) => {
const UserDetailInput = (props) => {
    const inputEl = useRef(null);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isInputUpdate, setIsInputUpdate] = useState({
        Imię: false,
        Nazwisko: false,
        Wiek: false,
        Telefon: false,
        Email: false,
        Hasło: false
    })

    const [userDate, setUserData] = useState({
        Imię: '',
        Nazwisko: '',
        Wiek: '',
        Telefon: '',
        Email: '',
        Hasło: ''
    })

    // useEffect()


    const handlePasswordVisibility = () => {
        setIsPasswordHidden(!isPasswordHidden);
        !isPasswordHidden ?
            inputEl.current.type = 'password' :
            inputEl.current.type = 'text'
    }

    const handleButtonChange = () => {
        // inputEl.current.disabled = false;
        inputEl.current.type = 'text';
        inputEl.current.disabled = false;
        inputEl.current.focus();
        setIsInputUpdate({
            ...isInputUpdate,
            [inputEl.current.name] : true
        })
    }

    const handleCancelButton = () => {
        // poprawic, moze zajsc sytuacja kiedy ktos zmieni imie:
        // za pierwszym razem zmienia z jan na jan2
        // kiedy drugi raz sprobuje edytowac i w trakcje sie rozmysli
        // to wypelni pole wartoscia jan, a nie jan 2

        // const initialInputState = ;
        // inputEl.current.value = props.initialValue;
        // console.log(inputEl.current.value);

        inputEl.current.name === 'Hasło' ?
            inputEl.current.type = 'password' :
            inputEl.current.type = 'text';

        inputEl.current.disabled = true;
        setIsInputUpdate({
            ...isInputUpdate,
            [inputEl.current.name] : false
        })
    }

    const handleAcceptButton = () => {
        console.log(inputEl.current);
        inputEl.current.name === 'Hasło' ?
            inputEl.current.type = 'password' :
            inputEl.current.type = 'text';

        inputEl.current.disabled = true;
        setIsInputUpdate({
            ...isInputUpdate,
            [inputEl.current.name] : false
        })
    }


    return (
        <S.Wrapper>
            <S.LabelWrapper>
                <S.Label htmlFor={props.children}>{props.children}</S.Label>
                {
                    !isInputUpdate[props.children] ?
                        <S.Button onClick={handleButtonChange}><>&#9998;</></S.Button> :
                        <div>
                             <S.Button onClick={handleAcceptButton}><>&#10003;</></S.Button>
                             <S.Button onClick={handleCancelButton}><>&#10005;</></S.Button>
                        </div>
                }
            </S.LabelWrapper>
            {
                props.protected ? (
                    <S.InputWrapper>
                        <S.Input
                            protected
                            ref={inputEl}
                            type='password'
                            id={props.children}
                            value={props.value}
                            name={props.children}
                            onChange={props.handleInputChange}
                            disabled
                        />
                        <S.Button onClick={handlePasswordVisibility}>X</S.Button>
                    </S.InputWrapper>
                ) : (
                    <S.Input
                        ref={inputEl}
                        type='text'
                        id={props.children}
                        value={props.value}
                        name={props.children}
                        onChange={props.handleInputChange}
                        disabled
                    />
                )
            }

        </S.Wrapper>
    );
};

export default UserDetailInput;