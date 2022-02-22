import React from 'react';
import * as S from './MotorcycleItem.style';
import ItemDetails from "../ItemDetails/ItemDetails";

const MotorcycleItem = (props) => (
    <>
        {
            props.reservation &&
                <S.Wrapper reservation>
                    <S.ImageWrapper>
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
                <S.Wrapper booking>
                    <S.ImageWrapper>
                        <S.MotoImg src={props.motorcycle.img} />
                    </S.ImageWrapper>
                    <ItemDetails {...props.motorcycle} booking />
                </S.Wrapper>
        }
        {
            props.offer &&
                <>
                    <S.Wrapper>
                        <S.ImageWrapper offer>
                            <S.MotoImg src={props.img} />
                        </S.ImageWrapper>
                        <ItemDetails {...props} />
                    </S.Wrapper>
                    <hr/>
                </>
        }
    </>
);

export default MotorcycleItem;