import React from 'react';
import FormSchema from "../FormSchema/FormSchema";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { motorcycleSchema } from "../../validations/ValidationSchema";
import styled from 'styled-components';
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const FormMotorcycle = () => {
    const {register, formState: {errors}, reset, handleSubmit} = useForm({
        resolver: yupResolver(motorcycleSchema)
    });

    const motorcyclesInput = [
        {
            name: 'brand',
            placeholder: 'Marka',
            register: register,
            errMessage: errors.brand?.message,
        },
        {
            name: 'model',
            placeholder: 'Model',
            register: register,
            errMessage: errors.lastname?.message,
        },
        {
            name: 'capacity',
            type: 'number',
            placeholder: 'Pojemność silnika',
            register: register,
            errMessage: errors.pojemność?.message,
        },
        {
            name: 'power',
            type: 'number',
            placeholder: 'Moc silnika',
            register: register,
            errMessage: errors.moc?.message,
        },
        {
            name: 'year',
            type: 'number',
            placeholder: 'Rok produkcji',
            register: register,
            errMessage: errors.rok?.message,
        },
        {
            name: 'price',
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

        axios
            .post('https://motorcycle-rental.herokuapp.com/addMotorcycle', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <Wrapper>
            <FormSchema
                title={'Dodaj motocykl'}
                inputs={motorcyclesInput}
                button={'Dodaj'}
                handleSubmit={handleSubmit(submitFunction)}
            />
        </Wrapper>
    );
};

export default FormMotorcycle;