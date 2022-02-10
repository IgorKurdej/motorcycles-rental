import React, {useContext} from 'react';
import AppContext from "../../context";
import * as S from './MotorcyclesList.style';
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";

const MotorcyclesList = () => {
    const { motorcyclesData } = useContext(AppContext);

    return (
        <S.Container>
            { motorcyclesData.map(motorcycle => <MotorcycleItem key={motorcycle.id} {...motorcycle} offer />) }
        </S.Container>
    );
};

export default MotorcyclesList;