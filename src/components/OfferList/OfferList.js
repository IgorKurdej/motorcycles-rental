import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../../context";
import Axios from 'axios';
import * as S from './OfferList.style';
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";

const OfferList = () => {
    const { motorcyclesData } = useContext(AppContext);

    return (
        <S.Container>
            { motorcyclesData.map(motorcycle => <MotorcycleItem key={motorcycle.id} {...motorcycle} offer />) }
        </S.Container>
    );
};

export default OfferList;