import React from 'react';
import * as S from './BookingFormWrapper.style';
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";
import BookingForm from './BookingForm/BookingForm'

const BookingFormWrapper = ({ motorcycle }) => (
    <S.Wrapper>
        <S.MotorcycleWrapper>
            <MotorcycleItem motorcycle={motorcycle} booking />
        </S.MotorcycleWrapper>
        <S.Hr />
        <S.FormWrapper>
            <BookingForm motorcycle={motorcycle.id} price={motorcycle.cena} />
        </S.FormWrapper>
    </S.Wrapper>
);

export default BookingFormWrapper;