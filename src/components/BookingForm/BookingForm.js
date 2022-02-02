import React from 'react';
import * as S from './BookingForm.style';
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";
import Form from "../Form/Form";

const BookingForm = ({motorcycle}) => {
    return (
        <S.Wrapper>
            <S.MotorcycleWrapper>
                <MotorcycleItem {...motorcycle} form />
            </S.MotorcycleWrapper>
            <S.Hr />
            <S.FormWrapper>
                <Form booking />
            </S.FormWrapper>
        </S.Wrapper>
    );
};

export default BookingForm;