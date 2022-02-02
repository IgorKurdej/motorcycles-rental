import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './Banner.style';

const Banner = () => {
    return (
        <>
            <S.Container>
                <S.LeftSide>
                    <S.Circle />
                    <S.ImageContainer />
                </S.LeftSide>
                <S.RightSide>
                    <S.Title>MotoRental</S.Title>
                    <S.Description>Wypożyczalnia motocykli w Polsce</S.Description>
                    <Link to='/oferta'>
                        <S.Button>SPRAWDŹ OFERTĘ</S.Button>
                    </Link>
                </S.RightSide>
            </S.Container>
        </>
    );
};

export default Banner;