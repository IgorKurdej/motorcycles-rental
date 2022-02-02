import React from 'react';
import Input from "../Input/Input";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const ReservationFormInputs = ({reservationValues, onChange}) => {
    return (
        <>
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
            <Input
                id='start'
                placeholder='Data rozpoczęcia'
                name='startDate'
                value={reservationValues.startDate}
                onChange={onChange}
            />
            <Input
                id='end'
                placeholder='Data zakończenia'
                name='endDate'
                value={reservationValues.endDate}
                onChange={onChange}
            />
        </Wrapper>

        </>
    );
};

export default ReservationFormInputs;