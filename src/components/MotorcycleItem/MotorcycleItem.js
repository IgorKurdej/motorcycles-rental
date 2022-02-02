import React from 'react';
import * as S from './MotorcycleItem.style';
import ItemDetails from "../ItemDetails/ItemDetails";

const MotorcycleItem = (props) => {
    return (
        props.reservation ? (
                <S.Wrapper reservation>
                    <S.ImageWrapper>
                        <S.MotoImg src={props.motorcycleData.img} reservation/>
                    </S.ImageWrapper>
                    <ItemDetails
                        motorcycleData={props.motorcycleData}
                        reservationData={props.reservationData}
                        reservation
                    />
                </S.Wrapper>
            ) : (
                props.form ? (
                        <S.Wrapper booking>
                            <S.ImageWrapper>
                                <S.MotoImg src={props.img} />
                            </S.ImageWrapper>
                            <ItemDetails {...props} booking />
                        </S.Wrapper>
                    ) : (
                        <>
                            <S.Wrapper>
                                <S.ImageWrapper>
                                    <S.MotoImg src={props.img} />
                                </S.ImageWrapper>
                                <ItemDetails {...props} />
                            </S.Wrapper>
                            <hr/>
                        </>
                    )
            )
    );
};

export default MotorcycleItem;