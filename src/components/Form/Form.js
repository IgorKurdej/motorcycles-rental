import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as S from './Form.style';
import LoginFormInputs from "./LoginFormInputs/LoginFormInputs";
import SignUpFormInputs from "./SignUpFormInputs/SignUpFormInputs";
import ReservationFormInputs from "./ReservationFormInputs/ReservationFormInputs";
import ContactFormInputs from "./ContactFormInputs/ContactFormInputs";

const initialLoginValues = {
    email: '',
    password: ''
};

const initialSignUpValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirmation: ''
};

const initialReservationValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: ''
};

const initialContactValues = {
    email: 'jan.kowalski@gmail.com',
    title: '',
    message: ''
};

const Form = ({booking, contact, onChange}) => {
    const [toggleChoice, setToggleChoice] = useState(true);
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
    const [reservationValues, setReservationValues] = useState(initialReservationValues);
    const [contactValues, setContactValues] = useState(initialContactValues);

    const handleInputChange = e => {
        contact ? (
                setContactValues({
                    ...contactValues,
                    [e.target.name]: e.target.value
                })
            ) :
            !booking ? (
                toggleChoice ?
                    setLoginValues({
                        ...loginValues,
                        [e.target.name]: e.target.value
                    }) : (
                        setSignUpValues({
                            ...signUpValues,
                            [e.target.name]: e.target.value
                        })
                    )
            ) : (
                setReservationValues({
                    ...reservationValues,
                    [e.target.name]: e.target.value
                })
            )
    }

    const clearInputs = () => {
        setToggleChoice(!toggleChoice);
        booking ? (
                setReservationValues(initialReservationValues)
            ) : (
                toggleChoice ?
                    setLoginValues(initialLoginValues) :
                    setSignUpValues(initialSignUpValues)
            )
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(reservationValues);
    }

    return (
        <S.FormWrapper>
            <S.FormTitle>
                {
                    contact ? (
                            'Napisz do nas'
                        ) :
                        !booking ? (
                                toggleChoice ? 'Logowanie' : 'Rejestracja'
                            ) : (
                                'Rezerwacja'
                            )
                }
            </S.FormTitle>
            <S.Form onSubmit={handleSubmit}>
                {
                    contact ? (
                            <ContactFormInputs
                                contactValues={contactValues}
                                onChange={handleInputChange}
                            />
                        ) :
                        !booking ? (
                                toggleChoice ?
                                    <LoginFormInputs
                                        loginValues={loginValues}
                                        onChange={handleInputChange} /> :
                                    <SignUpFormInputs
                                        signUpValues={signUpValues}
                                        onChange={handleInputChange} />
                            ) : (
                                <ReservationFormInputs
                                    reservationValues={reservationValues}
                                    onChange={handleInputChange} />
                            )
                }
                {
                    contact ? (
                            <S.ButtonWrapper>
                                <S.Button>
                                    Wyślij
                                </S.Button>
                            </S.ButtonWrapper>
                        ) :
                        !booking ? (
                            <S.ButtonWrapper>
                                <S.NavLink to='/'>
                                    <S.Button name='submit' type='submit' onChange={() => onChange} >
                                        { toggleChoice ? 'Zaloguj' : 'Zarejestruj' }
                                    </S.Button>
                                </S.NavLink>
                            </S.ButtonWrapper>
                        ) : (
                            <S.ButtonsContainer>
                                <S.ButtonWrapper>
                                    <S.NavLink to='/konto' >
                                        <S.Button confirm >
                                            Zarezerwuj
                                        </S.Button>
                                    </S.NavLink>
                                </S.ButtonWrapper>
                                <S.ButtonWrapper>
                                    <S.NavLink to='/oferta' >
                                        <S.Button cancel >
                                            Anuluj
                                        </S.Button>
                                    </S.NavLink>
                                </S.ButtonWrapper>
                            </S.ButtonsContainer>
                        )
                }
            </S.Form>
            {
                !booking && !contact &&
                    <S.ChangeFormWrapper>
                        <p>
                            { toggleChoice ? 'Nie masz jeszcze konta?' : 'Masz juz konto?' }
                        </p>
                        <S.ChangeFormButton onClick={clearInputs} >
                            { toggleChoice ? 'Zarejestruj się' : 'Zaloguj się' }
                        </S.ChangeFormButton>
                    </S.ChangeFormWrapper>
            }
        </S.FormWrapper>
    );
};

export default Form;









//
// {
//     !toggleChoice && (
//         <>
//             <Input
//                 placeholder='imię'
//                 name='firstname'
//                 value={signUpValues.firstname}
//                 onChange={handleInputChange}
//             />
//             <Input
//                 placeholder='nazwisko'
//                 name='lastname'
//                 value={signUpValues.lastname}
//                 onChange={handleInputChange}
//             />
//         </>
//     )
// }
// {
//     toggleChoice ?
//         (
//             <Input
//                 type='email'
//                 placeholder='email'
//                 name='email'
//                 value={loginValues.name}
//                 onChange={handleInputChange}
//             />
//         ) : (
//             <Input
//                 type='email'
//                 placeholder='email'
//                 name='email'
//                 value={signUpValues.email}
//                 onChange={handleInputChange}
//             />
//         )
// }
// {
//     toggleChoice ?
//         (
//             <Input
//                 type='password'
//                 placeholder='hasło'
//                 name='password'
//                 value={loginValues.name}
//                 onChange={handleInputChange}
//                 state={toggleChoice}
//             />
//         ) : (
//             <Input
//                 type='password'
//                 placeholder='hasło'
//                 name='password'
//                 value={signUpValues.password}
//                 onChange={handleInputChange}
//                 state={toggleChoice}
//             />
//         )
// }
// {
//     !toggleChoice &&
//     <Input
//         type='password'
//         placeholder='powtórz hasło'
//         name='passwordConfirmation'
//         value={signUpValues.passwordConfirmation}
//         onChange={handleInputChange}
//     />
// }