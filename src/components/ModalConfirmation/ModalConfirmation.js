import React from 'react';
import * as S from './ModalConfirmation.style'

const ModalConfirmation = ({ title, acceptFn, discardFn }) => (
    <S.Modal>
        <S.Title>{title}</S.Title>
        <S.ButtonsWrapper>
            <S.Button onClick={acceptFn}>Zatwierdź</S.Button>
            <S.Button onClick={discardFn} secondary>Anuluj</S.Button>
        </S.ButtonsWrapper>
    </S.Modal>
);

export default ModalConfirmation;