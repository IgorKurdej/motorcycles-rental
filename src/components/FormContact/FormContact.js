import React, {useEffect, useState} from 'react';
import FormSchema from "../FormSchema/FormSchema";
import emailjs from "emailjs-com";
import Modal from "../Modal/Modal";

const FormContact = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [inputValues, setInputValues] = useState({
        // TODO przypisac pod email email usera jak juz bedzie globalny
        email: '',
        title: '',
        message: ''
    });

    const handleInputChange = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    }

    const clearInputValues = () => {
        setInputValues({
            email: '',
            title: '',
            message: ''
        });
    }

    const inputs = [
        {
            name: 'email',
            value: inputValues.email,
            onChange: handleInputChange,
            type: 'email',
            placeholder: 'twój email',
            required: true
        },
        {
            name: 'title',
            value: inputValues.title,
            onChange: handleInputChange,
            placeholder: 'tytuł (np. numer zamówienia)',
            required: true
        },
        {
            name: 'message',
            value: inputValues.message,
            onChange: handleInputChange,
            placeholder: 'wiadomość',
            as: 'textarea',
            required: true
        }
    ];

    useEffect(() => {
        toggleModal && setTimeout(() => setToggleModal(false), 3000);
    }, [toggleModal])

    const sendEmail = e => {
        e.preventDefault();
        clearInputValues();

        emailjs
            .sendForm('service_ci7ya81', 'template_5b8jfeg', e.target, 'user_pBO8DUUY9cNNcg33wDKAk')
            .then(() => {
                setToggleModal(true);
                setModalMessage('Wiadomość wysłana');
            }, error => {
                console.log(error.text);
            });
    }

    return (
        <div>
            {
                toggleModal && <Modal>{modalMessage}</Modal>
            }
            <FormSchema
                title='Napisz do nas'
                inputs={inputs}
                button='Wyślij'
                handleSubmit={sendEmail}
            />
        </div>
    );
};

export default FormContact;