import React from 'react';
import FormSchema from "../FormSchema/FormSchema";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { motorcycleSchema } from "../../validations/ValidationSchema";

const FormMotorcycle = () => {
    const {register, formState: {errors}, reset, handleSubmit} = useForm({
        resolver: yupResolver(motorcycleSchema)
    });

    const motorcyclesInput = [
        {
            name: 'marka',
            placeholder: 'Marka',
            register: register,
            errMessage: errors.marka?.message,
        },
        {
            name: 'model',
            placeholder: 'Model',
            register: register,
            errMessage: errors.lastname?.message,
        },
        {
            name: 'pojemność',
            type: 'number',
            placeholder: 'Pojemność silnika',
            register: register,
            errMessage: errors.pojemność?.message,
        },
        {
            name: 'moc',
            type: 'number',
            placeholder: 'Moc silnika',
            register: register,
            errMessage: errors.moc?.message,
        },
        {
            name: 'rok',
            type: 'number',
            placeholder: 'Rok produkcji',
            register: register,
            errMessage: errors.rok?.message,
        },
        {
            name: 'cena',
            type: 'number',
            placeholder: 'Cena',
            register: register,
            errMessage: errors.cena?.message,
        },
        {
            name: 'img',
            placeholder: 'Link do zdjęcia',
            register: register,
            errMessage: errors.img?.message,
        }
    ];

    const submitFunction = data => {
        console.log(data);
    }

    return (
        <div>
            <FormSchema
                title={'Dodaj motocykl'}
                inputs={motorcyclesInput}
                button={'Dodaj'}
                handleSubmit={handleSubmit(submitFunction)}
            />
        </div>
    );
};

export default FormMotorcycle;