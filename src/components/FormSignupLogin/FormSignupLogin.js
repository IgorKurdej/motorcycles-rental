import React, {useEffect, useState} from 'react';
import FormSchema from "../FormSchema/FormSchema";
import {Navigate} from "react-router";
import * as S from "./FormSignupLogin.style";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {logInSchema, signUpSchema} from "../../validations/ValidationSchema";
import axios from "axios";
import Modal from "../Modal/Modal";

const FormSignupLogin = () => {
    const [toggleChoice, setToggleChoice] = useState(true);
    const [toggleModal, setToggleModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalError, setModalError] = useState(false);

    useEffect(() => {
        toggleModal && setTimeout(() => setToggleModal(false), 3000);
    }, [toggleModal])

    const {register: loginRegister, formState: {errors: loginErrors}, reset: resetLogin, handleSubmit: handleLoginSubmit} = useForm({
        resolver: yupResolver(logInSchema)
    });
    const {register: signupRegister, formState: {errors: signupErrors}, reset: resetSignup, handleSubmit: handleSignupSubmit} = useForm({
        resolver: yupResolver(signUpSchema)
    });

    const loginInputs = [
        {
            name: 'email',
            placeholder: 'Email',
            register: loginRegister,
            errMessage: loginErrors.email?.message,
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Hasło',
            register: loginRegister,
            errMessage: loginErrors.password?.message,
        }
    ];
    const signupInputs = [
        {
            name: 'firstname',
            placeholder: 'Imię',
            register: signupRegister,
            errMessage: signupErrors.firstname?.message,
        },
        {
            name: 'lastname',
            placeholder: 'Nazwisko',
            register: signupRegister,
            errMessage: signupErrors.lastname?.message,
        },
        {
            name: 'email',
            placeholder: 'Email',
            register: signupRegister,
            errMessage: signupErrors.email?.message,
        },
        {
            name: 'phone',
            placeholder: 'Telefon',
            register: signupRegister,
            errMessage: signupErrors.phone?.message,
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Hasło',
            register: signupRegister,
            errMessage: signupErrors.password?.message,
        },
        {
            name: 'passwordConfirmation',
            type: 'password',
            placeholder: 'Powtórz hasło',
            register: signupRegister,
            errMessage: signupErrors.passwordConfirmation?.message,
        }
    ];

    const handleLoginFailure = () => {
        setModalError(true);
        setModalMessage('Błędny email lub hasło');
        setToggleModal(true);
    }

    const handleLoginSuccess = (res) => {
        sessionStorage.setItem('user', JSON.stringify(res.data[0]));
        window.location.reload(false);
        return <Navigate to='/' />
    }

    const onSubmit = data => {
        const { passwordConfirmation, ...newData } = data;

        resetSignup();
        setToggleChoice(true);

        toggleChoice ? (
                axios
                    .post('https://motorcycle-rental.herokuapp.com/login', data)
                    .then(res => {
                        res.data.length ?
                            handleLoginSuccess(res) :
                            handleLoginFailure()
                    })
                    .catch(err => console.log(err))
            ) : (
                axios
                    .post('https://motorcycle-rental.herokuapp.com/register', newData)
                    .then(res => {
                        setModalError(false);
                        setModalMessage(res.data);
                        setToggleModal(true);
                    })
                    .catch(err => console.log(err))
            )
    }

    return (
        <div>
            {
                toggleModal && <Modal error={modalError}>{modalMessage}</Modal>
            }
            <FormSchema
                title={toggleChoice ? 'Logowanie' : 'Rejestracja'}
                inputs={toggleChoice ? loginInputs : signupInputs}
                button={toggleChoice ? 'Zaloguj' : 'Zarejestruj'}
                handleSubmit={toggleChoice ? handleLoginSubmit(onSubmit) : handleSignupSubmit(onSubmit)}
                // handleButtonClick={toggleChoice && window.location.reload(false)}
            />
            <S.ChangeFormWrapper>
                <p>
                    { toggleChoice ? 'Nie masz jeszcze konta?' : 'Masz juz konto?' }
                </p>
                <S.ChangeFormButton onClick={() => {
                    setToggleChoice(!toggleChoice);
                    toggleChoice ? resetLogin() : resetSignup();
                }} >
                    { toggleChoice ? 'Zarejestruj się' : 'Zaloguj się' }
                </S.ChangeFormButton>
            </S.ChangeFormWrapper>
        </div>
    );
};

export default FormSignupLogin;