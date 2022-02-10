import React, {useEffect, useState} from 'react';
import * as S from './Form.style';
import LoginFormInputs from "./LoginFormInputs/LoginFormInputs";
import SignUpFormInputs from "./SignUpFormInputs/SignUpFormInputs";
import ReservationFormInputs from "./ReservationFormInputs/ReservationFormInputs";
import ContactFormInputs from "./ContactFormInputs/ContactFormInputs";
import ClearIcon from '@mui/icons-material/Clear';
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
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
    const [reservationValues, setReservationValues] = useState(initialReservationValues);
    const [contactValues, setContactValues] = useState(initialContactValues);

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    useEffect(() => {
        setReservationValues({
            ...reservationValues,
            startDate: selectedStartDate
        })
    }, [selectedStartDate])

    useEffect(() => {
        setReservationValues({
            ...reservationValues,
            endDate: selectedEndDate
        })
    }, [selectedEndDate])


    const sendEmail = e => {
        e.preventDefault();
        console.log('SEND');
        console.log(contactValues);

        //sprawdzam czy ok, jezeli tak to iscontactmodalopen ustawiam na true
        // po zamknieciu modala ustawic contactvalues na initial
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
        // console.log(reservationValues);
        console.log(signUpValues);
    }

    const handleModal = () => {
        setIsContactModalOpen(true);
        setTimeout(() => setIsContactModalOpen(false), 3000);
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
            <S.Form onSubmit={ contact ? sendEmail : handleSubmit }>
                {
                    contact &&
                        <>
                            <ContactFormInputs
                                contactValues={contactValues}
                                onChange={handleContactInputsChange}
                            />
                            <S.ButtonWrapper>
                                <S.Button type="submit" onClick={handleModal}>
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
                                startDate={selectedStartDate}
                                setStartDate={setSelectedStartDate}
                                endDate={selectedEndDate}
                                setEndDate={setSelectedEndDate}
                            />
                            <S.ButtonsContainer>
                                <S.ButtonWrapper>
                                    {/*<S.NavLink to='/konto' >*/}
                                        <S.Button confirm >
                                            Zarezerwuj
                                        </S.Button>
                                    {/*</S.NavLink>*/}
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
                                {/*<S.NavLink to='/'>*/}
                                    <S.Button name='submit' type='submit' onChange={() => onChange} >
                                        { toggleChoice ? 'Zaloguj' : 'Zarejestruj' }
                                    </S.Button>
                                {/*</S.NavLink>*/}
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
                {
                    isContactModalOpen &&
                        <S.ContactModal>
                            <p>Wiadomość wysłana</p>
                        </S.ContactModal>
                }
            </S.Form>
        </S.FormWrapper>
    );
};

export default Form;