import React from 'react';
import {ModalStatus} from "./Modal.style";

const Modal = ({ children, error }) => (
    <ModalStatus error={error}>
        { children }
    </ModalStatus>
)

export default Modal;