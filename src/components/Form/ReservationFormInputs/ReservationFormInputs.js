import React, {useState} from 'react';
import { Controller } from "react-hook-form";
import DatePicker from 'react-datepicker';
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

const DateInput = styled(DatePicker)`
  width: 100%;
  min-height: ${props => props.as && '250px'};
  resize: none;
  padding: 5px;
  outline: 0;
  border-width: 0 0 1px;
  font-size: 16px;
  background-color: white;
  
  :focus {
    border-bottom-color: forestgreen;
  }
`

const ReservationFormInputs = ({
        // reservationValues,
        // onChange,
        register,
        errors,
        control,
        startDate,
        setStartDate,
        endDate,
        setEndDate,

}) => (
    <Wrapper>
        <Input
            placeholder='Imię'
            name='firstname'
            register={register}
        />
        <ErrorMessage message={errors.firstname?.message} />
        <Input
            placeholder='Nazwisko'
            name='lastname'
            register={register}
        />
        <ErrorMessage message={errors.lastname?.message} />
        <Input
            type='email'
            placeholder='Email'
            name='email'
            register={register}
        />
        <ErrorMessage message={errors.email?.message} />
        <Input
            placeholder='Telefon'
            name='phone'
            register={register}
        />
        <ErrorMessage message={errors.phone?.message} />
        <Controller
            name='startDate'
            control={control}
            render={({ field: { onChange, value }}) => (
                <DateInput
                    onChange={onChange}
                    selected={value}
                    placeholderText="Data rozpoczęcia"
                    dateFormat='dd/MM/yyyy'
                    minDate={new Date()}
                    maxDate={endDate}
                    // startDate={startDate}
                    // endDate={endDate}
                />
            )}/>
        <ErrorMessage message={errors.startDate?.message} />
        <Controller
        name='endDate'
        control={control}
        render={({ field: { onChange, value }}) => (
            <DateInput
                onChange={onChange}
                selected={value}
                placeholderText="Data zakończenia"
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                // startDate={startDate}
                // endDate={endDate}
            />
        )}/>
        <ErrorMessage message={errors.endDate?.message} />
    </Wrapper>
)


export default ReservationFormInputs;