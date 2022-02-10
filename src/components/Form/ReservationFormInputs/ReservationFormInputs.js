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
  //background-color: forestgreen;
  width: 100%;
  min-height: ${props => props.as && '250px'};
  resize: none;
  margin-bottom: 10px;
  padding: 5px;
  outline: 0;
  border-width: 0 0 2px;
  font-size: 16px;
  background-color: white;
  //height: 200px;
  
  //align-items: center;
  
  :focus {
    border-bottom-color: forestgreen;
  }
`
let days;

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
        {/*{*/}
        {/*    days = new Date('02/10/2022').getTime() - new Date('02/8/2022').getTime()*/}
        {/*}*/}
        {/*{*/}
        {/*    console.log(days/(1000*60*60*24))*/}
        {/*}*/}
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