import React from 'react';
import * as S from './BookingForm.style';
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";
import Form from "../Form/Form";

const BookingForm = ({motorcycle}) => (
    <S.Wrapper>
        <S.MotorcycleWrapper>
            <MotorcycleItem motorcycle={motorcycle} booking />
        </S.MotorcycleWrapper>
        <S.Hr />
        <S.FormWrapper>
            <Form booking motorcycle={motorcycle.id} price={motorcycle.cena} />
        </S.FormWrapper>
    </S.Wrapper>
);

export default BookingForm;