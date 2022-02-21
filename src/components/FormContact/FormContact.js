import React from 'react';
import Input from "../Form/Input/Input";
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import FormSchema from "../FormSchema/FormSchema";
import emailjs from "emailjs-com";

const inputs = [
    {
        name: 'email',
        value: 'igor31@o2.pl',
        disabled: true
    },
    {
        name: 'title',
        placeholder: 'tytuł'
    },
    {
        name: 'message',
        placeholder: 'wiadomość',
        as: 'textarea'
    }
];

const FormContact = () => {
    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm('service_ci7ya81', 'template_5b8jfeg', e.target, 'user_pBO8DUUY9cNNcg33wDKAk')
            .then(result => {
                console.log(result);
            }, error => {
                console.log(error.text);
            });
    }

    // TODO WALIDACJA INPUTOW

    return (
        <div>
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