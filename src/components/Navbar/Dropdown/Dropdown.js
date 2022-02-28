import React from 'react';
import {Link, Navigate} from "react-router-dom";
import * as S from './Dropdown.style';

const Dropdown = () => (
    <S.Wrapper>
        <S.DdLink to='/user' >Twoje dane</S.DdLink>
        <S.DdLink to='/rezerwacje' >Twoje rezerwacje</S.DdLink>
    </S.Wrapper>
);

export default Dropdown;