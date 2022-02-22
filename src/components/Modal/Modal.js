import React from 'react';
import * as S from "./Modal.style";

const Modal = ({ children, error }) => (
    <S.ModalStatus error={error}>{ children }</S.ModalStatus>
)

export default Modal;