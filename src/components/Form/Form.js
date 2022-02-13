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
import * as yup from "yup";

const Form = ({login, booking, motorcycle, price, contact, onChange}) => {
    const [toggleChoice, setToggleChoice] = useState(true);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [numberOfDays, setNumberOfDays] = useState(1);

    const {register: contactRegister, formState: {errors: contactErrors}, handleSubmit: handleContactSubmit} = useForm({
        resolver: yupResolver(contactSchema)
    });
    const {register: reservationRegister, formState: {errors: reservationErrors}, handleSubmit: handleReservationSubmit, control} = useForm({
        resolver: yupResolver(reservationSchema)
    });
    const {register: loginRegister, formState: {errors: loginErrors}, handleSubmit: handleLoginSubmit} = useForm({
        resolver: yupResolver(logInSchema)
    });
    const {register: signupRegister, formState: {errors: signupErrors}, handleSubmit: handleSignupSubmit} = useForm({
        resolver: yupResolver(signUpSchema)
    });

    useEffect(() => {
        setNumberOfDays((selectedEndDate - selectedStartDate) / (1000 * 3600 * 24));
    }, [selectedStartDate, selectedEndDate])

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
        // e.preventDefault();
        console.log(e);

        emailjs.sendForm('service_ci7ya81', 'template_5b8jfeg', e, 'user_pBO8DUUY9cNNcg33wDKAk')
            .then((result) => {
                // handleModal();
                console.log(result);
            }, (error) => {
                // handleModal();
                console.log(error.text);
            });

        //sprawdzam czy ok, jezeli tak to iscontactmodalopen ustawiam na true
        // po zamknieciu modala ustawic contactvalues na initial
    }

    const handleModal = () => {
        setIsContactModalOpen(true);
        setTimeout(() => setIsContactModalOpen(false), 3000);
    }

    const assignDatesToObject = data => {
        data.startDate = selectedStartDate;
        data.endDate = selectedEndDate;
        data.motorcycleId = motorcycle;
        data.price = numberOfDays * price;
        console.log(data);
    }

    const onSubmit = data => {
        booking ?
            (
                selectedStartDate === null || selectedEndDate === null ?
                console.log('podaj date') :
                assignDatesToObject(data)
            ) :
            console.log(data)
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
            <S.Form
                onSubmit={
                    booking ? handleReservationSubmit(onSubmit) :
                    contact ? handleContactSubmit(sendEmail) :
                    login && toggleChoice ?
                        handleLoginSubmit(onSubmit) :
                        handleSignupSubmit(onSubmit)
                }>
                    {
                        contact &&
                        <>
                            <ContactFormInputs
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
                                register={reservationRegister}
                                errors={reservationErrors}
                                control={control}
                                startDate={selectedStartDate}
                                endDate={selectedEndDate}
                                setStartDate={setSelectedStartDate}
                                setEndDate={setSelectedEndDate}
                            />
                            {
                                handleCheckoutChange()
                            }
                            <S.ButtonsContainer>
                                <S.ButtonWrapper>
                                    {/*<S.NavLink to='/konto' >*/}
                                    <S.Button type="submit" confirm >
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
                                    register={loginRegister}
                                    errors={loginErrors}
                                /> :
                                <SignUpFormInputs
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
                                <S.ChangeFormButton onClick={() => setToggleChoice(!toggleChoice)} >
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

// const handleContactInputsChange = e => (
//     setContactValues({
//         ...contactValues,
//         [e.target.name]: e.target.value
//     })
// );
//
// const handleReservationInputsChange = e => (
//     setReservationValues({
//         ...reservationValues,
//         [e.target.name]: e.target.value
//     })
// )
//
// const handleLoginInputsChange = e => (
//     toggleChoice ?
//         setLoginValues({
//             ...loginValues,
//             [e.target.name]: e.target.value
//         }) : (
//             setSignUpValues({
//                 ...signUpValues,
//                 [e.target.name]: e.target.value
//             })
//         )
// )