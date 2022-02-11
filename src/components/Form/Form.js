import React, {useEffect, useState} from 'react';
import * as S from './Form.style';
import LoginFormInputs from "./LoginFormInputs/LoginFormInputs";
import SignUpFormInputs from "./SignUpFormInputs/SignUpFormInputs";
import ReservationFormInputs from "./ReservationFormInputs/ReservationFormInputs";
import ContactFormInputs from "./ContactFormInputs/ContactFormInputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema, contactSchema, logInSchema, reservationSchema } from '../../validations/ValidationSchema'
import ClearIcon from '@mui/icons-material/Clear';
import emailjs from 'emailjs-com'
import Input from "./Input/Input";

const initialLoginValues = {
    email: '',
    password: ''
};

const initialSignUpValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: ''
};

const initialReservationValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    motorcycle: '',
    price: ''
    // dodatkowo id motocykla, cena za wypozycznie
};

const initialContactValues = {
    // email: 'jan.kowalski@gmail.com',
    email: '',
    title: '',
    message: ''
};

const Form = ({login, booking, motorcycle, price, contact, onChange}) => {
    const [toggleChoice, setToggleChoice] = useState(true);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
    const [reservationValues, setReservationValues] = useState(initialReservationValues);
    const [contactValues, setContactValues] = useState(initialContactValues);

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [numberOfDays, setNumberOfDays] = useState(1);
    const [finalPrice, setFinalPrice] = useState(price);

    // const {signUp, handleSubmitSignUp, signUpErrors} = useForm({resolver: yupResolver(signUpSchema)});
    // const {logIn, handleSubmitLogin, loginErrors} = useForm({resolver: yupResolver(logInSchema)});
    // const {sendMessage, handleSubmitContact, contactErrors} = useForm({resolver: yupResolver(contactSchema)});
    // const {makeReservation, handleSubmitReservation, reservationErrors} = useForm({resolver: yupResolver(reservationSchema)});




    useEffect(() => {
        setReservationValues({
            ...reservationValues,
            startDate: selectedStartDate
        });

        setNumberOfDays((selectedEndDate - selectedStartDate) / (1000 * 3600 * 24));
        setFinalPrice(numberOfDays * finalPrice);
    }, [selectedStartDate])

    useEffect(() => {
        setReservationValues({
            ...reservationValues,
            endDate: selectedEndDate
        });

        setNumberOfDays((selectedEndDate - selectedStartDate) / (1000 * 3600 * 24));
        setFinalPrice(numberOfDays * finalPrice);
    }, [selectedEndDate]);


    const handleCheckoutChange = () => {
        return (
            (selectedStartDate === null || selectedEndDate === null) ||
            (numberOfDays === 0 || numberOfDays === 1) ?
                <S.Checkout>
                    <p>Cena za dzień</p>
                    <p>{price} zł</p>
                </S.Checkout>
                :
                <S.Checkout>
                    <p>Cena za {numberOfDays} dni</p>
                    <p>{price * numberOfDays} zł</p>
                </S.Checkout>
        )
    };

    const sendEmail = e => {
        e.preventDefault();

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

    const handleSubmitForm = e => {
        e.preventDefault();
        console.log(reservationValues);
        // console.log(signUpValues);


        //-------------------------------------------------------------------
        // przypisanie pozostalych wartosci, ktore nie sa pobierane z formularza

        // initialReservationValues.motorcycle = motorcycle;
        // initialReservationValues.price = finalPrice;
        //-------------------------------------------------------------------
        // TO SAMO Z MAILEM W CONTACT FORM!!!
    }

    const handleModal = () => {
        setIsContactModalOpen(true);
        setTimeout(() => setIsContactModalOpen(false), 3000);
    }

    const {register: contactRegister, formState: {errors: contactErrors}, handleSubmit: handleContactSubmit} = useForm({
        resolver: yupResolver(contactSchema)
    });

    const {register: reservationRegister, formState: {errors: reservationErrors}, handleSubmit: handleReservationSubmit} = useForm({
        resolver: yupResolver(reservationSchema)
    });

    const {register: loginRegister, formState: {errors: loginErrors}, handleSubmit: handleLoginSubmit} = useForm({
        resolver: yupResolver(logInSchema)
    });

    const {register: signupRegister, formState: {errors: signupErrors}, handleSubmit: handleSignupSubmit} = useForm({
        resolver: yupResolver(signUpSchema)
    });

    const onContactSubmit = (data) => {
        setContactValues(data);
        handleModal();
        console.log(contactValues);
    };

    const onReservationSubmit = (data) => {
        console.log(data);
        setReservationValues(data);
    };

    const onLoginSubmit = (data) => {
        console.log(data);
        setLoginValues(data);
    };

    const onSignupSubmit = (data) => {
        console.log(data);
        setSignUpValues(data);
    };

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
            {/*<S.Form onSubmit={ contact ? sendEmail : handleSubmitForm } autocomplete="off" >*/}
            <S.Form onSubmit={ handleSignupSubmit(onSignupSubmit) } >
                {
                    contact &&
                        <>
                            <ContactFormInputs
                                // contactValues={contactValues}
                                // onChange={handleContactInputsChange}
                                register={contactRegister}
                                errors={contactErrors}
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
                                startDate={selectedStartDate}
                                setStartDate={setSelectedStartDate}
                                endDate={selectedEndDate}
                                setEndDate={setSelectedEndDate}
                                register={reservationRegister}
                                errors={reservationErrors}
                            />
                            {
                                handleCheckoutChange()
                            }
                            <S.ButtonsContainer>
                                <S.ButtonWrapper>
                                    {/*<S.NavLink to='/konto' >*/}
                                        <S.Button type='submit' confirm >
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
                                onChange={handleLoginInputsChange}
                                register={loginRegister}
                                errors={loginErrors}
                            /> :
                            <SignUpFormInputs
                                signUpValues={signUpValues}
                                onChange={handleLoginInputsChange}
                                register={signupRegister}
                                errors={signupErrors}
                            />
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
                    // Contact modal do osobnego componentu
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