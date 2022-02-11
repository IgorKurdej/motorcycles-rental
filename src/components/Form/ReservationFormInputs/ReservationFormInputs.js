import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import Input from "../Input/Input";
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
  margin-bottom: 10px;
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
        <Input
            placeholder='Nazwisko'
            name='lastname'
            value={reservationValues.lastname}
            onChange={onChange}
        />
        <Input
            type='email'
            placeholder='Email'
            name='email'
            value={reservationValues.email}
            onChange={onChange}
        />
        <Input
            placeholder='Telefon'
            name='phone'
            value={reservationValues.phone}
            onChange={onChange}
        />
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
        <DateInput
            selected={endDate}
            onChange={date => setEndDate(date)}
            placeholderText="Data zakończenia"
            dateFormat='dd/MM/yyyy'
            minDate={startDate !== null ? startDate : new Date()}
            startDate={startDate}
            endDate={endDate}
        />
    </Wrapper>
)


export default ReservationFormInputs;