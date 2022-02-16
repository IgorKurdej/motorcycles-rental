import React, {useState, useRef, useEffect} from 'react';
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
  border-color: #797878;
  font-size: 16px;
  background-color: white;
  
  :focus {
    border-bottom-color: forestgreen;
  }
`

const ReservationFormInputs = ({
        register,
        errors,
        control,
        startDate,
        setStartDate,
        endDate,
        setEndDate,

}) => {
    return(
        <Wrapper>
            {/* JAKO VALUE PRZYPISAC EMAIL ZALOGOWANEGO USERA */}
            <Input
                value="igor31@o2.pl"
                name='email'
                // register={register}
                disabled
            />
            <ErrorMessage />

            <DateInput
                required
                selected={startDate}
                onChange={date => setStartDate(date)}
                placeholderText="Data rozpoczęcia"
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                maxDate={endDate}
            />
            <ErrorMessage />

            <DateInput
                required
                selected={endDate}
                onChange={date => setEndDate(date)}
                placeholderText="Data zakończenia"
                dateFormat='dd/MM/yyyy'
                minDate={startDate === null ? new Date() : startDate}
            />
            <ErrorMessage />

        </Wrapper>
)}


export default ReservationFormInputs;