import React, {useState} from 'react';
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
        reservationValues,
        onChange,
        startDate,
        setStartDate,
        endDate,
        setEndDate
}) => (
    <Wrapper>
        <Input
            placeholder='Imię'
            name='firstname'
            value={reservationValues.firstname}
            onChange={onChange}
        />
        <ErrorMessage />
        <Input
            placeholder='Nazwisko'
            name='lastname'
            value={reservationValues.lastname}
            onChange={onChange}
        />
        <ErrorMessage />
        <Input
            type='email'
            placeholder='Email'
            name='email'
            value={reservationValues.email}
            onChange={onChange}
        />
        <ErrorMessage />
        <Input
            placeholder='Telefon'
            name='phone'
            value={reservationValues.phone}
            onChange={onChange}
        />
        <ErrorMessage />
        <DateInput
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="Data rozpoczęcia"
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            maxDate={endDate}
            startDate={startDate}
            endDate={endDate}
        />
        <ErrorMessage />
        <DateInput
            selected={endDate}
            onChange={date => setEndDate(date)}
            placeholderText="Data zakończenia"
            dateFormat='dd/MM/yyyy'
            minDate={startDate !== null ? startDate : new Date()}
            startDate={startDate}
            endDate={endDate}
        />
        {/*<ErrorMessage />*/}
    </Wrapper>
)


export default ReservationFormInputs;