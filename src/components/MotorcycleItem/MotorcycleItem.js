import React from 'react';
import * as S from './MotorcycleItem.style';
import ItemDetails from "../ItemDetails/ItemDetails";

const MotorcycleItem = (props) => (
    <>
        {
            props.reservation &&
                <S.Wrapper reservation>
                    <S.ImageWrapper reservation>
                        <S.MotoImg src={props.reservationData.img} reservation/>
                    </S.ImageWrapper>
                    <ItemDetails
                        reservationData={props.reservationData}
                        deleteReservation={props.deleteRes}
                        userReservation={props.userReservation}
                        reservation
                    />
                </S.Wrapper>
        }
        {
            props.booking &&
                <S.Wrapper booking motoList={props.motoList} >
                    <S.ImageWrapper booking>
                        <S.MotoImg src={props.motorcycle.img} booking />
                    </S.ImageWrapper>
                    <ItemDetails {...props.motorcycle} booking />
                </S.Wrapper>
        }
        {
            props.offer &&
                <>
                    <S.Wrapper offer>
                        <S.ImageWrapper offer>
                            <S.MotoImg src={props.img} offer />
                        </S.ImageWrapper>
                        <ItemDetails {...props} />
                    </S.Wrapper>
                    <S.Hr />
                </>
        }
    </>
);

export default MotorcycleItem;