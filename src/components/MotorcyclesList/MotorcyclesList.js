import React, {useEffect, useState} from 'react';
import * as S from './MotorcyclesList.style'
import axios from "axios";
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";

const MotorcyclesList = () => {
    const [motorcycles, setMotorcycles] = useState([]);

    useEffect(() => {
        axios
            .get('https://motorcycle-rental.herokuapp.com/motorcycles')
            .then(res => {
                setMotorcycles(res.data.sort((val1, val2) => val2.id - val1.id))
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <S.Wrapper>
            <S.ButtonWrapper>
                <S.Button>+ Dodaj motocykl</S.Button>
            </S.ButtonWrapper>
            <S.MotorcyclesWrapper>
                {
                    motorcycles.map(item => <MotorcycleItem motorcycle={item} booking motoList />)
                }
            </S.MotorcyclesWrapper>
        </S.Wrapper>
    );
};

export default MotorcyclesList;