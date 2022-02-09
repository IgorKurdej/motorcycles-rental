import React, {useState} from 'react';
import * as S from './Form.style';
import LoginFormInputs from "./LoginFormInputs/LoginFormInputs";
import SignUpFormInputs from "./SignUpFormInputs/SignUpFormInputs";
import ReservationFormInputs from "./ReservationFormInputs/ReservationFormInputs";
import ContactFormInputs from "./ContactFormInputs/ContactFormInputs";
import emailjs from 'emailjs-com'

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

const Form = ({login, booking, contact, onChange}) => {
    const [toggleChoice, setToggleChoice] = useState(true);
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
    const [reservationValues, setReservationValues] = useState(initialReservationValues);
    const [contactValues, setContactValues] = useState(initialContactValues);

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_ci7ya81', 'template_5b8jfeg', e.target, 'user_pBO8DUUY9cNNcg33wDKAk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleContactInputsChange = e => (
        setContactValues({
            ...contactValues,
            [e.target.name]: e.target.value
        })
    );

    const handleReservationInputsChange = e => (
        setReservationValues({
            ...reservationValues,
            [e.target.name]: e.target.value
        })
    )

    const handleLoginInputsChange = e => (
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
    )

    const clearLoginInputs = () => {
        setToggleChoice(!toggleChoice);
        toggleChoice ?
            setLoginValues(initialLoginValues) :
            setSignUpValues(initialSignUpValues)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(contactValues);
    }

    return (
        <S.FormWrapper>
            <S.FormTitle>
                {
                    contact && 'Napisz do nas'
                }
                {
                    booking && 'Rezerwacja'
                }
                {
                    login && (
                        toggleChoice ? 'Logowanie' : 'Rejestracja'
                    )
                }
            </S.FormTitle>
            <S.Form onSubmit={sendEmail}>
                {
                    contact &&
                        <>
                            <ContactFormInputs
                                contactValues={contactValues}
                                onChange={handleContactInputsChange}
                            />
                            <S.ButtonWrapper>
                                <S.Button type="submit">
                                    Wyślij
                                </S.Button>
                            </S.ButtonWrapper>
                        </>
                }
                {
                    booking &&
                        <>
                            <ReservationFormInputs
                                reservationValues={reservationValues}
                                onChange={handleReservationInputsChange}
                            />
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
                        </>
                }
                {
                    login && (
                        toggleChoice ?
                            <LoginFormInputs
                                loginValues={loginValues}
                                onChange={handleLoginInputsChange} /> :
                            <SignUpFormInputs
                                signUpValues={signUpValues}
                                onChange={handleLoginInputsChange} />
                    )
                }
                {
                    login &&
                        <>
                            <S.ButtonWrapper>
                                <S.NavLink to='/'>
                                    <S.Button name='submit' type='submit' onChange={() => onChange} >
                                        { toggleChoice ? 'Zaloguj' : 'Zarejestruj' }
                                    </S.Button>
                                </S.NavLink>
                            </S.ButtonWrapper>
                            <S.ChangeFormWrapper>
                                <p>
                                    { toggleChoice ? 'Nie masz jeszcze konta?' : 'Masz juz konto?' }
                                </p>
                                <S.ChangeFormButton onClick={clearLoginInputs} >
                                    { toggleChoice ? 'Zarejestruj się' : 'Zaloguj się' }
                                </S.ChangeFormButton>
                            </S.ChangeFormWrapper>
                        </>
                }
            </S.Form>
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