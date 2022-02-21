import React, {useState} from 'react';
import FormSchema from "../FormSchema/FormSchema";
import * as S from "../Form/Form.style";
import Input from "../Form/Input/Input";
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {logInSchema, signUpSchema} from "../../validations/ValidationSchema";
import axios from "axios";

const FormSignupLogin = () => {
    const [toggleChoice, setToggleChoice] = useState(true);

    const {register: loginRegister, formState: {errors: loginErrors}, handleSubmit: handleLoginSubmit} = useForm({
        resolver: yupResolver(logInSchema)
    });
    const {register: signupRegister, formState: {errors: signupErrors}, handleSubmit: handleSignupSubmit} = useForm({
        resolver: yupResolver(signUpSchema)
    });

    const loginInputs = [
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            register: loginRegister
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Hasło',
            register: loginRegister
        }
    ];
    const signupInputs = [
        {
            name: 'firstname',
            placeholder: 'Imię',
            register: signupRegister
        },
        {
            name: 'lastname',
            placeholder: 'Nazwisko',
            register: signupRegister
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            register: signupRegister
        },
        {
            name: 'phone',
            placeholder: 'Telefon',
            register: signupRegister
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Hasło',
            register: signupRegister
        },
        {
            name: 'passwordConfirmation',
            type: 'password',
            placeholder: 'Powtórz hasło',
            register: signupRegister
        }
    ];

    const onSubmit = data => {
        // toggleChoice ? (
        //         axios
        //             .post('https://motorcycle-rental.herokuapp.com/login', data)
        //             .then(res => {
        //                 res.data.length === 0 ? console.log('dupa') : console.log(res)
        //             })
        //             .catch(err => console.log(err))
        //     ) : (
        //         // delete data.passwordConfirmation
        //         axios
        //             .post('https://motorcycle-rental.herokuapp.com/register', data)
        //             .then((res) => console.log(res))
        //             .catch(err => console.log(err))
        //     )
        console.log(data);
    }

    return (
        <div>
            <FormSchema
                title={toggleChoice ? 'Logowanie' : 'Rejestracja'}
                inputs={toggleChoice ? loginInputs : signupInputs}
                button={toggleChoice ? 'Zaloguj' : 'Zarejestruj'}
                handleSubmit={toggleChoice ? handleLoginSubmit(onSubmit) : handleSignupSubmit(onSubmit)}
            />
            <S.ChangeFormWrapper>
                <p>
                    { toggleChoice ? 'Nie masz jeszcze konta?' : 'Masz juz konto?' }
                </p>
                <S.ChangeFormButton onClick={() => setToggleChoice(!toggleChoice)} >
                    { toggleChoice ? 'Zarejestruj się' : 'Zaloguj się' }
                </S.ChangeFormButton>
            </S.ChangeFormWrapper>
        </div>
    );
};

export default FormSignupLogin;